import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import useCursorAnimation from '../hooks/useCursorAnimation';
import useMenuAnimation from '../hooks/useMenuAnimation';
import useImageAnimation from '../hooks/useImageAnimation';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Home = () => {
  // Roep de hooks aan
  useCursorAnimation();
  useMenuAnimation();
  useImageAnimation();
  useIntersectionObserver();

  return (
    <>
      {/* Voeg de cursor dots toe */}
      <div className="dotHome" id="dot1"></div>
      <div className="dotHome" id="dot2"></div>

      {/* Main content */}
      <main>
        <Link to="/nieuws/groosNieuws">
          <div className="scroll-container">
            <div className="image-container">
              <img src={`${process.env.PUBLIC_URL}/images/nieuws/groos4.jpg`} alt="Groos" className="image first-image" />
              <img src={`${process.env.PUBLIC_URL}/images/nieuws/groos3.jpg`} alt="Groos" className="image second-image" />
              <img src={`${process.env.PUBLIC_URL}/images/nieuws/groos4.jpg`} alt="Groos" className="image third-image" />
              <img src={`${process.env.PUBLIC_URL}/images/nieuws/groos3.jpg`} alt="Groos" className="image fourth-image" />
            </div>
          </div>
          <h1 className="mainTekst1">Groos neemt intrek in nieuw onderkomen</h1>
        </Link>

        {/* Overig nieuws */}
        <div className="wrapperOverigNieuws">
          <div className="wrapperNieuwsKlein">
            {/* NWS 2x klein onder nieuws main */}
            <div className="wrapper">
              <Link to="/nieuws/lunchpauzeNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/lunchpauze3.jpg`} alt="Lunchpauze" className="fotoNieuws1 from-left" />
                <h2 className="nieuwsKopTekst1 from-left">lunchen met uitzicht over de stad</h2>
              </Link>
              <Link to="/nieuws/italiaanNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/italiaan1.jpg`} alt="Italiaan" className="fotoNieuws1 from-right" />
                <h2 className="nieuwsKopTekst1 from-right">Gusto breidt uit naar Nederland</h2>
              </Link>
            </div>
            {/* NWS 2x klein onder nieuws main */}
            <div className="wrapper">
              <Link to="/nieuws/chocoholicNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/chocola1.jpg`} alt="Chocoholic" className="fotoNieuws1 from-left" />
                <h2 className="nieuwsKopTekst1 from-left">chocolademaker opent winkel</h2>
              </Link>
              <Link to="/nieuws/steenkanNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/steen3.jpg`} alt="Steen" className="fotoNieuws1 from-right" />
                <h2 className="nieuwsKopTekst1 from-right">stenen hoes voor thermosfles</h2>
              </Link>
            </div>
            {/* NWS main verderop pagina */}
            <div className="wrapper no-animation">
              <Link to="/nieuws/mvrdvNieuws">
                <div className="scroll-container-klein">
                  <div className="image-container-klein">
                    <img src={`${process.env.PUBLIC_URL}/images/nieuws/mvrdv1.jpg`} alt="MVRDV" className="image-klein first-image-klein" />
                    <img src={`${process.env.PUBLIC_URL}/images/nieuws/mvrdv5.jpg`} alt="MVRDV" className="image-klein second-image-klein" />
                    <img src={`${process.env.PUBLIC_URL}/images/nieuws/mvrdv1.jpg`} alt="MVRDV" className="image-klein third-image-klein" />
                    <img src={`${process.env.PUBLIC_URL}/images/nieuws/mvrdv5.jpg`} alt="MVRDV" className="image-klein fourth-image-klein" />
                  </div>
                </div>
                <h1 className="mainKopTekst2">MVRDV in een klap grootste huurder</h1>
              </Link>
            </div>
            {/* NWS 2x klein verderop pagina */}
            <div className="wrapper">
              <Link to="/nieuws/vicoNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/vico4.jpg`} alt="Vico Shoes" className="fotoNieuws1 from-left" />
                <h2 className="nieuwsKopTekst1 from-left">Vico Shoes viert lustrum</h2>
              </Link>
              <Link to="/nieuws/platenspelerNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/elpee1.jpg`} alt="Platenspeler" className="fotoNieuws1 from-right" />
                <h2 className="nieuwsKopTekst1 from-right">draagbare platenspeler</h2>
              </Link>
            </div>
            {/* NWS 2x klein verderop pagina */}
            <div className="wrapper">
              <Link to="/nieuws/heroineNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/heroine2.jpg`} alt="Heroine" className="fotoNieuws1 from-left" />
                <h2 className="nieuwsKopTekst1 from-left">dineren met Franse flair</h2>
              </Link>
              <Link to="/nieuws/lampNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/lamp1.jpg`} alt="Lumen" className="fotoNieuws1 from-right" />
                <h2 className="nieuwsKopTekst1 from-right">mobiel licht van VORM</h2>
              </Link>
            </div>
            {/* NWS 2x klein verderop pagina */}
            <div className="wrapper">
              <Link to="/nieuws/hangerNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/hanger1.jpg`} alt="Hanger" className="fotoNieuws1 from-left" />
                <h2 className="nieuwsKopTekst1 from-left">lichtgevende hanger</h2>
              </Link>
              <Link to="/nieuws/jarmuschNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/jarmusch3.jpg`} alt="Jarmusch" className="fotoNieuws1 from-right" />
                <h2 className="nieuwsKopTekst1 from-right">ontbijt voor fijnproevers</h2>
              </Link>
            </div>
            {/* NWS 2x klein verderop pagina */}
            <div className="wrapper">
              <Link to="/nieuws/huurdersNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/huurders3.jpg`} alt="Huurders" className="fotoNieuws1 from-left" />
                <h2 className="nieuwsKopTekst1 from-left">wachtlijst voor nieuwe huurders</h2>
              </Link>
              <Link to="/nieuws/tuinNieuws">
                <img src={`${process.env.PUBLIC_URL}/images/nieuws/tuin3.jpg`} alt="Binnenplaats" className="fotoNieuws1 from-right" />
                <h2 className="nieuwsKopTekst1 from-right">vergroening binnenplaats gereed</h2>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footerHome">
        <p>© 2025 Het Industriegebouw</p>
      </footer>
    </>
  );
};

export default Home;


