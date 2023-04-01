import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Popular from './pages/Popular/Popular';
import Detalhes from './pages/Detalhes/Detalhes';
import Busca from './pages/Busca/Busca';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Popular/>}/>
          <Route path='/detalhes/:id' element={<Detalhes/>}/>
          <Route path='/busca' element={<Busca/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
