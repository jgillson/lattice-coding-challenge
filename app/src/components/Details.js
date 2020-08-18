import React, { Component } from 'react'
import Poster from './Poster'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: {},
            credits: {}
        }
    }

    componentDidMount() {
        const {
            match: { params }
        } = this.props
        this.getDetails(params.movieId)
        this.getCredits(params.movieId)
    }

    getDetails(movieId) {
        fetch(`/movie?id=${movieId}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({ details: { ...res.data } })
            })
            .catch(err => {
                console.log('ERROR', err)
            })
    }

    getCredits(movieId) {
        fetch(`/movie?id=${movieId}/credits`)
            .then(res => res.json())
            .then(res => {
                console.log(res.data)
                this.setState({ credits: { ...res.data } })
            })
            .catch(err => {
                console.log('ERROR', err)
            })
    }

    showDetails() {
        const details = this.state.details

        return (
            <div>
                <div>
                    <header>
                        <h1>{details.original_title}</h1>
                        <h4>Released: {details.release_date}</h4>
                        <h3 style={{ marginTop: 'inherit', fontStyle: 'italic' }}>
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
                        posterPath={details.poster_path} />
                </div>
            </div>
        )
    }

    showCast() {
        const credits = this.state.credits

        let itemsToRender
        if (credits.cast) {
            itemsToRender = credits.cast.map(cast => {
                return <div key={cast.id}>{cast.character} - {cast.name}</div>
            })
        }
        else {
            itemsToRender = "Loading..."
        }
        return <div><h3>Cast</h3><div>{itemsToRender}</div></div>
    }

    showCrew() {
        const credits = this.state.credits

        let itemsToRender
        if (credits.crew) {
            itemsToRender = credits.crew.map(crew => {
                return <div key={crew.id}>{crew.name} - {crew.department}</div>
            })
        }
        else {
            itemsToRender = "Loading..."
        }
        return <div><h3>Crew</h3><div>{itemsToRender}</div></div>
    }

    render() {
        return <div>
            {this.showDetails()}
            {this.showCast()}
            {this.showCrew()}
        </div>
    }
}

export default Details
