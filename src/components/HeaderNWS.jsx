import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/headerNWS.css';

const HeaderNWS = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTablet = window.matchMedia('(max-width: 1024px)').matches;
      if (!isTablet) {
        setIsExpanded(window.scrollY > 250);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isHome ? 'home' : 'not-home'}>
      <Link to="/" className={isHome ? 'logoHome' : 'logoAbout'} onClick={scrollToTop}>
        <span>H</span>et <span>I</span>ndustriegebouw
      </Link>
      <div className={`container ${isExpanded ? 'expanded' : ''}`}>
        <Link to="/" className={`circle home ${location.pathname.startsWith('/nieuws/') ? 'active' : ''}`} onClick={scrollToTop}>
          Nieuws
        </Link>
        <Link to="/about" className={`circle about ${location.pathname === '/about' ? 'active' : ''}`} onClick={scrollToTop}>
          About
        </Link>
        <Link to="/huren" className={`circle huren ${location.pathname === '/huren' ? 'active' : ''}`} onClick={scrollToTop}>
          Huren
        </Link>
        <Link to="/contact" className={`circle contact ${location.pathname === '/contact' ? 'active' : ''}`} onClick={scrollToTop}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default HeaderNWS;
