import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p>O <span>Orc'cine</span> é um site para você que ama filmes! Aqui você pode ver tudo sobre seus filmes favoritos e muito mais!</p>
        <Link to={'/cadastro'}>registre-se</Link>
        <p>ou</p>
        <Link to={'/popular'}>navegue livremente!</Link>
    </div>
  )
}

export default Home
