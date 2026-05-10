"""
Run model — one row per logged run.

Design decisions worth remembering:

- We store distance, duration, AND pace separately. Normally pace is derived
  from duration/distance, but Strava reports its own moving-time pace that
  excludes pauses, so it's not always equal. Storing it directly avoids a
  consistency mismatch.

- Distance is in MILES, elevation in FEET. Pick one unit system and be
  consistent — the API can convert at the boundaries if needed.

- `source` and `strava_activity_id` are added now (even though Strava isn't
  wired up yet) so we don't have to migrate the table later. `strava_activity_id`
  is unique-when-present, so we can detect duplicates on Strava ingest.

- `notes` and `perceived_exertion` are manual-only — Strava doesn't fill
  these in, but we still keep them on the same table because they describe
  the run, not the source.
"""

from datetime import datetime
from enum import Enum

from sqlmodel import Field, SQLModel


class RunSource(str, Enum):
    """Where this run came from. Manual log vs. an ingestion source."""

    manual = "manual"
    strava = "strava"


class Run(SQLModel, table=True):
    """A single logged run."""

    id: int | None = Field(default=None, primary_key=True)

    # When the run actually happened. User-provided (or from Strava).
    started_at: datetime = Field(index=True)

    # Core metrics.
    distance_miles: float = Field(ge=0)
    duration_seconds: int = Field(ge=0, description="Elapsed time in seconds.")
    pace_min_per_mile: float = Field(
        ge=0,
        description="Avg pace in minutes per mile. Stored separately because Strava "
        "reports moving-time pace that may differ from duration/distance.",
    )

    # Optional metrics — nullable because not every run has these.
    elevation_gain_feet: float | None = Field(default=None, ge=0)
    avg_heart_rate: int | None = Field(default=None, ge=20, le=250)
    calories_burned: int | None = Field(default=None, ge=0)

    # Free-text notes from the user.
    notes: str | None = None

    # Provenance. Default is manual; Strava ingest will set this to "strava".
    source: RunSource = Field(default=RunSource.manual, index=True)
    strava_activity_id: str | None = Field(
        default=None,
        unique=True,
        index=True,
        description="Strava's activity ID, used to dedupe on re-import.",
    )

    # Timestamps managed by the app (not the user).
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
