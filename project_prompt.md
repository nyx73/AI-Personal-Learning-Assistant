You are an expert full-stack AI developer.

Generate a complete project called "AI Personal Learning Assistant".

The system analyzes student learning behavior and recommends courses, quizzes, and study schedules using machine learning.

Tech stack:
- Backend: Python with FastAPI
- Machine Learning: Scikit-learn, TensorFlow or PyTorch
- NLP: NLTK or spaCy
- Frontend: React
- Data processing: Pandas, NumPy
- API communication: Axios
- Version control: Git
- Deployment ready structure

Create a clean and professional project architecture.

Project Structure:

AI-Personal-Learning-Assistant
│
├── backend
│   ├── api
│   │   ├── routes
│   │   │   ├── users.py
│   │   │   ├── courses.py
│   │   │   ├── advisor.py
│   │   │   └── schedule.py
│   │
│   ├── models
│   │   ├── user_model.py
│   │   ├── course_model.py
│   │   └── behavior_model.py
│   │
│   ├── course_advisor
│   │   ├── recommender.py
│   │   ├── similarity_model.py
│   │   └── training.py
│   │
│   ├── nlp_assistant
│   │   ├── chatbot.py
│   │   └── intent_detection.py
│   │
│   ├── scheduler
│   │   └── study_scheduler.py
│   │
│   ├── database
│   │   ├── db.py
│   │   └── schema.py
│   │
│   └── main.py
│
├── datasets
│   ├── courses.csv
│   └── student_behavior.csv
│
├── ml_models
│   └── trained_models
│
├── notebooks
│   └── experiments.ipynb
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CourseAdvisor.jsx
│   │   │   ├── QuizSection.jsx
│   │   │   └── ChatAssistant.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   └── App.js
│
├── requirements.txt
├── README.md
└── .gitignore


Functional Requirements:

1. Backend API using FastAPI
- Endpoint to recommend courses
- Endpoint to generate study schedule
- Endpoint to analyze student performance
- Endpoint for chatbot interaction

2. Machine Learning Recommendation System
- Content-based recommendation using cosine similarity
- Model that analyzes student behavior and performance
- Suggest courses based on weak topics

3. NLP Assistant
- Detect user intent from text queries
Example:
"What should I study today?"
"Recommend AI courses"
"Generate study plan"

4. Study Scheduler
- Create personalized schedule based on
  - available hours
  - subjects
  - difficulty level

5. Frontend using React
Pages:
- Dashboard
- Course Recommendation
- Quiz Section
- AI Chat Assistant
- User Profile

6. API integration
Use Axios in React to call FastAPI endpoints.

7. Dataset
Create example datasets:
courses.csv
student_behavior.csv

8. Include proper comments and documentation in the code.

9. Ensure the project can run locally with:

Backend:
uvicorn main:app --reload

Frontend:
npm start

10. Generate a detailed README explaining:
- project overview
- tech stack
- installation
- usage
- future improvements

Write clean modular code and follow best practices.
