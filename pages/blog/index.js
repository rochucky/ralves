import React, { useState } from 'react';


// styles
import styles from '../../src/styles/main.scss';

//components
import Header from '../../components/Header';
import Blog from '../../components/Blog';


const App = () => {
  
  return (
    <div>
      <Header title="Blog"/>
      <Blog />
    </div>
  )
}

export default App;