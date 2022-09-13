
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./store/store";
=======
import { store } from "./store/store";
import App from './App';


>>>>>>> 37af4030145f9f1f0bed22e4583cafce632dfe68

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
