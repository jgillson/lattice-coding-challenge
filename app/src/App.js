import React, { Component } from 'react'
import './App.css'

import SearchBar from './components/SearchBar'
import Poster from './components/Poster'
import Details from './components/Details'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies() {
    fetch('/movies')
      .then(res => res.json())
      .then(res =>
        this.setState({ movies: res.data })
      )
      .catch(err => {
        console.log('ERROR', err)
      })
  }

  showMovies() {
    return (
      <div
        style={{
          margin: 20,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >{this.state.movies.map(movie => (
        <Link to={`/${movie.id}`}>
          <Poster
            title={movie.original_title}
            posterPath={movie.poster_path}
          />
        </Link>
      ))}</div>
    )
  }

  searchMovies = searchCriteria => {
    if (searchCriteria) {
      fetch(`/search/movie?searchCriteria=${searchCriteria}`)
        .then(res => res.json())
        .then(res =>
          this.setState({ movies: res.data }))
        .catch(err => {
          console.log('ERROR', err)
        })
    }
    else {
      this.getMovies()
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/:movieId" component={Details} />
            <Route path="/">
              <div>
                <div>
                  <header>
                    <h1>The NEXT IMDb!</h1>
                  </header>
                  <SearchBar onSearch={this.searchMovies} />
                </div>
                {this.showMovies()}
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
