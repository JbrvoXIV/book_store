const Movies = require('../models/movies.model.js');

// get all movies
const getAllMoviesController = async (req, res) => {
    try {
        const movies = await Movies.find();
        return res.status(200).json(movies);
    } catch(e) {
        return res.status(404).json({ success: false, message: 'Could not load movies from database' });
    }
};

// get specific movie
const getMovieController = async (req, res) => {
    const { title } = req.query;
    try {
        const movie = await Movies.find({ "title": title });
        return res.status(200).json(movie);
    } catch(e) {
        return res.status(404).json({ success: false, message: 'Could not load movies from database' });
    }
};

// get movie by id
const getMovieByIDController = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movies.find({ "_id": id });
        return res.status(200).json(movie);
    } catch(e) {
        return res.status(404).json({ success: false, message: 'Could not load movies from database' });
    }
};

// get movie by rating
const getMovieByRatingController = async (req, res) => {
    const { rating } = req.query;
    console.log(rating)
    try {
        const movie = await Movies.find({ "rated": rating });
        return res.status(200).json(movie);
    } catch(e) {
        return res.status(404).json({ success: false, message: 'Could not load movies from database' });
    }
};

module.exports = { getAllMoviesController, getMovieController, getMovieByIDController, getMovieByRatingController };