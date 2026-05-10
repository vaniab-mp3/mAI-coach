# mAI-coach backend

FastAPI service for the mAI-coach women's health & fitness dashboard.

**Current stage:** FastAPI server + SQLite database + Alembic migrations.
Tables for runs, cycle entries, and symptoms are in place. Manual logging
endpoints come next.

## Running locally

You'll need [uv](https://docs.astral.sh/uv/) installed (`brew install uv` on macOS).

```bash
cd backend
uv sync                               # creates .venv and installs deps
cp .env.example .env                  # copy env template (edit if you like)
uv run alembic upgrade head           # build mai_coach.db from migrations
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
├── pyproject.toml          # project + dependencies (managed by uv)
├── .python-version         # which Python to use
├── .env.example            # template for environment variables
├── alembic.ini             # alembic config (URL is overridden in env.py)
├── alembic/
│   ├── env.py              # connects alembic to our SQLModel metadata + DB URL
│   ├── script.py.mako      # template used when generating new migrations
│   └── versions/           # one file per migration (kept in version control)
└── app/
    ├── __init__.py         # marks `app` as a Python package
    ├── config.py           # typed settings loaded from .env
    ├── database.py         # SQLAlchemy engine + per-request session
    ├── main.py             # FastAPI app factory + /health endpoint
    └── models/             # SQLModel table definitions
        ├── __init__.py     # re-exports models so alembic can find them
        ├── run.py          # Run table (manual + Strava-ready)
        └── cycle.py        # CycleEntry, Symptom, junction table
```

## Database

We use **SQLite** (one file: `mai_coach.db`) with **SQLModel** for table
definitions and **Alembic** for migrations.

- The DB file lives in `backend/mai_coach.db` and is git-ignored — schema
  lives in `alembic/versions/` instead.
- Models go in `app/models/`. Add new ones to `app/models/__init__.py` so
  Alembic's autogenerate can see them.
- Tables today:
  - `run` — one row per logged run (manual or Strava)
  - `cycleentry` — one row per day of cycle data
  - `symptom` — fixed lookup of symptom names (seeded by the first migration)
  - `cycleentrysymptomlink` — junction table connecting entries to symptoms

### Migration workflow

When you change a model (add/remove a column, new table, etc.):

```bash
# 1. Generate a new migration by diffing models against the live DB
uv run alembic revision --autogenerate -m "describe what changed"

# 2. Open the generated file in alembic/versions/ and SANITY CHECK it.
#    Autogenerate is good but not perfect — always read what it wrote.

# 3. Apply it
uv run alembic upgrade head

# To roll back the last migration (rare, but handy in development)
uv run alembic downgrade -1
```

Migrations are commits to your schema. They get checked into git so the
database can always be rebuilt from scratch by running `alembic upgrade head`
on a fresh machine.
