// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa'; // Icons for search and user
import './Header.css'; // Optional styling for 
import NavBar from '../NavBar/NavBar';
function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      {/* First header section: Logo, Search Box, User */}
      <div className="top-header">
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

        {/* User Dropdown */}
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
      </div>

      {/* Second header section: Navbar with menu links */}
     <NavBar />
    </header>
  );
}

export default Header;
