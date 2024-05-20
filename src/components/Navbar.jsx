import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
const Navbar = () => {
  return (
    <header>
      <div className="icon border">
        <img className='ham' src="src/assets/images/hamburger.png" alt="hamburger menu" />
        <div class="dropdown-options">
                <Link to="container6" smooth={true} duration={500} className="nav-link">TRENDS</Link>
                <Link to="container2" smooth={true} duration={500} className="nav-link">COLLECTIONS</Link>
                <Link to="container7" smooth={true} duration={500} className="nav-link">DESIGNERS</Link>
            </div>
        </div>
      <div className="navbar">  
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
          <Link to="container1" smooth={true} duration={500} className=""><img className="avatar" src="src/assets/images/avatar.png" alt="avatar" /></Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
