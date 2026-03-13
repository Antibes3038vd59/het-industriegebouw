import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const SteenkanNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/steen3.jpg`}
          alt="Mi-Aki"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">stenen hoes voor thermosfles</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Mi-Aki, een getalenteerde steenkunstenares afkomstig uit Japan, heeft haar unieke kunstvorm naar
            Nederland gebracht. Als afgestudeerde van de Koninklijke Academie van Beeldende Kunsten in Den Haag,
            combineert Mi-Aki haar diepgewortelde Japanse esthetiek met moderne, Nederlandse invloeden om
            prachtige, handgemaakte stenen hoezen voor thermosflessen te creëren. Elk stuk is een kunstwerk
            op zich, gemaakt met precisie en een oog voor detail.
          </p>

          <p>
            <br />
            De stenen hoezen van Mi-Aki zijn meer dan alleen functionele accessoires; ze zijn ware
            kunstobjecten die zowel esthetisch als praktisch nut bieden. Door het gebruik van natuurlijke
            materialen en traditionele technieken, weet Mi-Aki de schoonheid en rust van de natuur te vangen
            in elk van haar ontwerpen. De stenen worden zorgvuldig gekozen en bewerkt, waardoor elke hoes
            uniek is en een eigen karakter heeft.
          </p>

          <p>
            <br />
            Mi-Aki's creaties zijn niet alleen visueel aantrekkelijk, maar ze bieden ook een praktische
            oplossing voor het beschermen en isoleren van thermosflessen. De stenen hoezen zorgen ervoor
            dat je drank langer warm of koud blijft, terwijl ze tegelijkertijd een stijlvolle toevoeging
            zijn aan je dagelijkse accessoires. Of je nu op weg bent naar het werk, een picknick of een
            avontuur in de natuur, Mi-Aki's stenen hoezen voegen een extra laagje luxe en persoonlijkheid
            toe aan je ervaring.
          </p>

          <p>
            <br />
            Het creatieve proces van Mi-Aki is een balans tussen traditie en innovatie. Ze laat zich
            inspireren door de natuur en de seizoenen, wat resulteert in ontwerpen die zowel tijdloos als
            modern zijn. Haar werk refleteert haar diepe respect voor de materialen die ze gebruikt en haar
            toewijding aan het ambacht. Elke steen wordt met zorg gekozen en bewerkt, waardoor elk stuk
            een verhaal vertelt over de natuur en de kunstenares zelf.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/steen4.jpg`}
              alt="Mi-Aki"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/steen2.jpg`}
              alt="Mi-Aki"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/steen1.jpg`}
              alt="Mi-Aki"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            Mi-Aki streeft ernaar om elk stuk een unieke en persoonlijke ervaring te maken.
            Haar passie voor natuur en kunst zorgt ervoor dat elk stuk een verhaal vertelt en een moment
            van rust en schoonheid creëert in je dagelijkse leven. Of je nu op zoek bent naar een functioneel
            kunstwerk of een stijlvol accessoire, zij zorgt ervoor dat je een stuk vindt dat je hartje blijft
            warmen en je dag verrijkt.
          </p>

          <p>
            <br />
            Met haar unieke stenen hoezen hoopt Mi-Aki mensen te inspireren om de schoonheid van het alledaagse
            te waarderen. Haar kunst is een uitnodiging om te pauzeren, te genieten van een moment van rust
            en de kleine dingen in het leven te waardeeren. Of je nu een liefhebber bent van kunst, design
            of gewoon op zoek naar iets unieks, Mi-Aki's creaties bieden een perfecte combinatie van
            functionaliteit en esthetiek. Ontdek de wereld van Mi-Aki en verrijk je dagelijkse routine
            met een stukje kunst dat je altijd bij je kunt dragen.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footerNieuws">
        <p>© 2026 Het Industriegebouw</p>
      </footer>
    </>
  );
};

export default SteenkanNieuws;
