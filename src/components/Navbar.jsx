import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from './Button';

function Navbar({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO LINK */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          APPALACHIAN <span>ASENSO</span>
        </Link>

        {/* MOBILE TOGGLE ICON */}
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </button>

        {/* NAV MENU LINKS */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/mini-golf" className="nav-link" onClick={closeMenu}>Mini Golf</Link>
          </li>
          <li>
            <Link to="/laser-tag" className="nav-link" onClick={closeMenu}>Laser Tag</Link>
          </li>
          <li>
            <Link to="/parties" className="nav-link" onClick={closeMenu}>Parties</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </li>
          {/* MOBILE BOOK BUTTON INSIDE DRAWER */}
          <li className="mobile-only-btn" style={{ marginTop: '1rem' }}>
            <Button variant="primary" onClick={() => { closeMenu(); onBookClick(); }}>
              BOOK NOW
            </Button>
          </li>
        </ul>

        {/* DESKTOP BOOK BUTTON */}
        <div className="nav-actions nav-actions-desktop">
          <Button variant="primary" onClick={onBookClick}>
            BOOK NOW
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;