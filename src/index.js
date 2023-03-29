import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Popular from './pages/Popular/Popular';
import Detalhes from './pages/Detalhes/Detalhes';
import { SessionContextProvider } from './contexts/SessionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SessionContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/detalhes/:id' element={<Detalhes/>}/>
      </Routes>
    </BrowserRouter>
  </SessionContextProvider>
);