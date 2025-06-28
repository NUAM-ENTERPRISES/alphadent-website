import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './S.css';
import services from '../Data/services';
import defaultImg from '../assets/imgg2.png';

const ServiceDetails = () => {
  const { serviceTitle } = useParams();
  const [service, setService] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    setFadeIn(true);
    window.scrollTo(0, 0);

    // Find service by title (case-insensitive match)
    const foundService = services.find(
      (s) => s.title.toLowerCase() === decodeURIComponent(serviceTitle).toLowerCase()
    );

    setService(foundService);
  }, [serviceTitle]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!service) {
    return (
      <div className="service-error">
        <h2>Service Not Found</h2>
        <p>No data found for "<strong>{serviceTitle}</strong>". Please check the link.</p>
      </div>
    );
  }

  const { title, image, descriptions, details } = service;

  return (
    <div className={`service-details-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="hero-banner">
        <img src={image || defaultImg} alt={title} className="hero-img" />
        <div className="hero-text-overlay">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="service-description">
        <h3>{details?.heading || title}</h3>
        <p>{descriptions}</p>
      </div>

      {details?.betweenImage && (
        <div className="service-image-section">
          <img src={details.betweenImage} alt="Service visual" className="service-image" />
        </div>
      )}

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
