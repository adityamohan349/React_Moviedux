import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './styles.css'
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { MoviesGrid } from './Components/MoviesGrid.jsx'
import { WatchList } from './Components/WatchList.jsx'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function App() {

  const [movies,setMovies]=useState([])
  const [watchList,setWatchList]=useState([])

  useEffect(()=>{
        fetch('movies.json')
        .then(response => response.json())
        .then(data => setMovies(data))
    },[])

    const toggleWatchList=(movieId)=>{
      setWatchList(prevWatchList=>{
        if(prevWatchList.includes(movieId)){
          return prevWatchList.filter(id=>id!==movieId)
        }else{
          return [...prevWatchList,movieId]
        }
      })
    }

  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watch List</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid watchList={watchList} movies={movies} toggleWatchList={toggleWatchList}/>} />
            <Route path="/watchlist" element={<WatchList watchList={watchList} movies={movies} toggleWatchList={toggleWatchList}/>} />
          </Routes>
        </Router>
      </div>
    <Footer />
    </div>
  )
}

export default App
