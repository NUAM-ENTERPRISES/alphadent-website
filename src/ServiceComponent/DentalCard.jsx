import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DentalCard.css';
import defaultImg from '../assets/imgg2.png';
import services from '../Data/services';

// Group cover images
import gp from '../assets/gp.png';
import rest from '../assets/rest.png'
import cos from '../assets/cos.png'
import caree from '../assets/caree.jpg'
const DentalCard = () => {
  const [openGroup, setOpenGroup] = useState(null);
  const navigate = useNavigate();
  const dropdownRefs = useRef([]);

  const toggleGroup = (index) => {
    const alreadyOpen = openGroup === index;
    setOpenGroup(alreadyOpen ? null : index);

    setTimeout(() => {
      const groupElement = document.getElementById(`group-${index}`);
      if (!alreadyOpen && groupElement) {
        groupElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  const handleClick = (service) => {
    navigate(`/service/details/${encodeURIComponent(service.title)}`, {
      state: { service },
    });
  };

  const groupedServices = [
    {
      groupTitle: 'General & Preventive Care',
      coverImage: gp,
      services: services.filter(service =>
        ['Dental Health Review', 'Pediatric Dentistry', 'General Dentistry'].includes(service.title)
      )
    },
    {
      groupTitle: 'Restorative Dentistry',
      coverImage: rest, // Add a real image if available
      services: services.filter(service =>
        ['Painless Root Canal Treatment', 'Dental Implants', 'Full Mouth Rehabilitation','Crowns and Bridges'].includes(service.title)
      )
    },
    {
      groupTitle: 'Cosmetic & Orthodontics',
      coverImage: cos, // Add a real image if available
      services: services.filter(service =>
        ['Aligner (Invisalign Provider)', 'Cosmetic and Smile makeover', 'Teeth Whitening'].includes(service.title)
      )
    },
    {
      groupTitle: 'Surgical & Advanced Care',
      coverImage: caree, // Add a real image if available
      services: services.filter(service =>
        ['Oral Surgery', 'Laser'].includes(service.title)
      )
    }
  ];

  // Manage dynamic height using useEffect
  useEffect(() => {
    dropdownRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openGroup === index) {
          const scrollHeight = ref.scrollHeight;
          ref.style.maxHeight = `${scrollHeight}px`;
        } else {
          ref.style.maxHeight = '0px';
        }
      }
    });
  }, [openGroup]);

  return (
    <div className="dentalcard-wrapper">
      <h2 className="section-heading">Our Services</h2>

      {groupedServices.map((group, index) => (
        <div key={index} id={`group-${index}`}>
          <div
            className="group-card"
            onClick={() => toggleGroup(index)}
            role="button"
            tabIndex={0}
          >
            <img
              src={group.coverImage || defaultImg}
              alt={group.groupTitle}
              className="group-card-img"
            />
            <div className="group-card-overlay">
              <h3 className="group-card-title">{group.groupTitle}</h3>
              <div className={`group-arrow ${openGroup === index ? 'rotate' : ''}`}>⌄</div>
            </div>
          </div>

          <div
            className="dropdown-wrapper"
            ref={(el) => (dropdownRefs.current[index] = el)}
            style={{
              overflow: 'hidden',
              transition: 'max-height 0.6s ease',
            }}
          >
            <div className="dentalcard-grid">
              {group.services.map((service, idx) => (
                <div
                  key={idx}
                  className="dentalcard-flex-card"
                  onClick={() => handleClick(service)}
                >
                  <div className="dentalcard-content">
                    <div className="dentalcard-image">
                      <img
                        src={service.image || defaultImg}
                        alt={service.title}
                        className="dentalcard-left-img"
                      />
                    </div>
                    <div className="dentalcard-text">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <button
                        className="read-more-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick(service);
                        }}
                      >
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DentalCard;
