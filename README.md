# AI Personal Learning Assistant

An intelligent, full-stack learning platform powered by AI that provides personalized course recommendations, progress tracking, interactive quizzes, and a conversational AI assistant.

## 🚀 Features

- **AI-Powered Course Recommendations** — Personalized suggestions using TF-IDF cosine similarity
- **Interactive Dashboard** — Stats, progress bars, and weekly activity charts (Recharts)
- **Course Advisor** — Search, filter, and discover courses with AI recommendations
- **Quiz Section** — Topic-specific multiple-choice quizzes with instant feedback
- **Chat Assistant** — NLP-driven conversational AI with intent detection
- **User Profile** — Achievements, enrolled courses, and learning statistics
- **Smart Scheduling** — AI-generated weekly study schedules

## 🛠 Tech Stack

### Frontend
- **React 18** with React Router v6
- **Recharts** for data visualization
- **Axios** for API calls
- CSS custom properties for theming

### Backend
- **FastAPI** (Python) with CORS middleware
- **SQLAlchemy** ORM with SQLite
- **Pydantic v2** for data validation
- **scikit-learn** TF-IDF + cosine similarity for recommendations
- **NLTK** for NLP intent detection

## 📁 Project Structure

```
AI-Personal-Learning-Assistant/
├── frontend/                  # React 18 SPA
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx      # Stats, progress, charts
│   │   │   ├── CourseAdvisor.jsx  # Course discovery & filtering
│   │   │   ├── QuizSection.jsx    # Interactive quizzes
│   │   │   └── ChatAssistant.jsx  # AI chat interface
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Landing page
│   │   │   └── Profile.jsx        # User profile & achievements
│   │   ├── services/
│   │   │   └── api.js             # Axios API client
│   │   ├── App.js                 # Router & sidebar layout
│   │   └── App.css                # Global styles & CSS variables
│   └── package.json
├── backend/                   # FastAPI Python backend
│   ├── main.py                # App entry point with CORS
│   ├── api/routes/
│   │   ├── courses.py         # GET /api/courses
│   │   ├── advisor.py         # GET /api/advisor/recommend/:id
│   │   ├── users.py           # GET /api/users/:id/progress
│   │   └── schedule.py        # GET /api/schedule/:id
│   ├── models/                # Pydantic schemas
│   ├── database/              # SQLAlchemy models & session
│   ├── course_advisor/        # TF-IDF recommender engine
│   ├── nlp_assistant/         # Chatbot & intent detection
│   └── scheduler/             # Study schedule generator
├── datasets/
│   ├── courses.csv            # 22 courses with metadata
│   └── student_behavior.csv   # 55 student interaction records
├── ml_models/trained_models/  # Persisted model artifacts
└── requirements.txt
```

## ⚙️ Installation

### Frontend

```bash
cd frontend
npm install
npm start          # Development server on http://localhost:3000
npm run build      # Production build
```

### Backend

```bash
# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate    # Linux/Mac
venv\Scripts\activate       # Windows

pip install -r requirements.txt

cd backend
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`. Interactive docs at `http://localhost:8000/docs`.

## 🖥 Usage

1. Start the backend server (`uvicorn main:app --reload`)
2. Start the frontend dev server (`npm start`)
3. Navigate to `http://localhost:3000`

The frontend uses mock data and works standalone without the backend.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses` | List all courses |
| GET | `/api/courses/{id}` | Get course by ID |
| GET | `/api/advisor/recommend/{user_id}` | AI course recommendations |
| POST | `/api/advisor/analyze` | Analyze learning behavior |
| GET | `/api/users/{user_id}` | Get user profile |
| GET | `/api/users/{user_id}/progress` | Get learning progress |
| GET | `/api/schedule/{user_id}` | Get study schedule |
| POST | `/api/schedule/generate` | Generate new schedule |

## 🔮 Future Improvements

- **OAuth2 authentication** with JWT tokens
- **Real AI integration** via OpenAI or Hugging Face APIs
- **Collaborative filtering** for more sophisticated recommendations
- **Real-time notifications** with WebSockets
- **Mobile app** with React Native
- **Video streaming** integration for course content
- **Spaced repetition** algorithm for quiz scheduling
- **PostgreSQL** migration for production deployments
