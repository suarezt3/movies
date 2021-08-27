import React from 'react'
import Card from '../Card/Card'
import movies from '../../movieList.json'

function Cards(props) {  
    

const moviesFilter = movies.filter((movie) => movie.genre_ids.includes(53))

    return (
        <div>
              <h1>COMPONENTE CARDS</h1>  
              {
                moviesFilter.map((movie, index) => 
                <Card props={movie} key={index} />
                )   
              }  
        </div>
    )
}         

export default Cards