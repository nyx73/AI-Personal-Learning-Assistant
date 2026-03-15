"""Study schedule routes."""
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ScheduleRequest(BaseModel):
    user_id: str
    available_hours_per_day: float = 2.0

@router.get("/schedule/{user_id}")
def get_schedule(user_id: str):
    """Return study schedule for a user."""
    return {
        "user_id": user_id,
        "schedule": [
            {"day": "Monday", "course": "Python for Data Science", "duration": 2},
            {"day": "Tuesday", "course": "React Development", "duration": 1.5},
            {"day": "Wednesday", "course": "Machine Learning", "duration": 2},
            {"day": "Thursday", "course": "Python for Data Science", "duration": 1.5},
            {"day": "Friday", "course": "React Development", "duration": 2},
        ]
    }

@router.post("/schedule/generate")
def generate_schedule(request: ScheduleRequest):
    """Generate a new study schedule."""
    return {"user_id": request.user_id, "message": "Schedule generated successfully."}
