import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from './Pages/LandingPages';
import Spage from './ServiceLand/Spage';
import Head from './Components/Head';
import Footer from './Components/Footer';
import Abouts from './AboutLand/Abouts';
import Faqs from './FaqLand/Faqs';
import Land from './Contactland/Land';
import BookLand from './BookLand/BookLand';
import Confirmation from './Book/Confirmation';
import Sland from './Sland/Sland';
import DentalCard from './ServiceComponent/DentalCard'; // ✅ NEW
function App() {
  return (
    <Router>
      <Head />
     <Routes>
  <Route path="/" element={<LandingPages />} />
  <Route path="/about" element={<Abouts />} />
  <Route path="/faqs" element={<Faqs />} />
  <Route path="/contact" element={<Land />} />
  <Route path="/book-appointment" element={<BookLand />} />
  <Route path="/confirmation" element={<Confirmation />} />
  <Route path="/service/details/:title" element={<Sland />} />
  <Route path="/services" element={<Spage />} />
</Routes>
      <Footer />
    </Router>
  );
}

export default App;
