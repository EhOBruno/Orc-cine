import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
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
            <button type='submit'><FaSearch /></button>
        </form>
    </nav>
  )
}

export default NavBar
