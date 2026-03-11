import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const HuurdersNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/huurders3.jpg`}
          alt="Huurders"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">wachtlijst voor nieuwe huurders</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            De groeiende wachtlijst voor nieuwe huurders voor Het IndustrieGebouw, een dynamisch complex
            in het hart van de stad, is een duidelijke indicatie van de toenemende vraag naar multifunctionele
            ruimtes. Dit industriegebouw, dat een gevarieerde collectie van winkels, horecagelegenheden en
            bedrijven herbergt, trekt steeds meer ondernemers aan die op zoek zijn naar een centrale locatie
            om hun activiteiten uit te breiden of te verplaatsen.
          </p>

          <p>
            <br />
            De toename van het aantal bedrijven dat zich wil vestigen in Het IndustrieGebouw kan worden
            toegeschreven aan verschillende factoren. Enerzijds biedt het gebouw moderne faciliteiten die
            voldoen aan de hoogste standaarden van duurzaamheid en energie-efficiëntie. Anderzijds zijn de
            flexibele huurovereenkomsten en concurrerende huurprijzen zeer aantrekkelijk voor zowel startende
            als gevestigde ondernemingen.
          </p>

          <p>
            <br />
            De wachtlijst bestaat uit een divers spectrum aan bedrijven, variërend van retailers en
            horeca-ondernemingen tot innovatieve start-ups en technologiebedrijven. Deze diversiteit draagt
            bij aan een dynamische en synergetische bedrijfsomgeving, waar bedrijven kunnen profiteren van
            elkaars aanwezigheid en samenwerken op verschillende niveaus.
          </p>

          <p>
            <br />
            De beheerders van Het IndustrieGebouw staan voor de uitdaging om de groeiende vraag te
            bevredigen zonder de kwaliteit en service te verminderen. Ze werken hard om de beschikbare
            ruimtes optimaal te benutten en nieuwe ruimtes te ontwikkelen om aan de behoeften van toekomstige
            huurders te voldoen. Dit omvat niet alleen het bouwen van nieuwe gebouwen, maar ook het aanpassen
            en moderniseren van bestaande faciliteiten.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/huurders4.jpg`}
              alt="Huurders"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/huurders2.jpg`}
              alt="Huurders"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/huurders1.jpg`}
              alt="Huurders"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            De lokale overheid speelt ook een cruciale rol in het faciliteren van deze groei. Door middel
            van gunstige regelgeving, subsidies en investeringen in infrastructuur ondersteunen ze de
            ontwikkeling van Het IndustrieGebouw. Dit maakt het niet alleen aantrekkelijker voor nieuwe bedrijven,
            maar draagt ook bij aan de economische groei en werkgelegenheid in de stad.
          </p>

          <p>
            <br />
            De groeiende wachtlijst voor nieuwe huurders is een positief teken voor de toekomst van
            Het IndustrieGebouw. Het toont aan dat het gebied een belangrijke rol speelt in de economische
            dynamiek van de stad en dat het een gewilde locatie is voor bedrijven die willen groeien en innoveren.
            Met de juiste strategieën en investeringen kan het IndustrieGebouw blijven floreren en een
            belangrijke bijdrage leveren aan de lokale economie.
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

export default HuurdersNieuws;
