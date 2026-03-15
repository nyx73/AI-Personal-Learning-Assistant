"""Simple chatbot for the learning assistant."""
from nlp_assistant.intent_detection import detect_intent

RESPONSES = {
    "recommend": "Based on your profile, I recommend: Machine Learning Fundamentals, Python for Data Science, and Statistics.",
    "progress": "You're making great progress! You're 75% through Python for Data Science.",
    "schedule": "Your next study session is tomorrow: 2 hours of Python for Data Science.",
    "greeting": "Hello! I'm your AI Learning Assistant. How can I help you today?",
    "default": "I'm here to help you learn. Ask me about courses, progress, or study schedules!",
}

def get_response(message: str) -> str:
    """Generate a response based on the user's message."""
    intent = detect_intent(message)
    return RESPONSES.get(intent, RESPONSES["default"])
