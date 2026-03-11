import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeaderNWS from './components/HeaderNWS';
import HeaderREST from './components/HeaderREST';
import { routes, routesWithoutHeader } from './routes';
import './index.css';

function AppContent() {
  const location = useLocation();

  // Scroll naar de top wanneer de route verandert
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Voeg de juiste body-class toe
  useEffect(() => {
    document.body.classList.remove(...document.body.classList);
    const currentRoute = routes.find(route => route.path === location.pathname);
    const pageClass = currentRoute ? currentRoute.name : 'home';
    document.body.classList.add(`${pageClass}-page`);
    document.body.classList.add(pageClass);
  }, [location]);  

  // Bepaal welke header getoond moet worden
  const isNewsOrHomePage = location.pathname === '/' || location.pathname.startsWith('/nieuws/');
  const isAboutPage = location.pathname === '/about';

  const showHeader = !routesWithoutHeader.includes(location.pathname);

  return (
    <>
      {showHeader && (
        isNewsOrHomePage ? <HeaderNWS /> :
        isAboutPage ? <HeaderREST aboutPage={true} /> : <HeaderREST />
      )}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


