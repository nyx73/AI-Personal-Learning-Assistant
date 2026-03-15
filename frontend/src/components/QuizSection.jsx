import React, { useState } from 'react';

const quizTopics = ["Machine Learning", "Python Basics", "Web Development", "Statistics", "Deep Learning"];

const quizData = {
  "Machine Learning": [
    { question: "What is the purpose of a training dataset?", options: ["To test the model", "To train the model on known examples", "To deploy the model", "To clean data"], answer: 1 },
    { question: "Which algorithm is used for classification?", options: ["Linear Regression", "K-Means", "Logistic Regression", "PCA"], answer: 2 },
    { question: "What does overfitting mean?", options: ["Model is too simple", "Model performs well on all data", "Model memorizes training data but fails on new data", "Model has low accuracy"], answer: 2 },
    { question: "What is cross-validation used for?", options: ["Data cleaning", "Model evaluation", "Feature extraction", "Data visualization"], answer: 1 },
  ],
  "Python Basics": [
    { question: "Which data type is mutable in Python?", options: ["tuple", "string", "list", "int"], answer: 2 },
    { question: "What does 'len()' return?", options: ["Type of object", "Number of elements", "Sum of elements", "First element"], answer: 1 },
    { question: "Which keyword is used to define a function?", options: ["function", "define", "def", "func"], answer: 2 },
    { question: "What is a list comprehension?", options: ["A loop", "A concise way to create lists", "A sorting method", "A dictionary"], answer: 1 },
  ],
};

function QuizSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const questions = selectedTopic ? (quizData[selectedTopic] || quizData["Machine Learning"]) : [];

  const handleAnswer = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setShowResult(true);
    if (idx === questions[currentQ].answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(c => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
    setShowResult(false);
    setSelectedTopic(null);
  };

  if (!selectedTopic) {
    return (
      <div>
        <h1 className="page-title">Quiz Section 📝</h1>
        <p className="page-subtitle">Test your knowledge with topic-specific quizzes</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, maxWidth: 700 }}>
          {quizTopics.map(topic => (
            <div key={topic} className="card" style={{ textAlign: 'center', cursor: 'pointer', padding: 28, transition: 'all 0.2s' }}
              onClick={() => setSelectedTopic(topic)}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>
                {topic === "Machine Learning" ? "🤖" : topic === "Python Basics" ? "🐍" : topic === "Web Development" ? "🌐" : topic === "Statistics" ? "📊" : "🧠"}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#2d3748' }}>{topic}</h3>
              <p style={{ fontSize: '0.8rem', color: '#718096', marginTop: 6 }}>4 questions</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div>
        <h1 className="page-title">Quiz Results 🎉</h1>
        <div className="card" style={{ maxWidth: 500, textAlign: 'center', padding: 40 }}>
          <div style={{
            width: 100, height: 100, borderRadius: '50%',
            background: percentage >= 70 ? '#43e97b20' : '#fa709a20',
            border: `4px solid ${percentage >= 70 ? '#43e97b' : '#fa709a'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', fontSize: '1.8rem', fontWeight: 700,
            color: percentage >= 70 ? '#43e97b' : '#fa709a'
          }}>
            {percentage}%
          </div>
          <h2 style={{ marginBottom: 8 }}>{percentage >= 70 ? '🎉 Great Job!' : '📖 Keep Studying!'}</h2>
          <p style={{ color: '#718096', marginBottom: 20 }}>
            You scored {score} out of {questions.length} on <strong>{selectedTopic}</strong>
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={resetQuiz}>Try Another Topic</button>
            <button className="btn btn-outline" onClick={() => { setCurrentQ(0); setSelectedAnswer(null); setScore(0); setFinished(false); setShowResult(false); }}>
              Retry Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];
  return (
    <div>
      <h1 className="page-title">{selectedTopic} Quiz</h1>
      <p className="page-subtitle">Question {currentQ + 1} of {questions.length}</p>
      <div style={{ maxWidth: 600 }}>
        <div style={{ background: '#e2e8f0', borderRadius: 8, height: 8, marginBottom: 24 }}>
          <div style={{
            height: '100%', borderRadius: 8,
            width: `${((currentQ + 1) / questions.length) * 100}%`,
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            transition: 'width 0.4s ease',
          }} />
        </div>
        <div className="card" style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2d3748', lineHeight: 1.5 }}>{q.question}</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          {q.options.map((opt, idx) => {
            let bg = 'white';
            let border = '2px solid #e2e8f0';
            let color = '#2d3748';
            if (showResult) {
              if (idx === q.answer) { bg = '#f0fff4'; border = '2px solid #43e97b'; color = '#276749'; }
              else if (idx === selectedAnswer && idx !== q.answer) { bg = '#fff5f5'; border = '2px solid #fc8181'; color = '#9b2c2c'; }
            } else if (selectedAnswer === idx) {
              border = '2px solid #667eea'; bg = '#f7f8ff';
            }
            return (
              <div key={idx} onClick={() => handleAnswer(idx)}
                style={{
                  padding: '14px 18px', borderRadius: 10, border, background: bg, color,
                  cursor: selectedAnswer === null ? 'pointer' : 'default',
                  fontWeight: 500, transition: 'all 0.2s',
                }}
              >
                <span style={{ marginRight: 10, fontWeight: 700 }}>{['A', 'B', 'C', 'D'][idx]}.</span>
                {opt}
                {showResult && idx === q.answer && <span style={{ float: 'right' }}>✓</span>}
                {showResult && idx === selectedAnswer && idx !== q.answer && <span style={{ float: 'right' }}>✗</span>}
              </div>
            );
          })}
        </div>
        {showResult && (
          <button className="btn btn-primary" onClick={handleNext} style={{ width: '100%', justifyContent: 'center' }}>
            {currentQ + 1 < questions.length ? 'Next Question →' : 'See Results'}
          </button>
        )}
        <button className="btn btn-outline btn-sm" onClick={resetQuiz} style={{ marginTop: 12 }}>
          ← Change Topic
        </button>
      </div>
    </div>
  );
}

export default QuizSection;
