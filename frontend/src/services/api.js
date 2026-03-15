import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export const getRecommendedCourses = (userId) =>
  api.get(`/api/advisor/recommend/${userId}`);

export const getLearningProgress = (userId) =>
  api.get(`/api/users/${userId}/progress`);

export const getUserProfile = (userId) =>
  api.get(`/api/users/${userId}`);

export const getAllCourses = () =>
  api.get('/api/courses');

export const getChatResponse = (message) =>
  api.post('/api/chat', { message });

export const getStudySchedule = (userId) =>
  api.get(`/api/schedule/${userId}`);

export const getQuizQuestions = (topic) =>
  api.get(`/api/quiz`, { params: { topic } });

export default api;
