import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DentalCard.css';
import imgg2 from '../assets/imgg2.png';

const DentalCard = ({ service }) => {
  
  const navigate = useNavigate();

  const title = service?.title || 'Dental Implants';
  const description = service?.description || "When searching for a dentist near you for tooth replacement options, it's important to find a dentist's office that is familiar with dental implants. At Concord Dental Associates, we’ve been providing patients with dental restorations in Concord, NH, for a long time.";
  const image = service?.image || imgg2;
  const descriptions = service?.descriptions || "These are some of the dental implants we offer: Braces, crowns, and bridge implants. These options can help you achieve a healthy smile and improve your oral health.";

  const handleReadMoreClick = () => {
    navigate(`/service/details/${encodeURIComponent(service.title)}`, {
      state: { service },
    });
  };


  return (
    <div
      className="dental-card-container"
      onClick={handleReadMoreClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleReadMoreClick(); }}
      style={{ cursor: 'pointer' }}
    >
      <img src={image} alt={title} className="dental-card-image" />
      <div className="dental-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {descriptions && <p>{descriptions}</p>}
        <button
          onClick={(e) => {
            e.stopPropagation();  // Stop bubbling to avoid double navigation
            handleReadMoreClick();
          }}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default DentalCard;
