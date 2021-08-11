import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

import './app.scss';
import './core/assets/styles/custom.scss'

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
    
  );
}

export default App;
