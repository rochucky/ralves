import React, { useState } from 'react';

// styles
import styles from '../../src/styles/sobre.scss';

//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sobre from '../../components/Sobre';


const App = () => {
  
  return (
    <div className="main">
      <Header title="Sobre"/>
      <Sobre />
      <Footer />
    </div>
  )
}

export default App;