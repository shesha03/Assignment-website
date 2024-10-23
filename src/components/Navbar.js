import React, { useState } from 'react';
import './Navbar.css';
import candice from '../Assets/candice.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Untitled UI</div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>Products</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>
      <div className="profile-pic">
        <img className='candice' src={candice} alt='' />
      </div>
      <button className="action-button" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
