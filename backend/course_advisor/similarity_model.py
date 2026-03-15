"""Similarity model for course matching."""

import numpy as np
from sklearn.metrics.pairwise import cosine_similarity


def compute_similarity(vec_a: list, vec_b: list) -> float:
    """Compute cosine similarity between two vectors using scikit-learn."""
    a = np.array(vec_a).reshape(1, -1)
    b = np.array(vec_b).reshape(1, -1)
    return float(cosine_similarity(a, b)[0][0])
