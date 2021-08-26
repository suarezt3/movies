import React from 'react'
import Card from '../Card/Card'
import movies from '../../movieList.json'

function Cards() {

    return (
        <div>
               {
                movies.map((movie) =>
                   <Card />
                )
               }
        </div>
    )
}

export default Cards