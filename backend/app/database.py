"""
Database connection setup.

This module owns the *engine* (the connection pool) and the *session factory*
(the per-request thing that talks to the database).

A few notes about why it's structured this way:

- We create the engine ONCE at import time. SQLAlchemy/SQLModel pool the
  underlying connections, so opening a "session" is cheap — we open a fresh
  one per request and close it when the request ends.

- `get_session` is a FastAPI dependency. Routes write
      def my_route(session: Session = Depends(get_session)):
  and FastAPI handles opening + closing the session around each request.
  This guarantees we never leak DB connections.

- The `connect_args={"check_same_thread": False}` is a SQLite-only quirk.
  SQLite by default refuses connections from a thread other than the one
  that opened them, but FastAPI uses multiple threads to serve requests.
  This flag relaxes that. It's safe because we open a NEW session per
  request, so no two threads ever share the same active session.
"""

from collections.abc import Iterator

from sqlmodel import Session, create_engine

from app.config import settings

# `echo=False` means SQLAlchemy won't print every SQL statement it runs.
# Flip to True temporarily if you ever want to see what SQL is being generated.
_connect_args = {"check_same_thread": False} if settings.database_url.startswith("sqlite") else {}

engine = create_engine(
    settings.database_url,
    echo=False,
    connect_args=_connect_args,
)


def get_session() -> Iterator[Session]:
    """FastAPI dependency that yields a database session per request."""
    with Session(engine) as session:
        yield session
