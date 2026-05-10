# mAI-coach backend

FastAPI service for the mAI-coach women's health & fitness dashboard.

**Current stage:** foundation only — FastAPI is running with a health check.
SQLite + SQLModel + Alembic migrations come next.

## Running locally

You'll need [uv](https://docs.astral.sh/uv/) installed (`brew install uv` on macOS).

```bash
cd backend
uv sync                               # creates .venv and installs deps
cp .env.example .env                  # copy env template (edit if you like)
uv run uvicorn app.main:app --reload  # start the dev server
```

Then open:

- API root: <http://127.0.0.1:8000/>
- Health check: <http://127.0.0.1:8000/health>
- Swagger UI (interactive API docs): <http://127.0.0.1:8000/docs>

`--reload` makes uvicorn watch your files and restart on every save.

## What's in here so far

```
backend/
├── pyproject.toml      # project + dependencies (managed by uv)
├── .python-version     # which Python to use
├── .env.example        # template for environment variables
├── main.py             # (empty — entry is app.main:app)
└── app/
    ├── __init__.py     # marks `app` as a Python package
    ├── config.py       # typed settings loaded from .env
    └── main.py         # FastAPI app factory + /health endpoint
```

The empty subfolders (`models/`, `services/`, etc.) get populated as we
add the database, manual logging endpoints, and AI insight pipeline.
