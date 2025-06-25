import React, { useEffect, useRef, useMemo } from 'react';
import './Gallery.css';
import imgg2 from '../assets/imgg2.png'; // Replace with your actual image path
const placeholderImage = 'https://via.placeholder.com/250'; // Fallback image

const Gallery = () => {
  const galleryRef = useRef(null);
  const intervalRef = useRef(null);
  const cards = useMemo(() => Array(8).fill({ image: imgg2 || placeholderImage, alt: 'Gallery Image' }), []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) {
      console.log('Gallery ref is null');
      return;
    }

    // Wait for images to load and DOM to stabilize
    const initializeScroll = () => {
      if (!gallery.children[0]) {
        console.log('No children found in gallery');
        return;
      }

      const cardWidth = gallery.children[0].offsetWidth + 20; // Card width + gap
      if (cardWidth <= 20) {
        console.log('Card width is invalid:', cardWidth);
        return;
      }

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
            console.log('Reset scroll position');
          }, 50);
        } else {
          gallery.style.transform = `translateX(-${scrollPosition}px)`;
          console.log('Scrolling to:', scrollPosition);
        }
      };

      // Start scrolling
      intervalRef.current = setInterval(scroll, 3500);
      console.log('Interval started');

      // Pause on hover
      const handleMouseEnter = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          console.log('Scroll paused');
        }
      };

      const handleMouseLeave = () => {
        intervalRef.current = setInterval(scroll, 3500);
        console.log('Scroll resumed');
      };

      gallery.addEventListener('mouseenter', handleMouseEnter);
      gallery.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        gallery.removeEventListener('mouseenter', handleMouseEnter);
        gallery.removeEventListener('mouseleave', handleMouseLeave);
        console.log('Interval and listeners cleaned up');
      };
    };

    // Delay initialization to ensure DOM is ready
    const timeout = setTimeout(initializeScroll, 100);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cards]);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-container">
        <div className="gallery-track" ref={galleryRef}>
          {cards.map((card, index) => (
            <div className="gallery-card" key={index}>
              <img src={card.image} alt={card.alt} className="gallery-image" onError={() => console.log(`Image failed to load: ${card.image}`)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;