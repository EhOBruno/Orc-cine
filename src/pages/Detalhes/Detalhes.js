import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { APIkey } from "../../key"
import { FaStar } from "react-icons/fa";
import './Detalhes.css'

function Detalhes() {

  const {id} = useParams()

  const [movie, setMovie] = useState({})
  const imagePath = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => {
        const {title, poster_path, overview, release_date, vote_average} = data
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imagePath}${poster_path}`,
          releaseDate: release_date,
          voteAverage: vote_average,
        }
        setMovie(movie)
      })
  }, [id])

  return (
    <div className="filme">
      <img src={movie.image} alt={movie.sinopse} />
      <div className="detalhes">
        <h1>{movie.title}</h1>
        <p>Sinopse: {movie.sinopse}</p>
        <p className="data-lancamento">Data de lançamento: {movie.releaseDate}</p>
        <p > <FaStar className="avaliacao" />  {movie.voteAverage} </p>
        <Link to="/"><button className="voltar">Voltar</button></Link>
      </div>
    </div>
  )
}

export default Detalhes