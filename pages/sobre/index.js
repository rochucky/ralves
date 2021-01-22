import React, { useState } from 'react';

// styles
import styles from '../../src/styles/sobre.scss';

//components
import Header from '../../components/Header';
import Sobre from '../../components/Sobre';


const App = () => {
  
  return (
    <div>
      <Header title="Sobre"/>
      <Sobre />
    </div>
  )
}

export default App;