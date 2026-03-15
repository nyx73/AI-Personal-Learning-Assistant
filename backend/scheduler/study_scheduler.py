"""Study schedule generator."""
from typing import List, Dict

DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

def generate_schedule(courses: List[Dict], available_hours: float = 2.0) -> List[Dict]:
    """Generate a weekly study schedule."""
    schedule = []
    for i, day in enumerate(DAYS[:5]):  # Weekdays only
        if courses:
            course = courses[i % len(courses)]
            schedule.append({
                "day": day,
                "course": course.get("title", "General Study"),
                "duration_hours": available_hours,
                "start_time": "19:00",
            })
    return schedule
