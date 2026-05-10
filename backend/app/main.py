"""
FastAPI application factory.

Architectural notes:
- We use the "factory" pattern (`create_app`) rather than instantiating a
  global FastAPI() at module load. This makes it easy to spin up a fresh
  app for tests, override settings, or add startup logic in one place.

- CORS middleware is required so the Vite frontend (default port 5173)
  can call this API from the browser in development.

- `/health` exists outside any versioned API prefix because it's an
  infrastructure concern (uptime checks), not a versioned API surface.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app import __version__
from app.config import settings


def create_app() -> FastAPI:
    app = FastAPI(
        title="mAI-coach API",
        version=__version__,
        description=(
            "Backend for mAI-coach — an AI-powered women's health and "
            "fitness dashboard. Foundation step: just FastAPI for now."
        ),
    )

    # Allow the React dev server to call this API from the browser.
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origin_list,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Liveness check — used to confirm the server is running.
    @app.get("/health", tags=["meta"])
    def health() -> dict[str, str]:
        return {
            "status": "ok",
            "version": __version__,
            "environment": settings.app_env,
        }

    # Helpful root response so http://localhost:8000 isn't a 404.
    @app.get("/", tags=["meta"])
    def root() -> dict[str, str]:
        return {
            "name": "mAI-coach API",
            "version": __version__,
            "docs": "/docs",
            "health": "/health",
        }

    return app


# uvicorn imports `app` from this module to run the server.
app = create_app()
