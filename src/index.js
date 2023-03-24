import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Popular from './pages/Popular/Popular';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
    </Routes>
  </BrowserRouter>
);