import { useEffect } from "react";
import "./AboutUs.css";

const AboutUs = () => {
   useEffect(() => {
      // Scroll to top when the component mounts
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <section className="about-wrapper" id="about">
      <h4 className="about-subtitle">About us</h4>
      <h1 className="about-title">Welcome to Alphadent Multispeciality Dental Care</h1>

      <div className="about-card">
        <p>
          Your premier destination for quality dental care. Our team of experienced and
          compassionate dental professionals are dedicated to providing personalized and gentle
          dental services to our patients.
        </p>
        <p>
          Alphadent is your ideal destination for everything Dentistry in Hyderabad. We offer
          world-class dental care and cutting-edge technology to provide you with the treatment
          you deserve. We are home to award-winning dentists, experienced professional dentists
          that provide you with exceptional comprehensive dental care, painless treatments, and
          special emphasis on anxiety-free dental care.
        </p>
        <p>
          We specialize in kids dentistry, restorative, cosmetic, laser, aligners, and advanced
          dental implant treatments. We pride ourselves on providing personalized care in a
          comfortable, patient-friendly environment, where your unique dental needs are addressed
          with expertise & compassion.
        </p>
        <p>
          Widely regarded as one of the best dental clinics in Hyderabad, our Dental Clinic is committed to cutting-edge technology and digital advancements in dental care. By leveraging high-tech equipment, the clinic not only enhances operational efficiency but also upholds the highest standards of clinical dentistry. We meticulously plan and execute 100% digital treatment protocols, delivering exceptional clinical results that promote overall well-being and long-term dental health.
        </p>
        <p>
          
More than just a dental clinic, Alphadent is an experience that redefines what you might expect from a trip to the dentist. It's where technology meets compassion to deliver an outstanding dental experience. Located in Hyderabad, the Alphadent dental care is an ideal destination for anyone seeking world-class dental care in a comfortable, stress-free environment. Choose Alphadent for your oral health needs and experience the difference that exceptional care can make.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
