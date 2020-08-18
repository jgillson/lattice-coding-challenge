const axios = require('axios')

const API_KEY = '829222d2e21767a2b2132a034d9110c0'

module.exports = class MoviesController {
    static getPopularMovies(req, res, next) {
        return axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            )
            .then(resp => {
                res.send({ data: resp.data.results })
                return resp
            })
            .catch(err => {
                console.log(err)
            })
    }
    static searchMovies(req, res, next) {
        const searchCriteria = req.query.searchCriteria
        return axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchCriteria}&page=1`
            )
            .then(resp => {
                res.send({ data: resp.data.results })
                return resp
            })
            .catch(err => {
                console.log(err)
            })
    }
    static getMovieDetails(req, res, next) {
        const id = req.query.id
        return axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
            )
            .then(resp => {
                res.send({ data: resp.data })
                return resp
            })
            .catch(err => {
                console.log(err)
            })
    }
}
