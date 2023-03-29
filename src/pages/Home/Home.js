import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { APIkey } from '../../key'

function Home() {

  const [token, setToken] = useState()

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${APIkey}`)
          .then(response => response.json())
          .then(data => setToken(data.request_token))
  }, [])

  return (
    <div>
      <p>O <span>Orc'cine</span> é um site para você que ama filmes! Aqui você pode ver tudo sobre seus filmes favoritos e muito mais!</p>
        <a href={`https://www.themoviedb.org/authenticate/${token}`}>registre-se</a>
        <p>ou</p>
        <Link to={'/popular'}>navegue livremente!</Link>
    </div>
  )
}

export default Home
