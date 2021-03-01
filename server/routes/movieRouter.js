import express from 'express';

import {
    createMovie,
    deleteMovie,
    getMovies,
    getMovieById,
    updateMovie
} from '../controller/moviesController.js';

const movieRouter = express.Router();

movieRouter.get('/movies', getMovies);
movieRouter.get('/movies/:id', getMovieById);
movieRouter.post('/movies', createMovie);
movieRouter.put('/movies/:id', updateMovie);
movieRouter.delete('/movies/:id', deleteMovie);

export default movieRouter;