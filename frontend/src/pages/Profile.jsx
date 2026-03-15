import React from 'react';

const enrolledCourses = [
  { title: "Python for Data Science", progress: 75, category: "Programming", status: "In Progress" },
  { title: "React Development Masterclass", progress: 60, category: "Web Dev", status: "In Progress" },
  { title: "Machine Learning Fundamentals", progress: 40, category: "AI/ML", status: "In Progress" },
  { title: "Statistics for Data Science", progress: 100, category: "Mathematics", status: "Completed" },
  { title: "AWS Cloud Practitioner", progress: 100, category: "Cloud", status: "Completed" },
];

function Profile() {
  return (
    <div>
      <h1 className="page-title">My Profile 👤</h1>
      <p className="page-subtitle">Manage your account and track your achievements</p>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 24 }}>
        {/* Profile Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="card" style={{ textAlign: 'center', padding: 32 }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem', fontWeight: 700, color: 'white',
              margin: '0 auto 16px',
            }}>AJ</div>
            <h2 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 4 }}>Alex Johnson</h2>
            <p style={{ color: '#718096', fontSize: '0.85rem', marginBottom: 4 }}>alex.johnson@email.com</p>
            <span style={{ background: '#667eea18', color: '#667eea', padding: '4px 12px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600 }}>
              Intermediate Learner
            </span>
            <div style={{ borderTop: '1px solid #e2e8f0', marginTop: 20, paddingTop: 20, textAlign: 'left' }}>
              {[["📅 Joined", "January 2024"], ["🌍 Location", "San Francisco, CA"], ["🎯 Goal", "Become an ML Engineer"]].map(([label, val], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: '0.85rem' }}>
                  <span style={{ color: '#718096' }}>{label}</span>
                  <span style={{ fontWeight: 600, color: '#2d3748' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Stats */}
          <div className="card">
            <h4 style={{ fontWeight: 700, marginBottom: 16 }}>Learning Statistics</h4>
            {[
              { label: "Total Study Hours", value: "128h", color: "#667eea" },
              { label: "Courses Completed", value: "5", color: "#43e97b" },
              { label: "Avg. Quiz Score", value: "87%", color: "#4facfe" },
              { label: "Current Streak", value: "12 days 🔥", color: "#fa709a" },
              { label: "Certificates Earned", value: "3", color: "#f6ad55" },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, padding: '8px 0', borderBottom: i < 4 ? '1px solid #f0f2f5' : 'none' }}>
                <span style={{ fontSize: '0.87rem', color: '#718096' }}>{stat.label}</span>
                <span style={{ fontWeight: 700, color: stat.color, fontSize: '0.9rem' }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enrolled Courses */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="card">
            <div className="section-header">
              <div>
                <div className="section-title">Enrolled Courses</div>
                <div className="section-subtitle">{enrolledCourses.length} courses total</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {enrolledCourses.map((c, i) => (
                <div key={i} style={{ padding: 18, background: '#f7f8ff', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#2d3748', marginBottom: 3 }}>{c.title}</h4>
                      <span style={{ fontSize: '0.78rem', color: '#667eea', background: '#667eea15', padding: '2px 8px', borderRadius: 12, fontWeight: 600 }}>{c.category}</span>
                    </div>
                    <span style={{
                      padding: '4px 12px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600, height: 'fit-content',
                      background: c.status === 'Completed' ? '#c6f6d5' : '#bee3f8',
                      color: c.status === 'Completed' ? '#276749' : '#2b6cb0',
                    }}>{c.status}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ flex: 1, background: '#e2e8f0', borderRadius: 8, height: 8, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: 8,
                        width: `${c.progress}%`,
                        background: c.status === 'Completed' ? 'linear-gradient(90deg, #43e97b, #38f9d7)' : 'linear-gradient(90deg, #667eea, #764ba2)',
                      }} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#667eea', minWidth: 35 }}>{c.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="card">
            <div className="section-title" style={{ marginBottom: 16 }}>Achievements 🏆</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { icon: "🔥", label: "12-Day Streak" },
                { icon: "🎓", label: "First Course" },
                { icon: "⚡", label: "Fast Learner" },
                { icon: "💯", label: "Perfect Quiz" },
                { icon: "📚", label: "Bookworm" },
                { icon: "🌟", label: "Top Student" },
                { icon: "🤖", label: "AI Expert", locked: true },
                { icon: "🚀", label: "Rocket Start" },
              ].map((a, i) => (
                <div key={i} style={{
                  textAlign: 'center', padding: '14px 8px', borderRadius: 10,
                  background: a.locked ? '#f0f2f5' : '#667eea15',
                  border: `1px solid ${a.locked ? '#e2e8f0' : '#667eea30'}`,
                  opacity: a.locked ? 0.5 : 1,
                }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: 6 }}>{a.icon}</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#4a5568' }}>{a.label}</div>
                  {a.locked && <div style={{ fontSize: '0.65rem', color: '#a0aec0' }}>Locked</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
