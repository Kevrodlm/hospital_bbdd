import React from 'react';
import Login from './Login';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import Pagina from './pagina';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/pagina' element={<Pagina />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
