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

const Main = () => {
  return (
    <div>
      <h1>Pagina Principal</h1>
    </div>
  )

}

export default Home;