"""Course recommendation engine using cosine similarity."""
import numpy as np
try:
    from sklearn.metrics.pairwise import cosine_similarity
    from sklearn.feature_extraction.text import TfidfVectorizer
    SKLEARN_AVAILABLE = True
except ImportError:
    SKLEARN_AVAILABLE = False

class CourseRecommender:
    """Recommends courses based on content similarity."""

    def __init__(self):
        self.courses = []
        self.vectorizer = TfidfVectorizer() if SKLEARN_AVAILABLE else None
        self.course_matrix = None

    def fit(self, courses: list):
        """Fit the recommender on a list of course dicts."""
        self.courses = courses
        if SKLEARN_AVAILABLE and courses:
            descriptions = [f"{c.get('title','')} {c.get('category','')} {c.get('difficulty','')}" for c in courses]
            self.course_matrix = self.vectorizer.fit_transform(descriptions)

    def recommend(self, user_interests: str, top_n: int = 5) -> list:
        """Return top_n course recommendations based on user interests."""
        if not SKLEARN_AVAILABLE or self.course_matrix is None:
            return self.courses[:top_n]
        user_vec = self.vectorizer.transform([user_interests])
        scores = cosine_similarity(user_vec, self.course_matrix).flatten()
        top_indices = np.argsort(scores)[::-1][:top_n]
        return [{"course": self.courses[i], "score": float(scores[i])} for i in top_indices]
