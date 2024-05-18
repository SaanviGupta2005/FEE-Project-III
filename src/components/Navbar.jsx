import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="icon border">
          <img className='ham' src="src/assets/hamburger.png" alt="hamburger menu" />
        </div>
        <div className="Trends border">
          <Link to="container6" smooth={true} duration={500} className="nav-link">TRENDS</Link>
        </div>
        <div className="collections border">
          <Link to="container2" smooth={true} duration={500} className="nav-link">COLLECTIONS</Link>
        </div>
        <div className="designers border">
          <Link to="container7" smooth={true} duration={500} className="nav-link">DESIGNERS</Link>
        </div>
        <input placeholder="SEARCH" className="search-input" />
        <div className="nav-search border">
          <div className="search-icon border">
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
        <div className="bucket border">
          <i className="fa-solid fa-bucket" />
        </div>
        <div className='avatar'>
          <img className="avatar" src="src/assets/avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
