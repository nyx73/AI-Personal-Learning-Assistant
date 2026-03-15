"""Intent detection for the chatbot."""

INTENT_KEYWORDS = {
    "recommend": ["recommend", "suggest", "course", "learn", "what should"],
    "progress": ["progress", "how am i", "status", "completion"],
    "schedule": ["schedule", "when", "time", "plan"],
    "greeting": ["hello", "hi", "hey", "good morning", "good evening"],
}

def detect_intent(message: str) -> str:
    """Detect the intent of a user message."""
    message_lower = message.lower()
    for intent, keywords in INTENT_KEYWORDS.items():
        if any(kw in message_lower for kw in keywords):
            return intent
    return "default"
