import React, { useEffect, useState } from 'react';
import './Why.css';
import { useNavigate } from 'react-router-dom';

// Image imports
import aligners from '../assets/aligners.jpg';
import healthreview from '../assets/healthreview.jpg';
import implants from '../assets/implants-.jpg';
import general from '../assets/general.jpg';
import cosmetic from '../assets/cosmetic.jpg';
import pedia from '../assets/pedia.jpg';
import surgery from '../assets/surgery.jpg';
import whitening from '../assets/whitening.jpg';
import lasers from '../assets/lasers.jpg';
import rehab from '../assets/rehab.jpg';
import rootcanal from '../assets/rootcanal.jpg';
import D1 from '../assets/D1.jpg';
import D2 from '../assets/D2.jpg';
import dhealth from '../assets/dhealth.png';
import D3 from '../assets/D3.jpg';
import i1 from '../assets/i1.jpg';
import i3 from '../assets/i3.jpg';
import i4 from '../assets/i4.jpg';
import i5 from '../assets/i5.jpg';

const services = [
  {
    title: 'Dental Health Review',
    description: 'Prevention is key to maintaining optimal oral health!',
    image: healthreview,
    details: {
      heading: 'About Dental Health Review',
      betweenImage: dhealth,
      subSections: [
        { subheading: 'Comprehensive Checkup', paragraph: 'At Alphadent dental clinic, prevention is key...' },
        { subheading: 'Benefits Of A Regular Dental Health Review', paragraph: 'Early Detection, Personalised Treatment...' },
        { subheading: 'Dental Health Review Price List', paragraph: 'New Patient Consultation (Adult): Rs 300' }
      ],
      galleryImages: [D1, D2, D3],
      faq: [
        { question: 'What is a dental health review?', answer: 'A comprehensive checkup evaluating your oral health.' },
        { question: 'How often should I get a dental health review?', answer: 'At least once every 6 months.' }
      ],
    }
  },
  {
    title: 'Dental Implants',
    description: 'Replace missing teeth with lasting solutions.',
    image: implants,
    details: {
      heading: 'About Dental Implants',
      betweenImage: i4,
      subSections: [
        { subheading: 'Dental Implants', paragraph: 'Perfect solution for missing teeth.' },
        { subheading: 'Benefits', paragraph: 'Improved appearance, comfort, and eating.' }
      ],
      galleryImages: [i1, i3, i5],
      faq: [
        { question: 'What is a dental implant?', answer: 'A titanium post placed in the jawbone.' },
        { question: 'How long do they last?', answer: 'Typically 10-15 years or more.' }
      ]
    }
  },
  { title: 'General Dentistry', description: 'Comprehensive dental services.', image: general },
  { title: 'Cosmetic and Smile makeover', description: 'Crafting Your Dream Smile.', image: cosmetic },
  { title: 'Oral Surgery', description: 'Comfort-focused oral surgery.', image: surgery },
  { title: 'Aligner (Invisalign Provider)', description: 'Straighten teeth invisibly.', image: aligners },
  { title: 'Pediatric Dentistry', description: 'Dental Care for Kids.', image: pedia },
  { title: 'Teeth whitening', description: 'Bring back your smile sparkle.', image: whitening },
  { title: 'Laser', description: 'Advanced laser dental treatments.', image: lasers },
  { title: 'Full Mouth Rehabilitation', description: 'Full Smile Restoration.', image: rehab },
  { title: 'Painless root canal treatment', description: 'Pain-free root canals.', image: rootcanal }
];

const Why = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const heading = document.querySelector('.section-heading');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (heading) observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (service) => {
    navigate(`/service/details/${encodeURIComponent(service.title)}`, {
      state: { service },
    });
  };

  return (
    <div>
      <h4 className="sectionhead">what we do</h4>
      <h1 className="section-heading">Our Services</h1>

      {showAll ? (
        <div>
          {/* Full Grid View */}
          <div className="full-service-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid-service-card"
                onClick={() => handleServiceClick(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleServiceClick(service); }}
              >
                <img src={service.image} alt={service.title} className="grid-card-image" />
                <div className="grid-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            ))}
          </div>

          {/* Hide Services Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              className="small-center-btn"
              onClick={() => {
                setShowAll(false);
                setTimeout(() => {
                  const section = document.getElementById('service');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Hide Services
            </button>
          </div>
        </div>
      ) : (
        <div className="service-slider" id="service">
          <div className="service-track">
            {services.slice(0, 5).map((service, index) => (
              <div
                key={index}
                className="service-card"
                role="button"
                tabIndex={0}
                onClick={() => handleServiceClick(service)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleServiceClick(service); }}
              >
                <img src={service.image} alt={service.title} className="card-image" />
                <div className="overlay">
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                  <span className="read-more-btn">Read More...!</span>
                </div>
              </div>
            ))}
          </div>
          {/* See All Services Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button className="small-center-btn" onClick={() => setShowAll(true)}>
              See All Services
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Why;
