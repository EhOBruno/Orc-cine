import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { APIkey } from '../../key'
import './Popular.css'
import { FaStar } from "react-icons/fa";
import FilterMovies from "../../components/FilterMovies"
import Login from '../../components/Login'

function Popular() {

    const [movies, setMovies] = useState([])
    const imagePath = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    },[])
    
    const [filterTextValue, setFilterTextValue] = useState('en')

    function onFilterValueSelected(filterValue){
      setFilterTextValue(filterValue)
    }

    const filteredMovies = movies.filter((movies) => {
          if(filterTextValue===movies.original_language){
            return movies.original_language===filterTextValue
          }
    }
    )

  return (
    <div>
        <header>
            <nav>
                <ul className='navbar'>
                    <NavBar/>
                    <FilterMovies onFilterValueSelected={onFilterValueSelected} />
                    <Login/>
                </ul>
            </nav>
        </header>

      <h1>Os Filmes Mais Populares!</h1>

      <ul className='popular-movies'>
        {filteredMovies.map(movie => {
            return(
                <li className='movie' key={movie.id}>
                    <Link to={`/detalhes/${movie.id}`}><img src={`${imagePath}${movie.poster_path}`} alt='poster'/></Link>
                    <p>{movie.title}</p>
                    <p> <FaStar /> {movie.vote_average} </p>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Popular
