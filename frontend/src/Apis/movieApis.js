import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});


export const insertMovie = payload => api.post(`/movies`, payload);
export const getAllMovie = () => api.get(`/movies`);
export const updateMoviesById = (id, payload) => api.put(`/movies/${id}`, payload);
export const deleteMoviesById = id => api.delete(`/movies/${id}`);
export const getMovieById = id => api.get(`/movies/${id}`);


