import React from 'react'
import Home from './pages/home/Home'
import CssBaseline from '@mui/material/CssBaseline';
import { Global, css } from "@emotion/react";
import Product from "./pages/Product/Product";
import Catalog from './pages/catalog/Catalog';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './style/globalStyle';
import Footer from './components/footer/Footer';


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
      <Footer />
    </GlobalStyle>
  );
};

export default App
