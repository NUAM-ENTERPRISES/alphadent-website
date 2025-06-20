import About from '../Components/About';
import DentistSection from '../Components/DentistSection';
import Footer from '../Components/Footer';
import Head from '../Components/Head';
import Home from '../Components/Home';
import Why from '../Components/Why';

import './Pages.css';

// import Services from '../Components/Services';
// import FAQs from '../Components/FAQs';
// import ContactUs from '../Components/ContactUs';

const LandingPages = () => {
  return (
    <>
      <Head />
      <Home />
      <About />
      <Why />
      <DentistSection />
      <Footer />
      {/* 
      <FAQs />
      <ContactUs />
      <Footer /> 
      */}
    </>
  );
};

export default LandingPages;