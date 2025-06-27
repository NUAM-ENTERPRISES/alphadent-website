import About from '../Components/About';
import DentistSection from '../Components/DentistSection';
import Footer from '../Components/Footer';
import Head from '../Components/Head';
import Home from '../Components/Home';

import './Pages.css';
import FadeInSection from '../Components/FadeInSection';

// import Services from '../Components/Services';
// import FAQs from '../Components/FAQs';
// import ContactUs from '../Components/ContactUs';
import Why from '../Components/Why';
const LandingPages = () => {
  return (
    <>
      {/* <Head /> */}
       <FadeInSection direction="up" delay={0}><Home /></FadeInSection>
      <FadeInSection direction="left" delay={100}><About /></FadeInSection>
      <FadeInSection direction="right" delay={200}><Why /></FadeInSection>
      <FadeInSection direction="up" delay={300}><DentistSection /></FadeInSection>
      {/* <Footer /> */}
      {/* 
      <FAQs />
      <ContactUs />
      <Footer /> 
      */}
    </>
  );
};

export default LandingPages;