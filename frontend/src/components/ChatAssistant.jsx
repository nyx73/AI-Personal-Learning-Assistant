import React, { useState, useRef, useEffect } from 'react';

const mockResponses = {
  default: "I'm here to help you with your learning journey! You can ask me about courses, study tips, or any topic you're curious about.",
  "machine learning": "Machine learning is a subset of AI that enables systems to learn from data. I recommend starting with Python basics, then moving to scikit-learn. Our 'Machine Learning Fundamentals' course is a great starting point!",
  "python": "Python is the most popular language for data science and AI. Start with the basics: variables, loops, functions, then explore libraries like NumPy, Pandas, and Matplotlib.",
  "recommend": "Based on your profile, I recommend: 1) Python for Data Science (beginner-friendly), 2) Machine Learning Fundamentals, 3) Statistics for Data Science. These build a solid foundation!",
  "study": "Here are some effective study tips: 1) Use the Pomodoro technique (25 min focus, 5 min break), 2) Practice active recall, 3) Space your learning sessions, 4) Apply concepts in projects.",
  "schedule": "A good study schedule: Monday/Wednesday/Friday for new material, Tuesday/Thursday for practice and exercises, weekends for projects and review. Aim for 2-3 hours per day.",
  "progress": "Your current learning stats: 75% complete in Python for Data Science, 60% in React Development, 40% in Machine Learning. You're doing great — keep up the momentum!",
};

function getResponse(message) {
  const lower = message.toLowerCase();
  for (const key of Object.keys(mockResponses)) {
    if (key !== 'default' && lower.includes(key)) return mockResponses[key];
  }
  return mockResponses.default;
}

function ChatAssistant() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: "Hi! I'm your AI Learning Assistant 🎓 How can I help you today? You can ask me about course recommendations, study tips, or your learning progress!", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const response = getResponse(input);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', text: response, timestamp: new Date() }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

  const quickPrompts = ["Recommend courses for me", "How to study effectively?", "Show my progress", "Best schedule for learning ML"];

  return (
    <div>
      <h1 className="page-title">Chat Assistant 💬</h1>
      <p className="page-subtitle">Ask me anything about your learning journey</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
        {/* Chat Window */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: 560, padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', borderRadius: '12px 12px 0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🤖</div>
              <div>
                <div style={{ fontWeight: 700 }}>AI Learning Assistant</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>● Online</div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {messages.map(msg => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', gap: 10 }}>
                {msg.role === 'assistant' && (
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>🤖</div>
                )}
                <div style={{
                  maxWidth: '75%', padding: '12px 16px', borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user' ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f7f8ff',
                  color: msg.role === 'user' ? 'white' : '#2d3748',
                  fontSize: '0.9rem', lineHeight: 1.6,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>🤖</div>
                <div style={{ background: '#f7f8ff', padding: '12px 16px', borderRadius: '18px 18px 18px 4px' }}>
                  <span style={{ display: 'inline-flex', gap: 4 }}>
                    {[0,1,2].map(i => (
                      <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: '#667eea', display: 'inline-block', opacity: 0.6 }}>•</span>
                    ))}
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: '16px 20px', borderTop: '1px solid #e2e8f0', display: 'flex', gap: 10 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your message..."
              style={{ flex: 1, padding: '12px 16px', borderRadius: 10, border: '1px solid #e2e8f0', fontSize: '0.9rem', outline: 'none' }}
            />
            <button className="btn btn-primary" onClick={sendMessage} disabled={!input.trim()}>
              Send ➤
            </button>
          </div>
        </div>

        {/* Quick Prompts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card">
            <h4 style={{ fontWeight: 700, marginBottom: 12, color: '#2d3748' }}>💡 Quick Prompts</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {quickPrompts.map((prompt, i) => (
                <button key={i} onClick={() => setInput(prompt)}
                  style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #e2e8f0', background: '#f7f8ff', cursor: 'pointer', textAlign: 'left', fontSize: '0.83rem', color: '#4a5568', fontWeight: 500, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#667eea'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f7f8ff'; e.currentTarget.style.color = '#4a5568'; }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
          <div className="card">
            <h4 style={{ fontWeight: 700, marginBottom: 10, color: '#2d3748' }}>📚 Topics I Can Help With</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {["Course recommendations", "Study schedules", "Learning progress", "Topic explanations", "Study tips", "Career advice"].map((t, i) => (
                <li key={i} style={{ fontSize: '0.83rem', color: '#718096', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#667eea' }}>✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatAssistant;
