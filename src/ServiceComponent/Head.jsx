import React, { useState } from 'react';
import './Header.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import logo from '../assets/app_icon.png';

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <div className="header">
        <div className="contact-info">
          <a href="mailto:info@thealphadent.com">info@thealphadent.com</a>
          <span>|</span>
          <a href="#">
            House no 3-83/2/A, 2nd floor, Beside Kayur Vysya Bank, Nizampet village 500090
          </a>
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          {/* <a href="#"><FaGoogle /></a> */}
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
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a>
            <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/faqs" onClick={() => setMenuOpen(false)}>FAQ's</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </div>
          <div className="book-button">
            <a href="/book-appointment" className="book" onClick={() => setMenuOpen(false)}>Book Appointment →</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;