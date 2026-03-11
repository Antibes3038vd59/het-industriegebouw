import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const VicoNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/vico4.jpg`}
          alt="Vico Shoes"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">Vico Shoes viert lustrum</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Vico Shoes, een opkomend merk in de schoenenindustrie, viert dit jaar hun eerste lustrum
            in het industriegebouw. Sinds hun oprichting vijf jaar geleden, heeft Vico Shoes zich ontwikkeld
            tot een favoriete bestemming voor schoenenliefhebbers die op zoek zijn naar unieke, hoogwaardige
            ontwerpen. Het merk staat bekend om zijn innovatieve benadering van schoendesign, waarbij elk paar
            schoenen een eigen signatuur draagt.
          </p>

          <p>
            <br />
            Het succes van Vico Shoes is voor een groot deel te danken aan hun unieke ontwerpen.
            Elke schoen wordt met zorg ontworpen door het creatieve team van Vico, dat zich laat inspireren
            door de laatste modetrends en klassieke stijlen. Dit resulteert in schoenen die niet alleen modieus
            zijn, maar ook tijdeloos en duurzaam. De aandacht voor detail en de kwaliteit van de materialen
            zorgen ervoor dat elk paar Vico-schoenen een statement is op zich.
          </p>

          <p>
            <br />
            Wat Vico Shoes verder onderscheidt, is hun productieproces. De schoenen worden met de hand
            gemaakt door ervaren schoenmakers in Portugal. Deze schoenmakers, vaak met jarenlange ervaring,
            brengen hun expertise en passie in elk paar schoenen dat ze maken. Dit traditionele ambacht
            wordt gecombineerd met moderne technieken, waardoor Vico Shoes in staat is om schoenen van
            uitzonderlijke kwaliteit te leveren.
          </p>

          <p>
            <br />
            Het feit dat Vico Shoes hun eerste lustrum viert in het industriegebouw, is een bewijs van
            hun toewijding en succes. Het industriegebouw, een plek die bekend staat om zijn ruwe, industriële
            sfeer, biedt de perfecte achtergrond voor het vieren van dit mijlpaal. Het contrasteert mooi
            met de elegante en gedetailleerde schoenen die Vico produceert, en benadrukt hun unieke positie
            in de markt.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/vico1.jpg`}
              alt="Vico Shoes"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/vico2.jpg`}
              alt="Vico Shoes"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/vico3.jpg`}
              alt="Vico Shoes"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            Bij Vico Shoes streven we ernaar om elke schoen een kunstwerk te maken dat je dagelijks kunt dragen.
            Of je nu op zoek bent naar een modieus statement of een tijdloos klassieker, elke schoen is een perfecte
            combinatie van handwerk, innovatie en esthetiek, gemaakt om te voldoen aan de hoogste verwachtingen van
            onze klanten. Onze toewijding aan het ambacht en onze aandacht voor detail zorgen ervoor dat elk paar
            Vico-schoenen een uniek en waardevol stuk is dat je jarenlang kunt genieten.
          </p>

          <p>
            <br />
            Vico Shoes blijft zichzelf heruitvinden en vernieuwen, terwijl ze trouw blijven aan hun
            oorspronkelijke visie. Met hun eerste lustrum achter de rug, kijkt het merk met vertrouwen uit
            naar de toekomst. Ze blijven geïnspireerd door de wens om schoenen te maken die niet alleen mooi
            zijn, maar ook comfortabel en duurzaam. Met hun oog voor detail en passie voor kwaliteit, is
            Vico Shoes klaar om nog vele jaren schoenenliefhebbers over de hele wereld te blijven inspireren.
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

export default VicoNieuws;
