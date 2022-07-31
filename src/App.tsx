import React from 'react'
import Home from './pages/home/Home'
import CssBaseline from '@mui/material/CssBaseline';
import {GlobalStyle} from './style/globalStyle'
import Catalog from './pages/catalog/Catalog';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Routes, Route } from "react-router-dom";


const App: React.FC = () => {
  return (
    <GlobalStyle>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </GlobalStyle>
  );
};

export default App
