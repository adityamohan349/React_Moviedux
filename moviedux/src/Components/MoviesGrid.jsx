import React, { useState,useEffect } from 'react'
import { MovieCard } from './MovieCard'
import '../styles.css'
export const MoviesGrid=({movies,watchList,toggleWatchList})=> {
    
    const [searchTerm,setSearchTerm]=useState("")
    const[genre,setGenre]=useState("All Genres")
    const[rating,setRating]=useState("All")

    const handleSearch=(e)=>{
         setSearchTerm(e.target.value)
    }
    const handleGenre=(e)=>{
         setGenre(e.target.value)
    }
    const handleRating=(e)=>{
         setRating(e.target.value)
    }
    const matchesGenre=(movie,genre)=>{
        return genre==="All Genres" || movie.genre.toLowerCase()===genre.toLowerCase();
    }

    const matchesSearchterm=(movie,searchTerm)=>{
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const matchesRating=(movie,rating)=>{
      return rating==="All" || (rating==="Good" && movie.rating>=8) || (rating==="Ok" && movie.rating>=5 && movie.rating<8) || (rating==="Bad" && movie.rating<5);
    }

    const filteredMovies=movies.filter((movie)=>matchesGenre(movie,genre) && 
                         matchesSearchterm(movie,searchTerm) && matchesRating(movie,rating))

  return (
    <div>
      <input type='text' className="search-input" placeholder='search movies...'
       value={searchTerm} onChange={handleSearch}></input>

       <div className='filter-bar'>
          <div className='filter-slot'>
            <label>Genre</label>
            <select className='filter-dropdown' value={genre} onChange={handleGenre}>
              <option>All Genres</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Fantasy</option>
              <option>Horror</option>
            </select>
          </div>
          <div className='filter-slot'>
             <label>Rating</label>
             <select  className='filter-dropdown' value={rating} onChange={handleRating}>
              <option>All</option>
              <option>Good</option>
              <option>Ok</option>
              <option>Bad</option>
            </select>
          </div>
       </div>


      <div className='movies-grid'>
        {filteredMovies.map((m1)=>(
           <MovieCard movie={m1} isWatchListed={watchList.includes(m1.id)} 
           toggleWatchList={toggleWatchList} key={m1.id}/>
        ))}
      </div>
    </div>
  )
}
