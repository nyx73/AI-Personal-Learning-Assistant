import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { icon: "🤖", title: "AI-Powered Recommendations", desc: "Get personalized course suggestions based on your learning history, goals, and preferences." },
  { icon: "📊", title: "Progress Tracking", desc: "Visualize your learning journey with detailed analytics, progress bars, and milestone tracking." },
  { icon: "💬", title: "Chat Assistant", desc: "Ask questions, get study tips, and receive guidance from your intelligent learning companion." },
  { icon: "📝", title: "Interactive Quizzes", desc: "Test your knowledge with topic-specific quizzes and get instant feedback to reinforce learning." },
  { icon: "📅", title: "Smart Scheduling", desc: "Optimize your study sessions with AI-generated schedules tailored to your availability." },
  { icon: "🏆", title: "Achievement System", desc: "Stay motivated with streaks, badges, and certificates as you complete courses and reach milestones." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 20, padding: '60px 48px', marginBottom: 40, color: 'white',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '6px 16px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 600, marginBottom: 20 }}>
            🚀 AI-Powered Learning Platform
          </div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, lineHeight: 1.2, marginBottom: 18 }}>
            Learn Smarter with Your Personal AI Assistant
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.7, marginBottom: 32 }}>
            Discover personalized courses, track your progress, and achieve your learning goals with the power of AI guidance and smart recommendations.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <Link to="/dashboard" className="btn" style={{ background: 'white', color: '#667eea', fontWeight: 700, padding: '14px 28px' }}>
              🎯 Go to Dashboard
            </Link>
            <Link to="/advisor" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '2px solid rgba(255,255,255,0.4)', padding: '14px 28px' }}>
              Explore Courses →
            </Link>
          </div>
        </div>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 300, height: 300, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: 100, bottom: -60, width: 200, height: 200, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
      </div>

      {/* Stats bar */}
      <div className="card" style={{ marginBottom: 40, padding: '24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center' }}>
          {[["500+", "Courses Available"], ["10K+", "Active Learners"], ["95%", "Satisfaction Rate"], ["50+", "Expert Instructors"]].map(([val, label], i) => (
            <div key={i} style={{ padding: '0 20px', borderRight: i < 3 ? '1px solid #e2e8f0' : 'none' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#667eea' }}>{val}</div>
              <div style={{ fontSize: '0.85rem', color: '#718096', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 20, textAlign: 'center', color: '#2d3748' }}>
        Everything You Need to Excel 🌟
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {features.map((f, i) => (
          <div key={i} className="card" style={{ padding: 24, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = ''; }}
          >
            <div style={{ fontSize: '2rem', marginBottom: 14 }}>{f.icon}</div>
            <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 8, color: '#2d3748' }}>{f.title}</h3>
            <p style={{ fontSize: '0.87rem', color: '#718096', lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: 40, padding: '40px', background: '#667eea0d', borderRadius: 16, border: '1px solid #667eea20' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 10, color: '#2d3748' }}>Ready to Start Learning?</h3>
        <p style={{ color: '#718096', marginBottom: 20 }}>Join thousands of learners already using AI to accelerate their skills.</p>
        <Link to="/dashboard" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
          Get Started Now 🚀
        </Link>
      </div>
    </div>
  );
}

export default Home;
