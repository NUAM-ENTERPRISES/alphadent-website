import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DentalCard from '../ServiceComponent/DentalCard';
import Gallery from '../ServiceComponent/Gallery';
import './Spage.css';
import Head from '../Components/Head';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
const Spage = () => {
    const location = useLocation();
    const service = location.state?.service;
    // Scroll to top on every route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
      
            <Home />
            <DentalCard service={service} />
            <Gallery />

        </>
    );
};

export default Spage;