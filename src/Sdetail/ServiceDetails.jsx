import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './S.css';
import defaultImg from '../assets/imgg2.png';

const ServiceDetails = () => {
  const location = useLocation();
  const service = location.state?.service;

  const [openIndexes, setOpenIndexes] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <p className="service-error">Service data not available. Please go back and select a service.</p>;
  }

  const { title, image, descriptions, details } = service;

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`service-details-container ${fadeIn ? 'fade-in' : ''}`}>
      {/* Hero Section */}
      <div className="hero-banner">
        <img src={image || defaultImg} alt={title} className="hero-img" />
        <div className="hero-text-overlay">
          <h1>{title}</h1>
        </div>
      </div>

      {/* Service Main Description */}
      <div className="service-description">
        <h3>{details?.heading || title}</h3>
        <p>{descriptions}</p>
      </div>

      {/* Between Image Section */}
      {details?.betweenImage && (
        <div className="service-image-section">
          <img src={details.betweenImage} alt="Service visual" className="service-image" />
        </div>
      )}

      {/* Sub Sections */}
      {details?.subSections?.length > 0 && (
        <div className="service-subsections">
          {details.subSections.map((section, index) => (
            <div key={index} className="subsection-card slide-in">
              <h3>{section.subheading}</h3>
              <p>{section.paragraph}</p>
            </div>
          ))}
        </div>
      )}

      {/* Gallery Images */}
      {details?.galleryImages?.length > 0 && (
        <div className="service-gallery">
          <h2 className='gallery'>Gallery</h2>
          <div className="gallery-grid">
            {details.galleryImages.map((img, idx) => (
              <div key={idx} className="gallery-item zoom-in">
                <img src={img || defaultImg} alt={`Gallery ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ Accordion */}
      {details?.faq?.length > 0 && (
        <div className="service-faq">
          <h2 className='faq'>Frequently Asked Questions</h2>
          {details.faq.map((item, index) => (
            <div key={index} className={`faq-item ${openIndexes.includes(index) ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h4>{item.question}</h4>
                <span>{openIndexes.includes(index) ? '-' : '+'}</span>
              </div>
              {openIndexes.includes(index) && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
