import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { APIkey } from '../../key'
import './Popular.css'
import { FaStar } from "react-icons/fa";
import FilterMovies from "../../components/FilterMovies"

function Popular() {

    const [movies, setMovies] = useState([])
    const imagePath = 'https://image.tmdb.org/t/p/w500'

    const [sessionId, setSessionId] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    },[])

    fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${APIkey}`)
        .then(response => response.json())
        .then(data => setToken(data.request_token))

    function aproveToken() {
      return(window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/popular`)
    }
    
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
                    <li><button onClick={aproveToken}>Entrar</button></li>
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
