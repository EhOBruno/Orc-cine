import { Link } from 'react-router-dom'
import { useSession } from '../../hooks/SessionHook'

function Home() {

  const { getToken } = useSession()
  const { aproveToken } = useSession()

  getToken()

  return (
    <div>
      <p>O <span>Orc'cine</span> é um site para você que ama filmes! Aqui você pode ver tudo sobre seus filmes favoritos e muito mais!</p>
        <button type='button' onClick={aproveToken}>Entrar</button>
        <p>ou</p>
        <Link to={'/popular'}>navegue livremente!</Link>
    </div>
  )
}

export default Home
