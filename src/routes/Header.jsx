import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
import "../index.css";

const navLinkClassName = ({ isActive }) =>
  `headerLink${isActive ? " active" : ""}`;

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
              <NavLink className={navLinkClassName} to="/about" end>
                about
              </NavLink>
            </li>

            <li>
              <NavLink className={navLinkClassName} to="/projects" end>
                projects
              </NavLink>
            </li>

            <li>
              <NavLink className={navLinkClassName} to="/resume" end>
                resume
              </NavLink>
            </li>

            <li>
              <NavLink className={navLinkClassName} to="/contact" end>
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
