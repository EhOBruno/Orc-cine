import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function NavBar() {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        
        if(!search) return

        navigate(`/busca?q=${search}`)
        setSearch('')
    }

  return (
    <nav id='navbar'>   
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Busque um filme'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button type='submit'>Procurar</button>
        </form>
    </nav>
  )
}

export default NavBar
