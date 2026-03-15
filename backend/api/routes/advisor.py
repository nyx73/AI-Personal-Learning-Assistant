"""Course advisor routes."""
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class AnalyzeRequest(BaseModel):
    user_id: str
    behavior_data: dict = {}

@router.get("/advisor/recommend/{user_id}")
def recommend_courses(user_id: str):
    """Return recommended courses for a user."""
    recommendations = [
        {"id": 1, "title": "Machine Learning Fundamentals", "score": 0.95},
        {"id": 6, "title": "Statistics for Data Science", "score": 0.88},
        {"id": 2, "title": "Python for Data Science", "score": 0.85},
    ]
    return {"user_id": user_id, "recommendations": recommendations}

@router.post("/advisor/analyze")
def analyze_behavior(request: AnalyzeRequest):
    """Analyze user learning behavior."""
    return {"user_id": request.user_id, "analysis": "Learning pattern analyzed successfully."}
