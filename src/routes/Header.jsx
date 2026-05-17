import { Link } from "react-router-dom";
import "../styles/Header.css";
import "../index.css";

function Header() {
  return (
    <>
      <header>
        <h1>
          <Link className="headerLink" to="/">
            Colleen Murray
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link className="headerLink" to="/about">
                about
              </Link>
            </li>

            <li>
              <Link className="headerLink" to="/work">
                work
              </Link>
            </li>

            <li>
              <Link className="headerLink" to="/resume">
                resume
              </Link>
            </li>

            <li>
              <Link className="headerLink" to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
