import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Popular from './pages/Popular/Popular';
import Detalhes from './pages/Detalhes/Detalhes';
import Busca from './pages/Busca/Busca';
import Login from './pages/Login/Login';
import { SessionContext } from './contexts/SessionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/detalhes/:id' element={<Detalhes/>}/>
        <Route path='/busca' element={<Busca/>}/>
      </Routes>
    </BrowserRouter>
);