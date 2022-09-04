import React from 'react'
import Home from './pages/home/Home'
import CssBaseline from '@mui/material/CssBaseline';
<<<<<<< HEAD
import { Global, css } from "@emotion/react";
import Product from "./pages/Product/Product";
=======
import {GlobalStyle} from './style/globalStyle'
import Catalog from './pages/catalog/Catalog';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { Routes, Route } from "react-router-dom";
>>>>>>> a49dd779363c1421e31e2a439e9376f4e55cf734


const App: React.FC = () => {
  return (
    <GlobalStyle>
      <CssBaseline />
<<<<<<< HEAD
      {/*<Home />*/}
      <Product/>

    </>
=======
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </GlobalStyle>
>>>>>>> a49dd779363c1421e31e2a439e9376f4e55cf734
  );
};

export default App
