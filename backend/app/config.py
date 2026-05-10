"""
Application configuration.

We use `pydantic-settings` so that every config value comes from environment
variables (or a .env file in development) and is validated/typed at startup.
This means a missing or malformed setting fails fast and loudly, rather
than producing weird runtime errors deep inside the app later.

As we add things like database URLs, API keys for Fitbit/Strava, and
LLM credentials, they all live here in one typed place.
"""

from functools import lru_cache
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Typed application settings loaded from environment / .env file."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",  # ignore unknown env vars rather than crashing
    )

    # Which environment we're in. Limited to a fixed set so typos fail fast.
    app_env: Literal["development", "production", "test"] = "development"

    # CORS origins as a comma-separated string in the env var,
    # exposed as a list via the property below.
    cors_origins: str = "http://localhost:5173,http://localhost:3000"

    @property
    def cors_origin_list(self) -> list[str]:
        """Parse the comma-separated CORS origins into a clean list."""
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


# `lru_cache` makes this effectively a singleton: the first call builds
# settings (reading .env once), every later call returns the cached one.
# This is the recommended FastAPI pattern.
@lru_cache
def get_settings() -> Settings:
    return Settings()


# Module-level handle for convenience.
settings = get_settings()
