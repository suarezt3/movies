import React from 'react'


function Card({props}) {

    
    const imageUrl = `https://image.tmdb.org/t/p/w300${props.poster_path}`

    return (

        <div>
            <img src={imageUrl} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.overview}</p>
            <h3>{props.genre_ids.join(', ')}</h3>
        </div>
    )
}

export default Card