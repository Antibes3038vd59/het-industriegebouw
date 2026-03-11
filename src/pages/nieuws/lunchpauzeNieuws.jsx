import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const LunchpauzeNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/lunchpauze3.jpg`}
          alt="Lunchpauze"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">lunchen met uitzicht over de stad</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Tijen is een uniek bedrijf dat zich specialiseert in het verzorgen van zakelijke en feestelijke 
            lunches op een bijzondere locatie: de hoogste verdieping van een indrukwekkend industriegebouw. 
            Dit gebouw, met zijn ruime ruimtes en industriële charme, biedt een perfect decor voor elke 
            gelegenheid. Of het nu gaat om een zakelijke bijeenkomst of een feestelijke lunch, Tijen zorgt 
            ervoor dat elk detail perfect is afgestemd op de wensen van de klant.
          </p>

          <p>
            <br />
            De hoogste verdieping van het industriegebouw biedt een adembenemend uitzicht over de stad. 
            Dit panorama creëert een sfeer van luxe en exclusiviteit, wat elke lunch tot een onvergetelijke 
            ervaring maakt. Tijen maakt optimaal gebruik van deze locatie door zorgvuldig gekozen decoraties 
            en een verfijnde inrichting die aansluit bij het industriële karakter van het gebouw. Dit zorgt 
            voor een perfecte balans tussen moderniteit en authenticiteit.
          </p>

          <p>
            <br />
            Het culinaire aanbod van Tijen staat synoniem voor kwaliteit en smaak. Onze ervaren chefs 
            creëren gerechten die zowel visueel als culinair verleiden. Of het nu gaat om lichte, verse 
            lunches of uitgebreide maaltijden, elk gerecht wordt met zorg en aandacht voor detail bereid. 
            Tijen werkt waar mogelijk met lokale en verse ingrediënten, wat resulteert in een menu dat 
            zowel gezond als smakelijk is.
          </p>

          <p>
            <br />
            Naast de culinaire ervaring, legt Tijen grote nadruk op service en gastvrijheid. Ons team 
            staat klaar om elke gast met open armen te ontvangen en zorgt ervoor dat iedereen zich thuis voelt. 
            Of het nu gaat om het serveren van drankjes, het regelen van extra wensen of het bieden van advies 
            over de perfecte wijnkeuze, Tijen zorgt ervoor dat alles soepel verloopt. Dit maakt dat klanten zich 
            volledig kunnen ontspannen en genieten van hun lunch.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/lunchpauze4.jpg`}
              alt="Lunchpauze"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/lunchpauze2.jpg`}
              alt="Lunchpauze"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/lunchpauze1.jpg`}
              alt="Lunchpauze"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />

          </div>

          <p>
            <br />
            Bij Tijen streven we ernaar om elke lunch tot een onvergetelijke ervaring te maken. 
            Onze passie voor perfectie en aandacht voor detail zorgen ervoor dat elk moment bij ons een 
            feestje is. Of je nu komt voor een zakelijke bijeenkomst of een feestelijke lunch, wij zorgen 
            ervoor dat je je bijzonder voelt en je bezoek onvergetelijk blijft.
          </p>

          <p>
            <br />
            Tijen is trots op de flexibiliteit en aanpasbaarheid die het biedt. Of het nu gaat om een 
            intieme lunch voor een kleine groep of een groot feest voor honderden gasten, Tijen past zich 
            aan aan elke situatie. Met onze ervaring en expertise zorgen we ervoor dat elke lunch precies zo 
            wordt als de klant zich dat voorstelt. Of het nu gaat om een zakelijke presentatie, een 
            verjaardagsfeest of een bruiloft, Tijen maakt van elke gelegenheid een onvergetelijk moment.
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

export default LunchpauzeNieuws;
