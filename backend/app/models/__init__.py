"""
Models package.

We re-export every table model here for one practical reason:
Alembic's autogenerate inspects `SQLModel.metadata` to figure out what tables
exist, but it can only see models that have actually been imported into Python.
So Alembic's env.py just imports this package, and that import triggers the
imports below, registering every table with SQLModel.metadata.

Add a model file? Add it to the imports here too.
"""

from app.models.cycle import (
    CycleEntry,
    CycleEntrySymptomLink,
    EnergyLevel,
    FlowIntensity,
    Symptom,
)
from app.models.run import Run, RunSource

__all__ = [
    "Run",
    "RunSource",
    "CycleEntry",
    "CycleEntrySymptomLink",
    "Symptom",
    "EnergyLevel",
    "FlowIntensity",
]
