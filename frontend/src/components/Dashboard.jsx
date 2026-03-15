import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const mockRecommendedCourses = [
  { id: 1, title: "Machine Learning Fundamentals", instructor: "Dr. Sarah Johnson", category: "AI/ML", difficulty: "Intermediate", rating: 4.8, duration: "12 weeks", enrolled: false },
  { id: 2, title: "Python for Data Science", instructor: "Prof. Michael Chen", category: "Programming", difficulty: "Beginner", rating: 4.9, duration: "8 weeks", enrolled: true },
  { id: 3, title: "Deep Learning with TensorFlow", instructor: "Dr. Emily Rodriguez", category: "AI/ML", difficulty: "Advanced", rating: 4.7, duration: "16 weeks", enrolled: false },
  { id: 4, title: "Natural Language Processing", instructor: "Prof. James Wilson", category: "AI/ML", difficulty: "Advanced", rating: 4.6, duration: "10 weeks", enrolled: false },
  { id: 5, title: "React Development Masterclass", instructor: "Sarah Kim", category: "Web Dev", difficulty: "Intermediate", rating: 4.8, duration: "10 weeks", enrolled: true },
  { id: 6, title: "Statistics for Data Science", instructor: "Dr. Alex Thompson", category: "Mathematics", difficulty: "Beginner", rating: 4.7, duration: "6 weeks", enrolled: false },
];

const mockProgressData = [
  { course: "Python for Data Science", progress: 75, category: "Programming", color: "#667eea" },
  { course: "React Development", progress: 60, category: "Web Dev", color: "#f093fb" },
  { course: "Machine Learning", progress: 40, category: "AI/ML", color: "#4facfe" },
  { course: "Statistics", progress: 90, category: "Mathematics", color: "#43e97b" },
  { course: "Data Visualization", progress: 25, category: "Tools", color: "#fa709a" },
];

const mockWeeklyActivity = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.0 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 4.0 },
  { day: "Fri", hours: 2.0 },
  { day: "Sat", hours: 5.0 },
  { day: "Sun", hours: 3.5 },
];

const stats = [
  { label: "Courses Enrolled", value: "8", icon: "📚", color: "#667eea" },
  { label: "Completed", value: "5", icon: "✅", color: "#43e97b" },
  { label: "In Progress", value: "3", icon: "🔄", color: "#4facfe" },
  { label: "Study Streak", value: "12 days", icon: "🔥", color: "#fa709a" },
];

function StarRating({ rating }) {
  return (
    <span style={{ color: '#f6ad55', fontSize: '0.85rem' }}>
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
      <span style={{ color: '#718096', marginLeft: 4 }}>{rating}</span>
    </span>
  );
}

function DifficultyBadge({ difficulty }) {
  const classMap = {
    Beginner: 'badge-beginner',
    Intermediate: 'badge-intermediate',
    Advanced: 'badge-advanced',
  };
  return <span className={`badge ${classMap[difficulty] || ''}`}>{difficulty}</span>;
}

function Dashboard() {
  const [courses, setCourses] = useState(mockRecommendedCourses);

  const handleEnroll = (courseId) => {
    setCourses(prev =>
      prev.map(c => c.id === courseId ? { ...c, enrolled: !c.enrolled } : c)
    );
  };

  return (
    <div>
      {/* Welcome Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        padding: '32px',
        marginBottom: '28px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 6 }}>
            Welcome back, Alex! 👋
          </h1>
          <p style={{ opacity: 0.9, fontSize: '1rem' }}>
            You're on a 12-day streak! Keep up the momentum — you're 40% through your weekly goal.
          </p>
          <div style={{ marginTop: 16, display: 'flex', gap: 24 }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>21.5h</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>This Week</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>87%</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Avg. Quiz Score</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>5</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Certificates</div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', right: -20, top: -20,
          width: 180, height: 180,
          background: 'rgba(255,255,255,0.07)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', right: 60, bottom: -40,
          width: 120, height: 120,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
        }} />
      </div>

      {/* Stats Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '18px',
        marginBottom: '28px',
      }}>
        {stats.map((stat, idx) => (
          <div key={idx} className="card" style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              width: 52, height: 52,
              borderRadius: '12px',
              background: `${stat.color}18`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.6rem',
              margin: '0 auto 12px',
            }}>
              {stat.icon}
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: stat.color }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#718096', marginTop: 2 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>

        {/* Learning Progress */}
        <div className="card">
          <div className="section-header">
            <div>
              <div className="section-title">Learning Progress</div>
              <div className="section-subtitle">Your active courses</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {mockProgressData.map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.course}</div>
                    <div style={{ fontSize: '0.75rem', color: '#718096' }}>{item.category}</div>
                  </div>
                  <span style={{
                    fontWeight: 700, fontSize: '0.95rem', color: item.color
                  }}>{item.progress}%</span>
                </div>
                <div style={{
                  height: 10, background: '#e2e8f0', borderRadius: 8, overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${item.progress}%`,
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`,
                    borderRadius: 8,
                    transition: 'width 0.6s ease',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="card">
          <div className="section-header">
            <div>
              <div className="section-title">Weekly Study Activity</div>
              <div className="section-subtitle">Hours studied per day</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={mockWeeklyActivity} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#718096' }} />
              <YAxis tick={{ fontSize: 12, fill: '#718096' }} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(v) => [`${v}h`, 'Study Hours']}
              />
              <Bar dataKey="hours" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="card">
        <div className="section-header">
          <div>
            <div className="section-title">Recommended Courses</div>
            <div className="section-subtitle">Personalized picks based on your learning goals</div>
          </div>
          <button className="btn btn-outline btn-sm">View All</button>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '18px',
        }}>
          {courses.map(course => (
            <div key={course.id} style={{
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '18px',
              transition: 'all 0.2s ease',
              background: course.enrolled ? '#f7f8ff' : 'white',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <span style={{
                  background: '#667eea18',
                  color: '#667eea',
                  padding: '3px 10px',
                  borderRadius: 20,
                  fontSize: '0.72rem',
                  fontWeight: 600,
                }}>{course.category}</span>
                <DifficultyBadge difficulty={course.difficulty} />
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 6, color: '#2d3748', lineHeight: 1.4 }}>
                {course.title}
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#718096', marginBottom: 8 }}>
                {course.instructor}
              </p>
              <StarRating rating={course.rating} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#718096' }}>⏱ {course.duration}</span>
                <button
                  className={`btn btn-sm ${course.enrolled ? 'btn-outline' : 'btn-primary'}`}
                  onClick={() => handleEnroll(course.id)}
                >
                  {course.enrolled ? '✓ Enrolled' : 'Enroll'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
