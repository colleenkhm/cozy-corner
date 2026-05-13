import { Link } from 'react-router-dom';
import '../styles/Header.css';
import '../index.css'

function Header() {
  return (
    <>
      <header>
        <h1>
          <Link className='globalLink' to="/">Colleen Murray</Link>
        </h1>
        <nav>
          <ul>
            <li><Link className='globalLink' to="/about">about</Link></li>

            <li><Link className='globalLink' to="/work">work</Link></li>


            <li><Link className='globalLink' to="/resume">resume</Link></li>
            
            <li><Link className='globalLink' to="/contact">contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header