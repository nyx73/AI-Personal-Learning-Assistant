import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import CourseAdvisor from './components/CourseAdvisor';
import QuizSection from './components/QuizSection';
import ChatAssistant from './components/ChatAssistant';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <aside className="sidebar">
          <div className="sidebar-logo">
            <h2>🎓 AI Learn</h2>
            <p>Personal Learning Assistant</p>
          </div>
          <nav className="sidebar-nav">
            <div className="nav-section-title">Main</div>
            <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end>
              <span className="nav-icon">🏠</span> Home
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <span className="nav-icon">📊</span> Dashboard
            </NavLink>
            <div className="nav-section-title">Learning</div>
            <NavLink to="/advisor" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <span className="nav-icon">🤖</span> Course Advisor
            </NavLink>
            <NavLink to="/quiz" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <span className="nav-icon">📝</span> Quiz Section
            </NavLink>
            <NavLink to="/chat" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <span className="nav-icon">💬</span> Chat Assistant
            </NavLink>
            <div className="nav-section-title">Account</div>
            <NavLink to="/profile" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <span className="nav-icon">👤</span> Profile
            </NavLink>
          </nav>
          <div className="sidebar-footer">
            <div className="user-avatar-small">
              <div className="avatar-circle">AJ</div>
              <div className="user-info-small">
                <p>Alex Johnson</p>
                <span>Intermediate Learner</span>
              </div>
            </div>
          </div>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/advisor" element={<CourseAdvisor />} />
            <Route path="/quiz" element={<QuizSection />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
