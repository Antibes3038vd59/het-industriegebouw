import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const HangerNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/hanger1.jpg`}
          alt="Lumen"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">lichtgevende hanger</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Lumen, een innovatief merk op het gebied van interieurdesign, heeft recentelijk een revolutionaire
            lamp met hanger geïntroduceerd die perfect integreert in elke moderne woning. Dit unieke ontwerp
            combineert functioneel licht met esthetische hangoplossingen, waardoor het een waardevolle toevoeging
            is aan elke ruimte.
          </p>

          <p>
            <br />
            De lamp en hanger van Lumen zijn geglazuurd, wat hen niet alleen een strakke en moderne uitstraling
            geeft, maar ook praktische voordelen biedt. Het glazuur zorgt ervoor dat de lamp en hanger makkelijk
            schoon te houden zijn en bestand tegen vocht, wat hen ideaal maakt voor gebruik in vochtige omgevingen
            zoals badkamers en keukens.
          </p>

          <p>
            <br />
            Een van de meest opvallende kenmerken van deze lamp met hanger is de mogelijkheid om ze naadloos
            te integreren in een tegelwand. Dit betekent dat je geen last hebt van storende bevestigingspunten
            of onregelmatigheden in je wand. De lamp en hanger smelten letterlijk samen met de tegels, wat
            resulteert in een soepel en gestroomlijnd uiterlijk.
          </p>

          <p>
            <br />
            Lumen biedt deze innovatieve lamp met hanger aan in een breed scala aan kleuren, waardoor er
            voor elke smaak en stijl iets te vinden is. Of je nu op zoek bent naar een neutrale toets die past
            bij je minimalistische interieur, of een vrolijke kleuraccent die je ruimte oplicht, Lumen heeft het.
            Deze kleurkeuzes zorgen ervoor dat je je lamp en hanger perfect kunt afstemmen op je bestaande interieur.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/hanger4.jpg`}
              alt="Lumen"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/hanger3.jpg`}
              alt="Lumen"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/hanger2.jpg`}
              alt="Lumen"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            De functionaliteit van de lamp met hanger is even indrukwekkend als het ontwerp. De lamp biedt
            warm, zacht licht dat ideaal is voor ontspannende momenten, terwijl de hanger stevig en duurzaam is
            genoeg om handdoeken, accessoires of zelfs kledingstukken op te hangen. Dit maakt het een
            multifunctioneel stuk dat zowel stijlvol als praktisch is.
          </p>

          <p>
            <br />
            Met hun lamp met hanger heeft Lumen opnieuw bewezen dat innovatie en esthetiek hand in hand
            kunnen gaan. Dit product is niet alleen een oplossing voor praktische uitdagingen in de
            woninginrichting, maar ook een statementstuk dat je interieur naar een hoger niveau tilt.
            Of je nu je badkamer vernieuwt of je keuken een upgrade geeft, de geglazuurde lamp met hanger van
            Lumen is een investering die je niet zult betreuren.
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

export default HangerNieuws;
