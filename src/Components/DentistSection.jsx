import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DentistSection.css";
import sudeepthi_420x630 from "../assets/sudeepthi_420x630.jpeg";

const DentistSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="dentist-container">
      <div className="dentist-left" data-aos="fade-up">
        <div className="dentist-title-wrapper">
          <span className="dentist-title-faded">YOUR DENTIST</span>
          <span className="dentist-title-bold">Dr Sudeepthi</span>
        </div>
        <p>
          Dr. Sudeepthi Reddy, MDS in Oral medicine and Radiology, a devoted dentist
          with a special interest in delivering high-quality endodontic treatment.
          Her commitment lies in providing exceptional care and ensuring the highest
          standards of dental expertise. Believing in lifelong learning, Sudeepthi
          gained valuable insights into diverse patient needs through experience.
          Committed to staying at the forefront of dental knowledge, demonstrating
          her commitment to providing the best possible care to her patients.
        </p>

        <div className="testimonial-box">
          <span className="quote-icon">❝</span>
          <strong>Sarah S</strong>
          <p>
            <em>
              Dr. Sudeepthi took care of my tooth extraction. My experience was
              tremendously painless, and she made me feel comfortable. I will always
              recommend her.
            </em>
          </p>
        </div>
      </div>

      <div className="dentist-right">
        <div className="image-wrapper">
          <div className="moving-image-wrapper">
          <img
            src={sudeepthi_420x630}
            alt="Dr Sudeepthi"
            className="moving-image"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistSection;
