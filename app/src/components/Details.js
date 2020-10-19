import React, {useState, useEffect} from 'react'
import Poster from './Poster'

const Details = (props) => {
    let [details, setDetails] = useState({})
    let [credits, setCredits] = useState({})

    useEffect(() => {
        const {
            match: {params}
        } = props
        getDetails(params.movieId)
        getCredits(params.movieId)
    })

    const getDetails = (movieId) => {
        fetch(`/movie?id=${movieId}`)
            .then(res =>
                res.json())
            .then(res => {
                setDetails(res.data)
            })
            .catch(err => {
                console.log('ERROR', err)
            })
    }

    const getCredits = (movieId) => {
        fetch(`/movie?id=${movieId}/credits`)
            .then(res =>
                res.json())
            .then(res => {
                setCredits(res.data)
            })
            .catch(err => {
                console.log('ERROR', err)
            })
    }

    const showDetails = () => {
        return (
            <div>
                <div>
                    <header>
                        <h1>{details.original_title}</h1>
                        <h4>Released: {details.release_date}</h4>
                        <h3 style={{marginTop: 'inherit', fontStyle: 'italic'}}>
                            {details.tagline}
                        </h3>
                        <p>{details.overview}</p>
                    </header>
                </div>
                <div
                    style={{
                        margin: 20,
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around'
                    }}
                >
                    <Poster
                        title={details.original_title}
                        posterPath={details.poster_path}/>
                </div>
            </div>
        )
    }

    const showCast = () => {
        let itemsToRender
        if (credits.cast) {
            itemsToRender = credits.cast.map(cast => {
                return <div key={cast.id}>{cast.character} - {cast.name}</div>
            })
        } else {
            itemsToRender = "Loading..."
        }
        return <div><h3>Cast</h3>
            <div>{itemsToRender}</div>
        </div>
    }

    const showCrew = () => {
        let itemsToRender
        if (credits.crew) {
            itemsToRender = credits.crew.map(crew => {
                return <div key={crew.id}>{crew.name} - {crew.department}</div>
            })
        } else {
            itemsToRender = "Loading..."
        }
        return <div><h3>Crew</h3>
            <div>{itemsToRender}</div>
        </div>
    }

    return <div>
        {showDetails()}
        {showCast()}
        {showCrew()}
    </div>
}

export default Details
