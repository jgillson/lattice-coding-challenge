import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

class Poster extends Component {
    render() {
        return (
            <Card style={{ maxWidth: 345, margin: 16 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={this.props.title}
                        height="500"
                        // ref: https://developers.themoviedb.org/3/getting-started/images
                        src={'https://image.tmdb.org/t/p/w500/' + this.props.posterPath}
                        title={this.props.title}
                    />
                </CardActionArea>
            </Card>
        )
    }
}

export default Poster
