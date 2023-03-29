import { createContext , useState } from 'react'

const baseUser = {
    sessionId: null,
    username: null
}

export const SessionContext = createContext(baseUser)

export function SessionContextProvider(props){
    const [user, setUser] = useState(baseUser)

    let sessionId = localStorage.getItem('sessionId')
    if (sessionId !== null){
        setUser({
            sessionId: sessionId,
            username: localStorage.getItem('username')
        })
    }

    return (
        <SessionContext.Provider value = {{user, setUser}}>
            {props.children}
        </SessionContext.Provider>
    )
}