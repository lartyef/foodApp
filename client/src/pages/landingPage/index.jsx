import React from 'react';
import './index.css'; 
import Footer from '../../module/component/footer';

const NavBar = () => {
  return (

    <>
    <nav className="navbar">
      <div className="logo">
        <a href="/" className="logo-link">
          <span className="logo-text">Igineous</span>
          <span className="food-app">Food App</span>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#order">Order Now</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default NavBar;
