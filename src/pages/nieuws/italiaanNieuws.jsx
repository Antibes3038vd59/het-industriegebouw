import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const ItaliaanNieuws = () => {
  // Roep de hooks aan voor animaties
  useCursorAnimation();
  useMenuAnimation();

  // State voor de z-index van afbeeldingen
  const [zIndices, setZIndices] = useState({
    foto1: 1,
    foto2: 2,
    foto3: 3,
  });

  // Ref voor de afbeeldingen
  const foto1Ref = useRef(null);
  const foto2Ref = useRef(null);
  const foto3Ref = useRef(null);

  // Functie om de z-index te updaten bij klik
  const handleImageClick = (imageKey) => {
    setZIndices((prev) => {
      const newZIndices = { ...prev };
      // Verhoog alle z-indices en zet de geklikte afbeelding bovenaan
      Object.keys(newZIndices).forEach((key) => {
        newZIndices[key] = newZIndices[key] + 1;
      });
      newZIndices[imageKey] = Math.max(...Object.values(newZIndices)) + 1;
      return newZIndices;
    });
  };

  // useEffect voor het instellen van de transform-styles
  useEffect(() => {
    const images = [foto1Ref.current, foto2Ref.current, foto3Ref.current];
    images.forEach((image) => {
      if (image) {
        const style = window.getComputedStyle(image);
        const transform = style.transform;
        // Vervang WebKitCSSMatrix door DOMMatrix
        const matrix = new DOMMatrix(transform);
        image.style.setProperty('--tx', `${matrix.e}px`);
        image.style.setProperty('--ty', `${matrix.f}px`);
        image.style.setProperty('--direction', matrix.e > 0 ? '15px' : '-15px');
      }
    });
  }, []);
  

  return (
    <>
      {/* Cursor dots */}
      <div className="dotHome" id="dot1"></div>
      <div className="dotHome" id="dot2"></div>

      {/* Main content */}
      <main>
        <img
          src={`${process.env.PUBLIC_URL}/images/nieuws/italiaan1.jpg`}
          alt="Gusto"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">Gusto breidt uit naar Nederland</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Gusto, het bekende Italiaanse restaurant dat al jarenlang bekend staat om zijn authentieke smaak 
            en warme gastvrijheid, heeft zijn deuren geopend in het hart van Rotterdam. Met deze nieuwe 
            vestiging brengt Gusto de echte Italiaanse keuken naar een van de meest dynamische steden van 
            Nederland. Gasten kunnen zich verheugen op een culinaire reis door Italië, zonder de stad te 
            hoeven verlaten.
          </p>

          <p>
            <br />
            De nieuwe locatie van Gusto in Rotterdam is gevestigd in een sfeervolle en centrale wijk, 
            waardoor het makkelijk bereikbaar is voor zowel lokale bewoners als toeristen. Het interieur 
            van het restaurant is met zorg ontworpen om de charme en warmte van Italië naar Rotterdam te 
            brengen. Warme kleuren, houten meubels en authentieke Italiaanse decoraties creëren een gezellige 
            en ontspannen sfeer, perfect om te genieten van een heerlijk diner met vrienden of familie.
          </p>

          <p>
            <br />
            Het menu van Gusto staat bol van klassieke Italiaanse gerechten, bereid met verse en hoogwaardige 
            ingrediënten. Van traditionele pasta's en pizzas tot verfijnde vis- en vleesgerechten, elk 
            gerecht wordt met liefde en zorg bereid door onze ervaren chefs. Gusto legt grote nadruk op 
            authenticiteit en gebruikt waar mogelijk ingrediënten die rechtstreeks uit Italië komen. 
            Dit zorgt voor een echte Italiaanse smaakervaring die je nergens anders vindt.
          </p>

          <p>
            <br />
            Naast het uitgebreide à-la-carte menu, biedt Gusto ook speciale lunch- en dinerarrangementen 
            aan, perfect voor zowel zakelijke bijeenkomsten als feestelijke gelegenheden. Ons vriendelijke en 
            professionele personeel staat altijd klaar om je te helpen met het plannen van je evenement, zodat 
            je zonder zorgen kunt genieten van een onvergetelijke culinaire ervaring.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/italiaan2.jpg`}
              alt="Gusto"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/italiaan4.jpg`}
              alt="Gusto"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/italiaan3.jpg`}
              alt="Gusto"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />

          </div>

          <p>
            <br />
            Bij Gusto streven we ernaar om elke bezoeker te laten genieten van een culinaire reis die je 
            hart en ziel raakt. Onze passie voor authentieke Italiaanse keuken en onze liefde voor gastvrijheid 
            zorgen ervoor dat elke maaltijd een feest is. Of je nu komt voor een gezellig diner met vrienden of 
            een intiem avondje met je geliefden, wij zorgen ervoor dat je je thuis voelt en je bezoek onvergetelijk 
            blijft.
          </p>

          <p>
            <br />
            Met de opening van deze nieuwe vestiging in Rotterdam, hoopt Gusto nog meer mensen te laten 
            kennismaken met de rijke culinaire tradities van Italië. Of je nu een liefhebber bent van 
            Italiaanse keuken of gewoon op zoek naar een lekker diner, Gusto staat voor je klaar om je 
            te verwelkomen met open armen en een glimlach. Kom langs en ervaar zelf de magie van Gusto 
            in Rotterdam!
          </p>

        </div>
      </main>

      {/* Footer */}
      <footer className="footerNieuws">
        <p>© 2025 Het Industriegebouw</p>
      </footer>
    </>
  );
};

export default ItaliaanNieuws;
