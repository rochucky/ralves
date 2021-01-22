import React, { useState } from 'react';

// styles
import styles from '../src/styles/main.scss';

//components
import Header from '../components/Header';
import Home from '../components/Home';


const App = () => {
  
  return (
    <div>
      <Header title="Home"/>
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App;