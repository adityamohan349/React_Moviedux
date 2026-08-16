import React from 'react'
import '../styles.css'
import { MovieCard } from './MovieCard';
export const WatchList = ({movies,watchList,toggleWatchList}) => {
  return (
    <div>
      <h1 className='title'>My Watch List</h1>
      <div className='watchlist'>
       {
         watchList.map(id=>{
            const movie=movies.find(m=>m.id===id);
            return <MovieCard key={id} movie={movie} toggleWatchList={toggleWatchList} isWatchListed={true}/>
         })
       }
      </div>
    </div>
  )
}
