"""
Cycle models — three tables that work together.

Schema overview:
- `symptom`              -> lookup table of fixed symptom names
- `cycleentry`           -> one row per day of cycle data
- `cycleentrysymptomlink` -> junction table linking entries to symptoms (M2M)

Why a junction table for symptoms (and not, say, JSON):
- Symptoms are a fixed pre-set list (Cramps, Fatigue, ...).
- Insight queries like "how often did I have cramps in luteal phase?" become
  trivial joins instead of string parsing.
- It's the textbook relational pattern, which is good portfolio practice.

Enum decisions:
- FlowIntensity and EnergyLevel are stored as strings under the hood, but
  constrained to known values via Python enums. SQLite doesn't have native
  enum types — Python's `str, Enum` pattern gives us validation at the app
  layer while the DB just stores the string.
"""

from datetime import date, datetime
from enum import Enum

from sqlmodel import Field, Relationship, SQLModel


# ---------------------------------------------------------------------------
# Enums
# ---------------------------------------------------------------------------


class FlowIntensity(str, Enum):
    none = "none"
    spotting = "spotting"
    light = "light"
    medium = "medium"
    heavy = "heavy"


class EnergyLevel(str, Enum):
    low = "low"
    medium = "medium"
    high = "high"


# ---------------------------------------------------------------------------
# Junction table (must be defined BEFORE the tables that reference it
# in their Relationship() calls)
# ---------------------------------------------------------------------------


class CycleEntrySymptomLink(SQLModel, table=True):
    """
    Junction table linking cycle entries to symptoms (many-to-many).

    Each (cycle_entry_id, symptom_id) pair is unique — that's enforced by
    the composite primary key. So you can't accidentally log the same
    symptom twice for the same day.
    """

    cycle_entry_id: int | None = Field(
        default=None, foreign_key="cycleentry.id", primary_key=True
    )
    symptom_id: int | None = Field(
        default=None, foreign_key="symptom.id", primary_key=True
    )


# ---------------------------------------------------------------------------
# Symptom lookup table — pre-seeded with the fixed list
# ---------------------------------------------------------------------------


class Symptom(SQLModel, table=True):
    """A symptom name the user can tag a cycle entry with."""

    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(unique=True, index=True)

    # Reverse relationship: which entries had this symptom.
    cycle_entries: list["CycleEntry"] = Relationship(
        back_populates="symptoms",
        link_model=CycleEntrySymptomLink,
    )


# ---------------------------------------------------------------------------
# CycleEntry — one row per day
# ---------------------------------------------------------------------------


class CycleEntry(SQLModel, table=True):
    """
    A single day of cycle data.

    `entry_date` is unique — there's one entry per calendar day. If the user
    re-logs a day, we treat that as an UPDATE on the existing row, not
    a new row.
    """

    id: int | None = Field(default=None, primary_key=True)

    # The day this entry is for. Unique = at most one entry per day.
    entry_date: date = Field(unique=True, index=True)

    # Day in the cycle (1 = first day of period). Optional because not every
    # day needs to be tagged — you might log only the days you have symptoms.
    cycle_day: int | None = Field(default=None, ge=1, le=45)

    # Categorical fields — constrained to enum values.
    flow_intensity: FlowIntensity = Field(default=FlowIntensity.none)
    energy_level: EnergyLevel | None = None

    # 1-5 scale. Frontend renders these as emojis but DB just stores the int.
    mood: int | None = Field(default=None, ge=1, le=5)

    # Free-text notes.
    notes: str | None = None

    # Timestamps managed by the app.
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    # Many-to-many to Symptom via the junction table.
    symptoms: list[Symptom] = Relationship(
        back_populates="cycle_entries",
        link_model=CycleEntrySymptomLink,
    )
