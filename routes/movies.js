const express = require('express')

const router = express.Router()

const MoviesController = require('../controllers/moviesController')

router.get('/movies', MoviesController.getPopularMovies)
router.get('/search/movie', MoviesController.searchMovies)
router.get('/movie', MoviesController.getMovieDetails)

module.exports = router
