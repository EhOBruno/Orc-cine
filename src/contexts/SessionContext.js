import { createContext , useState } from 'react'
import { APIkey } from '../key'

export const SessionContext = createContext({})

export function SessionProvider(props){

    const [token, setToken] = useState('')
    const [sessionId, setSessionId] = useState('')
    const [logged, setLogged] = useState(false)

    function getToken() {
        fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${APIkey}`)
            .then(response => response.json())
            .then(data => setToken(data.request_token))
            localStorage.setItem('token', token)
    }

    function aproveToken() {
        return(window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem(token)}?redirect_to=http://localhost:3002/login`)
    }

    function createSession() {
        const init = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringfy({'aproved_token': localStorage.getItem('token')})
        }
        fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${APIkey}`, init)
            .then(response => response.json())
            .then(data => setSessionId(data.session_id))
            localStorage.setItem('session_id', sessionId)

        setLogged(true)
    }

    return (
        <SessionContext.Provider value={{aproveToken, createSession, getToken, logged}}>
            {props.children}
        </SessionContext.Provider>
    )
}