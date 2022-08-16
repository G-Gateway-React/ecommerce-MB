import React from 'react'
import Home from './pages/home/Home'
import CssBaseline from '@mui/material/CssBaseline';
import { Global, css } from "@emotion/react";
import Product from "./pages/Product/Product";


const App = () => {
  return (
    <>
      <CssBaseline />
      {/*<Home />*/}
      <Product/>

    </>
  );
}

export default App
