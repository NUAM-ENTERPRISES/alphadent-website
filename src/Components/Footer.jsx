import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope,FaGoogle } from 'react-icons/fa';
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
            <li><Link to="/service/details/Dental Health Review">Dental Health Review</Link></li>
            <li><Link to="/service/details/Dental Implants">Dental Implants</Link></li>
            <li><Link to="/service/details/Cosmetic and Smile makeover">Cosmetic and Smile Makeover</Link></li>
            <li><Link to="/service/details/Aligner (Invisalign Provider)">Aligners (Invisalign Provider)</Link></li>
            <li><Link to="/service/details/Pediatric Dentistry">Pediatric Dentistry</Link></li>
            <li><Link to="/service/details/General Dentistry">General Dentistry</Link></li>
            <li><Link to="/service/details/Oral Surgery">Oral Surgeries</Link></li>
            <li><Link to="/service/details/Teeth whitening">Teeth Whitening</Link></li>
            <li><Link to="/service/details/Laser">Lasers</Link></li>
            <li><Link to="/service/details/Full Mouth Rehabilitation">Full Mouth Rehabilitation</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-title">Useful Links</h3>
          <ul className="useful-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/faqs">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="https://www.instagram.com/thealphadent/"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="https://maps.app.goo.gl/RLQ7GgoimpFpBFE78"><FaGoogle /></a>
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
