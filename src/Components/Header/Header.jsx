// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Icons for search, user, hamburger, and close
import './Header.css'; // Optional styling for header
import NavBar from '../NavBar/NavBar';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // State for the mobile menu

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle the mobile menu visibility
  };

  return (
    <header className="header">
      {/* Top header section: Logo, Search Box, User Icon */}
      <div className="top-header">
        {/* Logo */}
        <img src="/images/image (7).png" alt="Logo" className="logo-image" />

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>

        {/* User Icon */}
        <div className="user-menu">
          <button className="user-icon" onClick={toggleDropdown}>
            <FaUser />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* Mobile Navbar (only shown when hamburger is clicked) */}
      <div className={`navbar-container ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <NavBar />
      </div>

      {/* Desktop Navbar (always visible below the top header in desktop view) */}
      <div className="desktop-navbar">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
