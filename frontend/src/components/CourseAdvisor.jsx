import React, { useState } from 'react';

const allCourses = [
  { id: 1, title: "Machine Learning Fundamentals", instructor: "Dr. Sarah Johnson", category: "AI/ML", difficulty: "Intermediate", rating: 4.8, duration: "12 weeks", description: "Learn the core concepts of machine learning including supervised and unsupervised learning." },
  { id: 2, title: "Python for Data Science", instructor: "Prof. Michael Chen", category: "Programming", difficulty: "Beginner", rating: 4.9, duration: "8 weeks", description: "Master Python programming with a focus on data science libraries like pandas and numpy." },
  { id: 3, title: "Deep Learning with TensorFlow", instructor: "Dr. Emily Rodriguez", category: "AI/ML", difficulty: "Advanced", rating: 4.7, duration: "16 weeks", description: "Build deep neural networks using TensorFlow and Keras frameworks." },
  { id: 4, title: "Natural Language Processing", instructor: "Prof. James Wilson", category: "AI/ML", difficulty: "Advanced", rating: 4.6, duration: "10 weeks", description: "Process and analyze text data using modern NLP techniques." },
  { id: 5, title: "React Development Masterclass", instructor: "Sarah Kim", category: "Web Dev", difficulty: "Intermediate", rating: 4.8, duration: "10 weeks", description: "Build modern web applications using React, hooks, and state management." },
  { id: 6, title: "Statistics for Data Science", instructor: "Dr. Alex Thompson", category: "Mathematics", difficulty: "Beginner", rating: 4.7, duration: "6 weeks", description: "Essential statistics and probability for data science applications." },
  { id: 7, title: "AWS Cloud Practitioner", instructor: "David Park", category: "Cloud", difficulty: "Beginner", rating: 4.6, duration: "6 weeks", description: "Introduction to Amazon Web Services and cloud computing fundamentals." },
  { id: 8, title: "Computer Vision", instructor: "Dr. Lisa Nguyen", category: "AI/ML", difficulty: "Advanced", rating: 4.5, duration: "14 weeks", description: "Image recognition and object detection using deep learning." },
  { id: 9, title: "Data Visualization with D3.js", instructor: "Mark Stevens", category: "Web Dev", difficulty: "Intermediate", rating: 4.7, duration: "8 weeks", description: "Create interactive data visualizations for the web using D3.js." },
];

const categories = ["All", "AI/ML", "Programming", "Web Dev", "Mathematics", "Cloud"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

function CourseAdvisor() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const filtered = allCourses.filter(c => {
    const matchCat = selectedCategory === "All" || c.category === selectedCategory;
    const matchDiff = selectedDifficulty === "All" || c.difficulty === selectedDifficulty;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchDiff && matchSearch;
  });

  const recommended = allCourses.filter(c => c.category === "AI/ML").slice(0, 3);

  return (
    <div>
      <h1 className="page-title">Course Advisor 🤖</h1>
      <p className="page-subtitle">Discover and filter courses tailored to your learning journey</p>

      {/* AI Recommendations Banner */}
      <div className="card" style={{ marginBottom: 24, background: 'linear-gradient(135deg, #667eea15, #764ba215)', border: '1px solid #667eea30' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: 4 }}>🎯 AI-Powered Recommendations</h3>
            <p style={{ color: '#718096', fontSize: '0.9rem' }}>Get personalized course recommendations based on your learning history and goals.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowRecommendations(!showRecommendations)}>
            {showRecommendations ? 'Hide' : 'Get AI Recommendations'}
          </button>
        </div>
        {showRecommendations && (
          <div style={{ marginTop: 20, borderTop: '1px solid #e2e8f0', paddingTop: 20 }}>
            <h4 style={{ marginBottom: 14, color: '#667eea' }}>Top Picks for You:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              {recommended.map(c => (
                <div key={c.id} style={{ background: 'white', padding: 16, borderRadius: 10, border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{c.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#718096' }}>{c.instructor}</div>
                  <div style={{ marginTop: 8 }}>
                    <span className="badge badge-intermediate">{c.difficulty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="🔍 Search courses..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              flex: 1, minWidth: 200, padding: '10px 14px', borderRadius: 8,
              border: '1px solid #e2e8f0', fontSize: '0.9rem', outline: 'none'
            }}
          />
          <div style={{ display: 'flex', gap: 8 }}>
            {categories.map(cat => (
              <button key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
                  fontWeight: 600, fontSize: '0.8rem',
                  background: selectedCategory === cat ? '#667eea' : '#f0f2f5',
                  color: selectedCategory === cat ? 'white' : '#718096',
                  transition: 'all 0.2s',
                }}>
                {cat}
              </button>
            ))}
          </div>
          <select
            value={selectedDifficulty}
            onChange={e => setSelectedDifficulty(e.target.value)}
            style={{
              padding: '10px 14px', borderRadius: 8, border: '1px solid #e2e8f0',
              fontSize: '0.9rem', background: 'white', cursor: 'pointer'
            }}
          >
            {difficulties.map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
      </div>

      {/* Course List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {filtered.map(course => (
          <div key={course.id} className="card" style={{ padding: 20, cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ background: '#667eea18', color: '#667eea', padding: '3px 10px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 600 }}>
                {course.category}
              </span>
              <span style={{ color: '#f6ad55', fontSize: '0.85rem' }}>★ {course.rating}</span>
            </div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 6, color: '#2d3748' }}>{course.title}</h3>
            <p style={{ fontSize: '0.8rem', color: '#718096', marginBottom: 8 }}>{course.instructor}</p>
            <p style={{ fontSize: '0.8rem', color: '#4a5568', marginBottom: 12, lineHeight: 1.5 }}>{course.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={`badge badge-${course.difficulty.toLowerCase()}`}>{course.difficulty}</span>
              <span style={{ fontSize: '0.78rem', color: '#718096' }}>⏱ {course.duration}</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: 14, justifyContent: 'center' }}>
              Enroll Now
            </button>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#718096' }}>
          <div style={{ fontSize: '2rem', marginBottom: 10 }}>🔍</div>
          <p>No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default CourseAdvisor;
