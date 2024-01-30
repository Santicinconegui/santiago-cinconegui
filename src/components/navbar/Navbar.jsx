import React from "react";
import { useState } from "react";
import Burgerbutton from "../burgerbutton/Burgerbutton";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar" translate="no">
      <div className="navbarContainer">
        <div className="sectionNavbar">
          <Link to="home" smooth={true} duration={500}>
            <h3 className="tittle">Santi.Cinconegui | DEV</h3>
          </Link>
        </div>

        <ul>
          <div className="burguer">
            <Burgerbutton clicked={clicked} handleClick={handleClick} />
          </div>
          <div className={`${clicked ? "list" : "active"}`}>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                offset={-300}
                className="link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={1000}
                offset={-50}
                className="link">
                About
              </Link>
            </li>
            <li>
              <Link
                to="Project"
                className="link"
                smooth={true}
                duration={1000}
                offset={-200}>
                Project
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="link"
                smooth={true}
                duration={1000}
                offset={65}>
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
