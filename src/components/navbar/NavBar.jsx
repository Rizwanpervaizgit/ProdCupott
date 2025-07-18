import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './style.css';
// import UserHome from './pages/UserHomePage/UserHomePage';
import logo from '../../assets/images/logo.png';


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Auto-close menu on resizing to large screen
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <a href="javascript:void(0);" id="header-logo-link" className="logo-link">
          <img src={logo} alt="CUP Entertainment Logo" className="logo-img" />
        </a>

        {/* Desktop Links */}
        <nav className="nav-links">
          <a href="/">Home</a>

          <a href="/userhomePage">Movies</a>
          <a href="/userhomePage">Drama</a>
          <a href="/userhomePage">Live TV</a>
          <a href="/about">About Us</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
      </div>

      {/* Hamburger menu button (mobile only) */}
      <button
        id="mobile-menu-button"
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile dropdown menu (toggle) */}
      {menuOpen && (
        <div className="mobile-nav-dropdown">
          <a href="#start-free-trial-section" className="mobile-menu-link">
            Home
          </a>
          <a href="#start-free-trial-section" className="mobile-menu-link">
            Movies
          </a>
          <a href="#start-free-trial-section" className="mobile-menu-link">
            Drama
          </a>
          <a href="#start-free-trial-section" className="mobile-menu-link">
            Live TV
          </a>
          <a href="about.html" className="mobile-menu-link">
            About Us
          </a>
          <a href="contact.html" className="mobile-menu-link">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}

export default NavBar;