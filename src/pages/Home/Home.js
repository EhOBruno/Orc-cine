import './Home.css'

function Home() {

  return (
    <div className="home">
      <section className='posters'>
        <div className='posters-cima'>
          <img src="https://sm.ign.com/t/ign_br/screenshot/default/image002_uuhb.960.jpg" alt='poster-aranhaverso'/>
          <img src="https://www.atoupeira.com.br/wp-content/uploads/2022/06/o-gato-de-botas-2-novo-poster-150622.jpg" alt='poster-gato-de-botas'/>
        </div>
        <div className='posters-baixo'>
          <img src='https://br.web.img2.acsta.net/medias/nmedia/18/97/04/22/20504502.jpg' alt='poster-shrek2'/>
        </div>
      </section>
      <section className='textos'>
        <p>O <span>Orc'cine</span> é um site para você que ama filmes! Aqui você pode ver tudo sobre seus filmes favoritos e muito mais!</p>
        <a href="/popular"><button>Navegue livremente!</button></a>
      </section>
    </div>
  )
}

export default Home
