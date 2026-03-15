"""Similarity model for course matching."""

def compute_similarity(vec_a: list, vec_b: list) -> float:
    """Compute cosine similarity between two vectors."""
    dot = sum(a * b for a, b in zip(vec_a, vec_b))
    mag_a = sum(a ** 2 for a in vec_a) ** 0.5
    mag_b = sum(b ** 2 for b in vec_b) ** 0.5
    if mag_a == 0 or mag_b == 0:
        return 0.0
    return dot / (mag_a * mag_b)
