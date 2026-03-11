import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/headerREST.css';

const HeaderREST = ({ aboutPage }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Huren is actief op /huren en /formulier (en subroutes)
  const isHurenRelated =
    location.pathname.startsWith('/huren') ||
    location.pathname.startsWith('/formulier');

  return (
    <header className={aboutPage ? 'about' : ''}>
      <Link to="/" className={isHome ? 'logoHome' : aboutPage ? 'logoAbout' : 'logoRest'} onClick={scrollToTop}>
        <span>H</span>et <span>I</span>ndustriegebouw
      </Link>

      <div className="containerRest">
        <Link to="/" className={`circleRest ${location.pathname.startsWith('/nieuws/') ? 'active' : ''}`} onClick={scrollToTop}>
          Nieuws
        </Link>

        <Link to="/about" className={`circleRest about ${location.pathname.startsWith('/about') ? 'active' : ''}`} onClick={scrollToTop}>
          About
        </Link>

        <Link to="/huren" className={`circleRest huren ${isHurenRelated ? 'active' : ''}`} onClick={scrollToTop}>
          Huren
        </Link>

        <Link to="/contact" className={`circleRest contact ${location.pathname.startsWith('/contact') ? 'active' : ''}`} onClick={scrollToTop}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default HeaderREST;
