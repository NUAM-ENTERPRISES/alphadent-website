// ServiceSection.jsx
import React from 'react';
import './Why.css'
import whyus from '../assets/whyus.jpg';
import aligners from '../assets/aligners.jpg';
import general from '../assets/general.jpg';
import cosmetic from '../assets/cosmetic.jpg';
const services = [
  {
    title: 'Aligners',
    description: 'Straighten your teeth discreetly with clear aligners.',
    image: aligners
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle and fun dental care for your little ones.',
    image: whyus
  },
  {
    title: 'General Dentistry',
    description: 'Routine check-ups and cleanings for a healthy smile.',
    image: general
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with whitening and veneers.',
    image: cosmetic
  },
  {
    title: 'Oral Surgery',
    description: 'Expert surgical care for complex dental issues.',
    image: '/images/service5.jpg'
  },
  {
    title: 'Orthodontics',
    description: 'Braces and other solutions to align your teeth.',
    image: '/images/service6.jpg'
  },
  {
    title: 'Orthodontics',
    description: 'Braces and other solutions to align your teeth.',
    image: '/images/service6.jpg'
  }
];

const Why = () => {
  return (
    <div className="service-slider">
      <div className="service-track">
        {[...services, ...services].map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="card-image" />
            <div className="overlay">
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <a href="#" className="read-more-btn">Read More...!</a>
            </div>
          </div>
        ))}
      </div>
      {/* Centered small button below cards */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button className="small-center-btn">See All Services</button>
      </div>
    </div>
  );
};

export default Why;
