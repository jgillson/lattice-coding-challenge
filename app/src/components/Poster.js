import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const Poster = (props) => {

    return (
        <Card style={{maxWidth: 345, margin: 16}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.title}
                    height="500"
                    // ref: https://developers.themoviedb.org/3/getting-started/images
                    src={'https://image.tmdb.org/t/p/w500/' + props.posterPath}
                    title={props.title}
                />
            </CardActionArea>
        </Card>
    )
}

export default Poster
