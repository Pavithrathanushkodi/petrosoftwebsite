import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Optional styling for navbar

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/trackpetrolsale" activeClassName="active-link">Track Petrol Sale</NavLink></li>
        <li><NavLink to="/tracklubricantsale" activeClassName="active-link">Oil Categories</NavLink></li>
        <li><NavLink to="/cashclosure" activeClassName="active-link">Cash Closure</NavLink></li>
        <li><NavLink to="/CreditManagement" activeClassName="active-link">Credit Management</NavLink></li>
        <li><NavLink to="/customer" activeClassName="active-link">Customer</NavLink></li>
        <li><NavLink to="/dailysalesentry" activeClassName="active-link">Daily Sales Entry</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
