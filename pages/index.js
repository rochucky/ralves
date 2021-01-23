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
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App;