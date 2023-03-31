import { createContext , useState } from 'react'
import { APIkey } from '../key'

export const SessionContext = createContext(baseUser)

export function SessionContextProvider(props){

    const [token, setToken] = useState('')
    const [sessionId, setSessionId] = useState('')

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${APIkey}`)
            .then(response => response.json())
            .then(data => setToken(data.request_token))
            localStorage.setItem('request_token', token)
    })

    function aproveToken() {
        return(window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('request_token')}?redirect_to=http://localhost:3000/login`)
    }

    function createSession() {
        const init = {
            method: 'POST',
            body: JSON.stringfy(localStorage.getItem(request_token, 'request_token'))
        }
        fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${APIkey}`, init)
            .then(response => response.json())
            .then(data => setSessionId(data.session_id))
            localStorage.setItem('session_id', sessionId)
    }

    return (
        <SessionContext.Provider value={{aproveToken, createSession}}>
            {props.children}
        </SessionContext.Provider>
    )
}