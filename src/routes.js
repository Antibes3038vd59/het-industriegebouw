// src/routes.js
import Home from './pages/Home';
import About from './pages/About';
import Huren from './pages/Huren';
import Contact from './pages/Contact';
import HurenFormulier from './pages/HurenFormulier';
import GroosNieuws from './pages/nieuws/groosNieuws';
import LunchpauzeNieuws from './pages/nieuws/lunchpauzeNieuws';
import ItaliaanNieuws from './pages/nieuws/italiaanNieuws';
import ChocoholicNieuws from './pages/nieuws/chocoholicNieuws';
import SteenkanNieuws from './pages/nieuws/steenkanNieuws';
import MvrdvNieuws from './pages/nieuws/mvrdvNieuws';
import VicoNieuws from './pages/nieuws/vicoNieuws';
import PlatenspelerNieuws from './pages/nieuws/platenspelerNieuws';
import HeroineNieuws from './pages/nieuws/heroineNieuws';
import LampNieuws from './pages/nieuws/lampNieuws';
import HangerNieuws from './pages/nieuws/hangerNieuws';
import JarmuschNieuws from './pages/nieuws/jarmuschNieuws';
import HuurdersNieuws from './pages/nieuws/huurdersNieuws';
import TuinNieuws from './pages/nieuws/tuinNieuws';

// Array van routes die geen header moeten tonen
export const routesWithoutHeader = [];

// Array van alle routes
export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'home',
  },
  {
    path: '/about',
    element: <About />,
    name: 'about',
  },
  {
    path: '/huren',
    element: <Huren />,
    name: 'huren',
  },
  {
    path: '/formulier',
    element: <HurenFormulier />,
    name: 'hurenFormulier',
  },
  {
    path: '/contact',
    element: <Contact />,
    name: 'contact',
  },
  {
    path: '/nieuws/groosNieuws',
    element: <GroosNieuws />,
    name: 'groosNieuws',
  },
  {
    path: '/nieuws/lunchpauzeNieuws',
    element: <LunchpauzeNieuws />,
    name: 'lunchpauzeNieuws',
  },
  {
    path: '/nieuws/italiaanNieuws',
    element: <ItaliaanNieuws />,
    name: 'italiaanNieuws',
  },
  {
    path: '/nieuws/chocoholicNieuws',
    element: <ChocoholicNieuws />,
    name: 'chocoholicNieuws',
  },
  {
    path: '/nieuws/steenkanNieuws',
    element: <SteenkanNieuws />,
    name: 'steenkanNieuws',
  },
  {
    path: '/nieuws/mvrdvNieuws',
    element: <MvrdvNieuws />,
    name: 'mvrdvNieuws',
  },
  {
    path: '/nieuws/vicoNieuws',
    element: <VicoNieuws />,
    name: 'vicoNieuws',
  },
  {
    path: '/nieuws/platenspelerNieuws',
    element: <PlatenspelerNieuws />,
    name: 'platenspelerNieuws',
  },
  {
    path: '/nieuws/heroineNieuws',
    element: <HeroineNieuws />,
    name: 'heroineNieuws',
  },
  {
    path: '/nieuws/lampNieuws',
    element: <LampNieuws />,
    name: 'lampNieuws',
  },
  {
    path: '/nieuws/hangerNieuws',
    element: <HangerNieuws />,
    name: 'hangerNieuws',
  },
  {
    path: '/nieuws/jarmuschNieuws',
    element: <JarmuschNieuws />,
    name: 'jarmuschNieuws',
  },
  {
    path: '/nieuws/huurdersNieuws',
    element: <HuurdersNieuws />,
    name: 'huurdersNieuws',
  },
  {
    path: '/nieuws/tuinNieuws',
    element: <TuinNieuws />,
    name: 'tuinNieuws',
  },
  // Voeg hier andere routes toe
];
