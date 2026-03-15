"""Pydantic models for behavior tracking."""
from pydantic import BaseModel
from typing import Optional

class BehaviorData(BaseModel):
    student_id: str
    course_id: int
    time_spent_hours: float
    quiz_score: Optional[float] = None
    completion_percentage: float = 0.0
    engagement_score: Optional[float] = None
