import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/app_icon.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Dental Clinic Logo" className="footer-logo" />
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt className="contact-icon" />
              Alphadent
              <br />
              House no 3-83/2/A, 2nd floor
              <br />
              Beside kayur vysya bank, Nizampet village 500090
            </p>
            <p><FaPhone className="contact-icon" /> Call Us: <a href="tel:+1234567890">9088 708 870</a></p>
            <p><FaEnvelope className="contact-icon" /> Email: <a href="mailto:info@dentalclinic.com">info@alphadent.com</a></p>
          </div>
        </div>
        <div className="footer-center">
          <h3 className="footer-title">Our Services</h3>
          <ul className="service-list">
            <li>Dental Health Review</li>
            <li>Dental Implants</li>
            <li>Cosmetic and Smile Makeover</li>
            <li>Aligners (Invisalign Provider)</li>
            <li>Pediatric Dentistry</li>
            <li>General Dentistry</li>
            <li>Oral Surgeries</li>
            <li>Teeth Whitening</li>
            <li>Lasers</li>
            <li>Full Mouth Rehabilitation</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3 className="footer-title">Useful Links</h3>
          <ul className="useful-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Aboutus</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/faqs">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
            <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
            <a href="https://linkedin.com" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Dental Clinic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;