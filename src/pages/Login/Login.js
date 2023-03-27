import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <h2>Entrar</h2>
      <form>
        <input
        type='text'
        placeholder='escreva seu usuário'
        name='text'
        />
        <input
        type='password'
        placeholder='escreva sua senha'
        name='password'
        />
        <input
        type='submit'
        placeholder='Entrar'
        />
      </form>
    </div>
  )
}

export default Login
