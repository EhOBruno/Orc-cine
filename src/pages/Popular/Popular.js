import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { APIkey } from '../../key'
import './Popular.css'
import { useSession } from '../../hooks/SessionHook'

function Popular() {

    const [movies, setMovies] = useState([])
    const imagePath = 'https://image.tmdb.org/t/p/w500'
    const { getToken } = useSession()
    const { aproveToken } = useSession()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))

        getToken()
    },[])

    const [search, setSearch]= useState('')
    const filteredMovies = movies.filter((movies) => movies.title.includes(search))

  return (
    <div>
        <header>
            <nav>
                <ul className='navbar'>
                    <NavBar/>
                    <li><button onClick={aproveToken} className='page'>Registrar-se</button></li>
                    <li><Link to={'/login'} className='page'>Entrar</Link></li>
                </ul>
            </nav>
        </header>

      <h1>Filmes mais populares!</h1>

      <ul className='popular-movies'>
        {filteredMovies.map(movie => {
            return(
                <li className='movie'>
                    <Link to={`/detalhes/${movie.id}`}><img src={`${imagePath}${movie.poster_path}`} alt='poster'/></Link>
                    <p>{movie.title}</p>
                    <p> Nota: {movie.vote_average} </p>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Popular
