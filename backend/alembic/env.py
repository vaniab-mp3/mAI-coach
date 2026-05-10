"""
Alembic environment script.

Two things we customized from the default `alembic init` template:

1. We import `app.models` so SQLModel.metadata sees every table we've defined.
   This is what lets `alembic revision --autogenerate` detect new tables
   and column changes by comparing your code to the database.

2. We override the sqlalchemy.url at runtime from our app settings, so the
   database URL lives in ONE place (.env) instead of being duplicated in
   alembic.ini. The placeholder in alembic.ini is left as-is and ignored.
"""

import sys
from logging.config import fileConfig
from pathlib import Path

from sqlalchemy import engine_from_config, pool
from sqlmodel import SQLModel

from alembic import context

# Make sure the `app/` package is importable when alembic runs from `backend/`.
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

# Import the app *after* fixing sys.path. These imports trigger model
# registration with SQLModel.metadata.
import app.models  # noqa: E402, F401  (imported for side effects)
from app.config import settings  # noqa: E402

# Alembic config object (reads alembic.ini).
config = context.config

# Tell Alembic to use OUR database URL instead of the placeholder in the .ini.
config.set_main_option("sqlalchemy.url", settings.database_url)

# Set up logging from alembic.ini.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# This is what autogenerate compares against the actual database.
target_metadata = SQLModel.metadata


def run_migrations_offline() -> None:
    """Generate SQL scripts without connecting to a database."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
        # SQLite needs this so ALTER TABLE statements work in migrations.
        render_as_batch=url.startswith("sqlite"),
    )
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations against a live database connection."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
            # SQLite needs this so ALTER TABLE statements work in migrations.
            render_as_batch=connection.dialect.name == "sqlite",
        )
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
