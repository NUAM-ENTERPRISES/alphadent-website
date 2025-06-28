import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DentalCard from '../ServiceComponent/DentalCard';
import Gallery from '../ServiceComponent/Gallery';
import './Spage.css';
import Sshome from '../ServiceComponent/Sshome';
import servicesData from '../Data/services';  // ✅ Optional: Fallback data

const Spage = () => {
  const location = useLocation();
  const services = location.state?.services || servicesData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Sshome />

      <DentalCard services={services} />   {/* ✅ Always render DentalCard with data */}

      <Gallery />
    </>
  );
};

export default Spage;
