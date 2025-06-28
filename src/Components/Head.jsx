import React, { useState } from 'react';
import './Header.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram,FaGoogle } from 'react-icons/fa';
import logo from '../assets/app_icon.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const totalOffset = headerHeight + navHeight;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - totalOffset,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false); // Close menu after scrolling
  };

  // Handle Home click: if not on home, navigate to home; if on home, scroll
  const handleHomeClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection('hero'), 100);
    } else {
      scrollToSection('hero');
    }
  };

  // Handle Service click: if not on home, navigate to home; if on home, scroll
  const handleServiceClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection('service'), 100);
    } else {
      scrollToSection('service');
    }
  };

  return (
    <>
      <div className="header">
        <div className="contact-info">
          <p>info@alphadent.com</p>
          <span>|</span>
          <p>
            Alphadent House no 3-83/2/A, 2nd floorBeside kayur vysya bank, Nizampet village 500090
          </p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/thealphadent/"><FaFacebookF /></a>
          <a href="https://www.instagram.com/thealphadent/"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="https://maps.app.goo.gl/RLQ7GgoimpFpBFE78"><FaGoogle /></a>
        </div>
      </div>

      <div className="nav">
        <img src={logo} alt="Alphadent Logo" className="logo" />

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <img src={logo} alt="Alphadent Mobile Logo" className="mobile-logo" />
          <div className="nav-links-center">
            <a href="#hero" onClick={handleHomeClick}>Home</a>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            < Link to="/services" onClick={()=> setMenuOpen(false)}>Services</Link>
            <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQ's</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
          <div className="book-button">
            <Link to="/book-appointment" className="book" onClick={() => setMenuOpen(false)}>Book Appointment →</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;