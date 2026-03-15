"""Pydantic models for Course API."""
from pydantic import BaseModel

class CourseBase(BaseModel):
    title: str
    instructor: str
    category: str
    difficulty: str
    rating: float
    duration: str

class CourseResponse(CourseBase):
    id: int
    class Config:
        from_attributes = True
