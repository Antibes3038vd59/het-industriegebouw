import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const TuinNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/tuin3.jpg`}
          alt="Binnenplaats"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">vergroening binnenplaats gereed</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Het Industriegebouw, een iconisch gebouw in het hart van Rotterdam, heeft recentelijk een
            opmerkelijke transformatie ondergaan. De binnenplaats, die vroeger een functionele maar weinig
            inspirerende ruimte was, is veranderd in een groene oase midden in de stad. Deze vergroening is
            niet alleen esthetisch aantrekkelijk, maar biedt ook een beschutte setting waar gasten kunnen
            genieten van de terrassen, ongeacht het weer.
          </p>

          <p>
            <br />
            De herinrichting van de binnenplaats is een voorbeeld van hoe groen in stedelijke omgevingen
            kan worden geïntegreerd om een aangename en rustgevende sfeer te creëren. Door het toevoegen van
            verschillende plantensoorten en bomen, is er een natuurlijke scherming ontstaan die zowel zonlicht
            als wind vangt. Dit maakt het mogelijk voor bezoekers om buiten te zitten zonder last te hebben van
            extreme weersomstandigheden.
          </p>

          <p>
            <br />
            De terrassen zijn strategisch geplaatst rondom de binnenplaats, waardoor ze optimaal gebruikmaken
            van de nieuwe groene omgeving. Gasten kunnen hier genieten van een kop koffie, een lekker etentje of
            een frisse drankje, terwijl ze omringd zijn door de rustgevende aanwezigheid van planten. Deze setting
            biedt een perfecte plek om te ontspannen, te werken of gezellig bij elkaar te komen met vrienden en
            familie.
          </p>

          <p>
            <br />
            Het ontwerp van de vergroende binnenplaats is niet alleen functioneel, maar ook duurzaam.
            Door het gebruik van lokale plantensoorten en materialen is de ecologische voetafdruk van het
            project beperkt gehouden. Bovendien dragen de planten bij aan een beter stads-klimaat door het
            absorberen van CO2 en het produceren van zuurstof, wat een positieve impact heeft op de
            luchtkwaliteit in de directe omgeving.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/tuin4.jpg`}
              alt="Binnenplaats"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/tuin2.jpg`}
              alt="Binnenplaats"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/tuin1.jpg`}
              alt="Binnenplaats"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            De binnenplaats van Het Industriegebouw is meer dan alleen een plek om te zitten en te genieten;
            het is een plek van ontmoeting en inspiratie. De groene omgeving stimuleert creativiteit en biedt
            een welkome afwisseling van de drukke stedelijke omgeving. Het is een plek waar mensen elkaar
            kunnen ontmoeten, ideeën kunnen uitwisselen en nieuwe connecties kunnen leggen, wat perfect past
            bij de dynamische en innovatieve sfeer van Rotterdam.
          </p>

          <p>
            <br />
            Met de herinrichting van de binnenplaats heeft Het Industriegebouw een voorbeeld gegeven van
            hoe stedelijke ruimtes op een innovatieve en duurzame manier kunnen worden getransformeerd.
            De combinatie van groen, comfort en functionaliteit maakt deze plek uniek en trekt zowel lokale
            bewoners als toeristen aan. Het is een plek die uitnodigt om te genieten, te ontspannen en te
            inspireren, en die een waardevolle bijdrage levert aan de kwaliteit van leven in de stad.
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

export default TuinNieuws;
