import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DentalCard from '../ServiceComponent/DentalCard';
import Gallery from '../ServiceComponent/Gallery';
import './Spage.css';
import Home from '../Components/Home';
import Sshome from '../ServiceComponent/Sshome';

const Spage = () => {
  const location = useLocation();
  const services = location.state?.services;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Sshome />

      {services && services.length > 0 ? (
       <DentalCard services={services} />
      ) : (
        <div className="no-service">
          <h2>No service data found.</h2>
        </div>
      )}

      <Gallery />
    </>
  );
};

export default Spage;
