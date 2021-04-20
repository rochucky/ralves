import React, { useState } from 'react';

// styles
import styles from '../src/styles/main.scss';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';


const App = () => {
  
  return (
    <div className="main">
      <Header title="Home"/>
      <Home />
      <Footer />
    </div>
  )
}

export default App;