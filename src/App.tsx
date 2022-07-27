import React from 'react'
import Home from './pages/home/Home'
import CssBaseline from '@mui/material/CssBaseline';
import {GlobalStyle} from './style/globalStyle'
import Catalog from './pages/catalog/Catalog';


const App: React.FC = () => {
  return (
    <GlobalStyle>
      <CssBaseline />
      {/* <Home /> */}
      <Catalog />
    </GlobalStyle>
  );
};

export default App
