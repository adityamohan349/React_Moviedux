import React from 'react'
import '../styles.css'

export const MovieCard = ({movie,isWatchListed,toggleWatchList}) => {

    const errorHandler = (e) => {
        e.target.src = 'images/default.png';
    }

    const ratingColor = (rating) => {
        if (rating >= 8) {
            return 'green';
        } else if (rating >= 5) {
            return 'orange';
        } else {
            return 'red';
        }
    }
  return (
     <div className='movie-card' key={movie.id}>
                <img src={`images/${movie.image}`} alt={movie.title} onError={errorHandler}></img>
                <div className='movie-card-info' >
                    <h3 className='movie-card-title'>{movie.title}</h3>
                    <div>
                        <span className='movie-card-genre'>{movie.genre}</span>
                        <span className='movie-card-rating' style={{ color: ratingColor(movie.rating) }}>
                        {movie.rating}
                        </span>
                    </div>
                    <label className='switch'>
                      <input type='checkbox' checked={isWatchListed} onChange={()=>toggleWatchList(movie.id)}>

                      </input>

                      <span className='slider'>
                        <span className='slider-label'>{isWatchListed? "WatchListed":"Add to watch list"}</span>
                      </span>
                    </label>
                </div>
            </div>
  )
}
