import { useState } from 'react';

const Home = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

const Header = () => {
  return (
    <nav>
      
      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Blog</li>
      </ul>
    </nav>
  )
}

export default Home;