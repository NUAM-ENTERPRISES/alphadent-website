import React, { useEffect, useState, useRef } from 'react';
import './Why.css';
import { useNavigate } from 'react-router-dom';
import services from '../Data/services';

const Why = () => {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const sliderRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Heading animation when in view
  useEffect(() => {
    const heading = document.querySelector('.section-heading');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heading) observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  // Auto scroll slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    const scrollSpeed = 1.5;

    const scrollStep = () => {
      slider.scrollLeft += scrollSpeed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Navigate to all services page
  useEffect(() => {
    if (showAll) {
      navigate('/services', { state: { services } });
    }
  }, [showAll, navigate]);

  // Navigate to individual service details
  const handleServiceClick = (service) => {
    navigate(`/service/details/${encodeURIComponent(service.title)}`, {
      state: { service },
    });
  };

  return (
    <div>
      <h4 className="sectionhead">What We Do</h4>
      <h1 className="section-heading">Our Services</h1>

      <div className="service-slider" id="service" ref={sliderRef}>
        <div className="service-track">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="service-card"
              role="button"
              tabIndex={0}
              onClick={() => handleServiceClick(service)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleServiceClick(service);
              }}
            >
              <img src={service.image} alt={service.title} className="card-image" />
              <div className="overlay">
                <h1>{service.title}</h1>
                <p>{service.description}</p>

                <span
                  className="read-more-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents navigation
                    setExpandedCard(expandedCard === index ? null : index);
                  }}
                >
                  {expandedCard === index ? 'Show Less' : 'Read More...!'}
                </span>

                {expandedCard === index && (
                  <ul className="service-points">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button className="small-center-btn" onClick={() => setShowAll(true)}>
          See All Services
        </button>
      </div>
    </div>
  );
};

export default Why;
