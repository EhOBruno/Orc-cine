import { useState } from 'react'
import { APIkey } from '../key'

function Login() {

    const [token, setToken] = useState('')

    fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${APIkey}`)
    .then(response => response.json())
    .then(data => setToken(data.request_token))

    function aproveToken() {
        return(window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000`)
    }

  return (
    <div>
      <button onClick={aproveToken}>Entrar</button>
    </div>
  )
}

export default Login
