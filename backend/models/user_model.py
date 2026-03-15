"""Pydantic models for User API."""
from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    name: str
    email: str
    level: Optional[str] = "Beginner"

class UserCreate(UserBase):
    pass

class UserResponse(UserBase):
    id: int
    streak: int = 0
    class Config:
        from_attributes = True
