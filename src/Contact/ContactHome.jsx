import React, { useState, useEffect } from 'react';
import './ContactHome.css';
import video1 from '../assets/video/video1.mp4';
import video2 from '../assets/video/video2.mp4';
import video3 from '../assets/video/video3.mp4';
import video4 from '../assets/video/video4.mp4';

const ContactHome = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = 4; // Total number of slides

  const plusSlides = (n) => {
    setSlideIndex((prev) => {
      let newIndex = prev + n;
      if (newIndex > totalSlides) newIndex = 1;
      if (newIndex < 1) newIndex = totalSlides;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [slideIndex]);

  return (
    <div className="main-content" id='hero'>
      {/* Shared content for all slides */}
      <div className="shared-content">
        <h1>Alphadent</h1>
        <h2>Contact Us</h2>
      </div>

      {/* Slide container */}
      <div className="slide-container">
        {/* Slide 1 */}
        <div className="slide" style={{ transform: `translateX(${(0 - (slideIndex - 1)) * 100}%)` }}>
          <video autoPlay muted loop>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Slide 2 */}
        <div className="slide" style={{ transform: `translateX(${(1 - (slideIndex - 1)) * 100}%)` }}>
          <video autoPlay muted loop>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Slide 3 */}
        <div className="slide" style={{ transform: `translateX(${(2 - (slideIndex - 1)) * 100}%)` }}>
          <video autoPlay muted loop>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Slide 4 */}
        <div className="slide" style={{ transform: `translateX(${(3 - (slideIndex - 1)) * 100}%)` }}>
          <video autoPlay muted loop>
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Navigation dots (bottom center) */}
      <div className="nav-btns bottom-center">
        <div
          className={`nav-btn ${slideIndex === 1 ? 'active' : ''}`}
          onClick={() => currentSlide(1)}
        ></div>
        <div
          className={`nav-btn ${slideIndex === 2 ? 'active' : ''}`}
          onClick={() => currentSlide(2)}
        ></div>
        <div
          className={`nav-btn ${slideIndex === 3 ? 'active' : ''}`}
          onClick={() => currentSlide(3)}
        ></div>
        <div
          className={`nav-btn ${slideIndex === 4 ? 'active' : ''}`}
          onClick={() => currentSlide(4)}
        ></div>
      </div>

      {/* Left and Right navigation buttons */}
      <div className="nav-btns left-center">
        <div
          className={`nav-btn ${slideIndex === 1 ? 'active' : ''}`}
          onClick={() => plusSlides(-1)}
        ></div>
      </div>
      <div className="nav-btns right-center">
        <div
          className={`nav-btn ${slideIndex === 4 ? 'active' : ''}`}
          onClick={() => plusSlides(1)}
        ></div>
      </div>
    </div>
  );
};

export default ContactHome;