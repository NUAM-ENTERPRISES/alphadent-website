import React, { useState, useEffect } from 'react';
import './Contact.css';
import { SEND_ENQUIRY_EMAIL, CLINIC_ID } from '../api/api';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'phone') {
      newValue = value.replace(/[^0-9]/g, '');
      if (newValue.length > 10) {
        setErrorMessage('Phone number must be 10 digits.');
        return;
      } else {
        setErrorMessage('');
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    setIsLoading(true);

    const { name, phone, message } = formData;

    if (!name || !phone || !message) {
      setErrorMessage('Please fill out all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      console.log('📬 Sending Contact Enquiry:', formData);

      const response = await fetch(SEND_ENQUIRY_EMAIL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Clinic-ID': CLINIC_ID,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('✅ API Response:', data);

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('❗ API Error:', error);
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-us-container fade-in">
      {/* Contact Info */}
      <section className="contact-details">
        <h2 className='contactss'>Contact Us</h2>
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>Alphadent House no 3-83/2/A, 2nd floorBeside kayur vysya bank, Nizampet village 500090</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>91 9088 708 870</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>

          {successMessage && (
            <div className="alert success">
              <strong>Success!</strong> {successMessage}
              <button type="button" onClick={() => setSuccessMessage('')}>×</button>
            </div>
          )}
          {errorMessage && (
            <div className="alert error">
              <strong>Oops!</strong> {errorMessage}
              <button type="button" onClick={() => setErrorMessage('')}>×</button>
            </div>
          )}
        </form>
      </section>

      {/* Google Map */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7958159.452906621!2d72.26922526819939!3d13.110583949958178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939a56c58c33%3A0xb642ab673e42e1c1!2sAlphadent%20Dental%20Clinic%20-%20Nizampet%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1750752081252!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Alphadent Dental Clinic - Nizampet, Hyderabad"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
