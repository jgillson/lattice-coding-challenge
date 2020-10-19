import React, {useState, useEffect} from 'react'
import './App.css'

import SearchBar from './components/SearchBar'
import Poster from './components/Poster'
import Details from './components/Details'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

const App = () => {
    let [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        fetch('/movies')
            .then(res =>
                res.json())
            .then(res =>
                setMovies(res.data)
            )
            .catch(err => {
                console.log('ERROR', err)
            })
    }

    const showMovies = () => {
        return (
            <div
                style={{
                    margin: 20,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}
            >{movies.map(movie => (
                <Link to={`/${movie.id}`}>
                    <Poster
                        title={movie.original_title}
                        posterPath={movie.poster_path}
                    />
                </Link>
            ))}</div>
        )
    }

    const searchMovies = (searchCriteria) => {
        if (searchCriteria) {
            fetch(`/search/movie?searchCriteria=${searchCriteria}`)
                .then(res =>
                    res.json())
                .then(res =>
                    setMovies(res.data))
                .catch(err => {
                    console.log('ERROR', err)
                })
        } else {
            getMovies()
        }
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/:movieId" component={Details}/>
                    <Route path="/">
                        <div>
                            <div>
                                <header>
                                    <h1>The NEXT IMDb!</h1>
                                </header>
                                <SearchBar onSearch={searchMovies}/>
                            </div>
                            {showMovies()}
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
