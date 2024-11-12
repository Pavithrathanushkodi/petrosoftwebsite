import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import './Home.css'; // Ensure your CSS is properly linked

const Home = () => {
  return (
    <div>
      {/* Header appears above the banner */}
      <Header />

      {/* Navigation Bar */}
      <nav className="subnav">
        <ul>
          <li><a href="#home-section">Home</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#price-report-section">Price Report</a></li>
          <li><a href="#footer-section">Footer</a></li>
        </ul>
      </nav>

      {/* Render corresponding sections based on active scroll */}
      <div id="home-section" className="banner-container">
        <img 
          src="/images/homebannerimg.png"  // Corrected image path
          alt="Banner" 
          className="banner-image" 
        />
      </div>

      <div id="about-section" className="about-container">
        <div className="about-left">
        <img 
  src="/images/selection-047-500x500.webp" 
  alt="About Image" 
  className="about-image"
/>

        </div>
        <div className="about-right">
          <h2>About Us</h2>
          <p>Welcome to Petrosoft – the trusted platform designed to simplify petrol bunk management. We understand that running a petrol station involves a wide range of responsibilities, from tracking sales and managing inventory to handling customer credit and maintaining financial accuracy. Our goal is to make these tasks seamless and efficient so you can focus on delivering top-notch service to your customers.</p>
        </div>
      </div>

      <div id="price-report-section" className="price-report-container">
        <h2 className="price-report-title">Price Report</h2>
        <div className="price-report-box">
          <div className="price-box diesel">
            <h3>Diesel Price</h3>
            <p>Price: $5.00</p>
          </div>
          <div className="price-box petrol">
            <h3>Petrol Price</h3>
            <p>Price: $4.50</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
