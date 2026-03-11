import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const VormNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/lamp1.jpg`}
          alt="lamp"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">mobiel licht van VORM</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Studio Vorm, gevestigd in het Industriegebouw, introduceert de Bloomlight S, een
            responsief lichtobject speciaal ontworpen voor huiskamers. Dit unieke stuk buigt subtiel
            en ontvouwt zich in reactie op beweging in de nabijheid, waardoor een moment van interactie
            ontstaat door aanwezigheid, licht en beweging, zonder dat er apps of interfaces nodig zijn.
          </p>

          <p>
            <br />
            In plaats van te reageren op geluid of spraakcommando's, reageert de Bloomlight S op nabijheid
            en gebaren. Wanneer iemand nadert of in de buurt gaat zitten, helt het licht zachtjes en opent
            het zich, lijkend op een bloem die zich richt naar het zonlicht. De Bloomlight S zet het onderzoek
            van Studio Vorm naar Slowtech voort, een ontwerpphilosophie die vertraging en reflectie boven
            efficiëntie stelt. In tegenstelling tot conventionele slimme apparaten die zich richten op
            functionaliteit, benadrukt dit stuk aanwezigheid. Het blijft inactief op de achtergrond totdat
            het door menselijke nabijheid wordt geactiveerd, en reageert zonder verdere interactie aan te
            moeten vragen.
          </p>

          <p>
            <br />
            Het object wordt met de hand geassembleerd in het atelier van Studio Vorm in het Industriegebouw
            en vertegenwoordigt het eerste product van de studio dat bedoeld is voor residentiële omgevingen.
            Het heeft een sensor-gebaseerde activatie, werkt onafhankelijk van WiFi of mobiele applicaties
            en straalt een zacht 2700K licht uit. De materialen omvatten aluminium, glasvezel, staalkabel,
            ASA en aangepaste elektronica. Het ontwerp legt de nadruk op duurzaamheid en langetermijngebruik.
          </p>

          <p>
            <br />
            Bij Studio Vorm streven we ernaar om elk ontwerp te laten stralen van innovatie en schoonheid.
            Onze passie voor duurzaamheid en interactieve kunst zorgt ervoor dat elk stuk een uniek verhaal vertelt.
            Of je nu op zoek bent naar een functioneel kunstwerk of een verfijnd designobject, wij zorgen ervoor
            dat je een stuk krijgt dat je hartje blijft warmen en je ruimte verrijkt.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/lamp4.jpg`}
              alt="lamp"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/lamp2.jpg`}
              alt="lamp"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/lamp3.jpg`}
              alt="lamp"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            De eerste editie, beperkt tot 100 genummerde en gesigneerde exemplaren, zal worden gepresenteerd
            tijdens een studio-evenement op 18 juni 2025. De eerste 25 kopers worden uitgenodigd voor een
            privédiner, georganiseerd in de studio door cultureel curator Yuki Kho. De Bloomlight S
            functioneert niet als een conventionele lamp, maar als een responsief object dat terugkeert
            naar stilte in de afwezigheid van menselijke aanwezigheid.
          </p>

          <p>
            <br />
            Het Industriegebouw, waar Studio Vorm zowel hun atelier als winkel heeft, biedt de perfecte
            setting voor dit innovatieve ontwerp. De ruime, industriële ruimte met zijn hoge plafonds en
            natuurlijk licht creëert een ideale omgeving voor het presenteren van de Bloomlight S. De
            combinatie van historisch erfgoed en moderne creativiteit zorgt voor een unieke sfeer die de
            essentie van het lichtobject benadrukt. Met de introductie van de Bloomlight S hoopt Studio
            Vorm een nieuwe standaard te zetten voor interactieve en duurzame ontwerpen in huishoudelijke
            omgevingen.
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

export default VormNieuws;
