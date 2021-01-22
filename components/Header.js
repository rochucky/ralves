
import Head from 'next/head';
import Link from 'next/link';

const Header = (props) => {
  return (
    <nav>
      <Head>
        <title>Rodrigo Alves - {props.title}</title>
      </Head>
      <div className="title">
       <h2>Rodrigo Alves</h2>
      </div>
      <div className="menu">
        <ul>
          <li className="home"> 
            <Link href="/">Home</Link>
          </li>
          <li className="sobre"> 
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className="blog">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="menu_icon">
        <div className="top" onClick={openMenu}></div>
        <div className="bottom" onClick={openMenu}></div>
      </div>
    </nav>
  )
}

const openMenu = () => {
  document.querySelector("nav").classList.toggle('showMenu');
}

export default Header;