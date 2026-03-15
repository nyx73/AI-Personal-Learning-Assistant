"""User routes."""
from fastapi import APIRouter

router = APIRouter()

@router.get("/users/{user_id}")
def get_user(user_id: str):
    """Return user profile."""
    return {
        "id": user_id, "name": "Alex Johnson", "email": "alex@example.com",
        "level": "Intermediate", "streak": 12, "joined": "2024-01-15"
    }

@router.get("/users/{user_id}/progress")
def get_progress(user_id: str):
    """Return user learning progress."""
    return {
        "user_id": user_id,
        "progress": [
            {"course": "Python for Data Science", "progress": 75, "category": "Programming"},
            {"course": "React Development", "progress": 60, "category": "Web Dev"},
            {"course": "Machine Learning", "progress": 40, "category": "AI/ML"},
        ]
    }
