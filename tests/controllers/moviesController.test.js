const chai = require('chai')
const nock = require('nock')
const sinon = require('sinon')

const API_KEY = '829222d2e21767a2b2132a034d9110c0'

const getPopularMoviesResponse = require('./getPopularMoviesResponse')
const searchMoviesResponse = require('./searchMoviesResponse')
const getMovieDetailsResponse = require('./getMovieDetailsResponse')

const MoviesController = require('../../controllers/moviesController')

describe('getPopularMovies', () => {
    beforeEach(() => {
        nock('https://api.themoviedb.org')
            .get(`/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .reply(200, getPopularMoviesResponse)
    })
    it('should return truthy', () => {
        chai.expect(MoviesController.getPopularMovies).to.be.ok
    })
    it('gets a popular movie', () => {
        let req = {}
        let res = {
            send: sinon.spy()
        }
        return MoviesController.getPopularMovies(req, res)
            .then(getPopularMoviesResponse => {
                chai.expect(typeof getPopularMoviesResponse).to.equal('object')

                chai.expect(getPopularMoviesResponse.data.original_title).to.equal('The Shawshank Redemption')
                chai.expect(getPopularMoviesResponse.data.id).to.equal('7575757')
                chai.expect(getPopularMoviesResponse.data.poster_path).to.equal('Path to enlightenment')
            })
    })
})
describe('searchMovies', () => {
    beforeEach(() => {
        nock('https://api.themoviedb.org')
            .get(`/3/search/movie?api_key=${API_KEY}&language=en-US&query=The Shaw&page=1`)
            .reply(200, searchMoviesResponse)
    })
    it('should return truthy', () => {
        chai.expect(MoviesController.searchMovies).to.be.ok
    })
    it('searches a movie', () => {
        let req = {
            query: {
                searchCriteria: "The Shaw"
            }
        }
        let res = {
            send: sinon.spy()
        }
        return MoviesController.searchMovies(req, res)
            .then(searchMoviesResponse => {
                chai.expect(typeof searchMoviesResponse).to.equal('object')

                chai.expect(searchMoviesResponse.data.original_title).to.equal('The Shawshank Redemption')
                chai.expect(searchMoviesResponse.data.id).to.equal('7575757')
                chai.expect(searchMoviesResponse.data.poster_path).to.equal('Path to enlightenment')
            })
    })
})
describe('getMovieDetails', () => {
    beforeEach(() => {
        nock('https://api.themoviedb.org')
            .get(`/3/movie/7575757?api_key=${API_KEY}&language=en-US`)
            .reply(200, getMovieDetailsResponse)
    })
    it('should return truthy', () => {
        chai.expect(MoviesController.getMovieDetails).to.be.ok
    })
    it('gets the movie details', () => {
        let req = {
            query: {
                id: "7575757"
            }
        }
        let res = {
            send: sinon.spy()
        }
        return MoviesController.getMovieDetails(req, res)
            .then(getMovieDetailsResponse => {
                chai.expect(typeof getMovieDetailsResponse).to.equal('object')

                chai.expect(getMovieDetailsResponse.data.original_title).to.equal('The Shawshank Redemption')
                chai.expect(getMovieDetailsResponse.data.id).to.equal('7575757')
                chai.expect(getMovieDetailsResponse.data.poster_path).to.equal('Path to enlightenment')
            })
    })
})
