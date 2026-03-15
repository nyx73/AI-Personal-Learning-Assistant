"""Course routes for the AI Learning Assistant API."""
from fastapi import APIRouter

router = APIRouter()

MOCK_COURSES = [
    {"id": 1, "title": "Machine Learning Fundamentals", "instructor": "Dr. Sarah Johnson", "category": "AI/ML", "difficulty": "Intermediate", "rating": 4.8, "duration": "12 weeks"},
    {"id": 2, "title": "Python for Data Science", "instructor": "Prof. Michael Chen", "category": "Programming", "difficulty": "Beginner", "rating": 4.9, "duration": "8 weeks"},
    {"id": 3, "title": "Deep Learning with TensorFlow", "instructor": "Dr. Emily Rodriguez", "category": "AI/ML", "difficulty": "Advanced", "rating": 4.7, "duration": "16 weeks"},
]

@router.get("/courses")
def get_courses():
    """Return all available courses."""
    return {"courses": MOCK_COURSES}

@router.get("/courses/{course_id}")
def get_course(course_id: int):
    """Return a specific course by ID."""
    course = next((c for c in MOCK_COURSES if c["id"] == course_id), None)
    if not course:
        return {"error": "Course not found"}
    return course
