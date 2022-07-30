import React from 'react'
import Home from './pages/home/Home'
import CssBaseline from '@mui/material/CssBaseline';
import {GlobalStyle} from './style/globalStyle'
import Catalog from './pages/catalog/Catalog';
import Footer from './components/footer/Footer';


const App: React.FC = () => {
  return (
    <GlobalStyle>
      <CssBaseline />
      {/* <Home /> */}
      <Catalog />
      <Footer />
    </GlobalStyle>
  );
};

export default App
