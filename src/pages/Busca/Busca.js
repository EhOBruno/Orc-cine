import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import NavBar from "../../components/NavBar"
import { APIkey } from "../../key"
import "./Busca.css"
import Login from "../../components/Login"
import FilterMovies from "../../components/FilterMovies"

function Busca() {

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const imagePath = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        const getSearchedMovies = async (url) => {
            const res = await fetch(url)
            const data = await res.json()

            setMovies(data.results)
        }
        const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=pt-BR&query=${query}`
        getSearchedMovies(searchWithQueryURL)
    }, [query])

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
    <div className="popular">
        <header>
            <nav>
                <ul className='navbar'>
                    <NavBar/>
                    <FilterMovies onFilterValueSelected={onFilterValueSelected} />
                    <Login/>
                </ul>
            </nav>
        </header>

      <h2>Resultados para <span>{query}</span></h2>
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

export default Busca
