import React, { useEffect, useRef, useMemo } from 'react';
import './Gallery.css';
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

const Gallery = () => {
  const galleryRef = useRef(null);
  const intervalRef = useRef(null);

  const cards = useMemo(() => [
    { image: aligners, alt: 'Gallery Image 1' },
    { image: healthreview, alt: 'Gallery Image 2' },
    { image: implants, alt: 'Gallery Image 3' },
    { image: general, alt: 'Gallery Image 4' },
    { image: cosmetic, alt: 'Gallery Image 5' },
    { image: pedia, alt: 'Gallery Image 6' },
    { image: surgery, alt: 'Gallery Image 7' },
    { image: whitening, alt: 'Gallery Image 8' },
    { image: lasers, alt: 'Gallery Image 9' },
    { image: rehab, alt: 'Gallery Image 10' },
    { image: rootcanal, alt: 'Gallery Image 11' },
    // { image: img12, alt: 'Gallery Image 12' },
  ], []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const cardWidth = gallery.children[0]?.offsetWidth + 20; // Card width + gap
    let scrollPosition = 0;
    const totalWidth = cardWidth * cards.length;

    const scroll = () => {
      scrollPosition += cardWidth;
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
        gallery.style.transition = 'none';
        gallery.style.transform = `translateX(0px)`;
        setTimeout(() => {
          gallery.style.transition = 'transform 0.5s ease';
        }, 50);
      } else {
        gallery.style.transform = `translateX(-${scrollPosition}px)`;
      }
    };

    intervalRef.current = setInterval(scroll, 3000);

    const pauseScroll = () => clearInterval(intervalRef.current);
    const resumeScroll = () => intervalRef.current = setInterval(scroll, 3000);

    gallery.addEventListener('mouseenter', pauseScroll);
    gallery.addEventListener('mouseleave', resumeScroll);

    return () => {
      clearInterval(intervalRef.current);
      gallery.removeEventListener('mouseenter', pauseScroll);
      gallery.removeEventListener('mouseleave', resumeScroll);
    };
  }, [cards]);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-container">
        <div className="gallery-track" ref={galleryRef}>
          {cards.map((card, index) => (
            <div className="gallery-card" key={index}>
              <img src={card.image} alt={card.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
