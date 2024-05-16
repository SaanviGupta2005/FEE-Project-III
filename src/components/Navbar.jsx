import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <div className="icon border">
                    <img className='ham' src="src\assets\hamburger.png" alt="" />
                </div>

                <div className="Trends border">
                    <a href="#" className="nav-link">TRENDS</a>
                </div>

                <div className="collections border">
                    <a href="#" className="nav-link">COLLECTIONS</a>
                </div>

                <div className="designers border">
                    <a href="#" className="nav-link">DESIGNERS</a>
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
