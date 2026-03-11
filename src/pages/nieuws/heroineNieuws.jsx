import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const HeroineNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/heroine2.jpg`}
          alt="Heroine"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">dineren met Franse flair</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Restaurant 'Heroine' is een parel in het hart van de stad, bekend om zijn authentieke Franse
            keuken en elegante sfeer. Het restaurant, gevestigd in een historisch gebouw met een rijke
            geschiedenis, trekt zowel lokale gasten als toeristen aan die op zoek zijn naar een culinaire
            ervaring die ze niet snel vergeten. De eetzaal is ingericht met een combinatie van klassieke en
            moderne elementen, wat resulteert in een warme en intieme atmosfeer die uitnodigt om te genieten
            van een avond vol genot.
          </p>

          <p>
            <br />
            De keuken van 'Heroine' staat onder leiding van een getalenteerde chef die zijn passie voor
            Franse gastronomie combineert met een verfijnde techniek. Het menu varieert met de seizoenen,
            waardoor er altijd verse en lokale ingrediënten worden gebruikt. Gasten kunnen kiezen uit een
            breed scala aan gerechten, variërend van klassieke Franse specialiteiten zoals escargot en
            coq au vin tot innovatieve creaties die de traditionele keuken een moderne twist geven.
            Elk gerecht wordt met zorg bereid en gepresenteerd, wat zorgt voor een visuele en culinaire
            verrassing bij elke hap.
          </p>

          <p>
            <br />
            Naast de uitstekende keuken is 'Heroine' ook trots op zijn uitgebreide wijnkaart. De sommelier
            van het restaurant heeft een verfijnde selectie samengesteld van zowel Franse als internationale
            wijnen, die perfect aansluiten bij de gerechten op het menu. Of je nu geniet van een glas champagne
            als aperitief of een volle rode wijn bij je hoofdgerecht, de wijnkeuze bij 'Heroine' verrijkt elke
            maaltijd.
          </p>

          <p>
            <br />
            Het personeel van 'Heroine' staat bekend om zijn gastvrijheid en professionaliteit. Van het
            moment dat je binnenkomt tot het moment dat je vertrekt, voel je je verwelkomd en verzorgd.
            De service is attent en discreet, zodat je in alle rust kunt genieten van je maaltijd en de
            gezelschap van je tafelgenoten. Het is deze combinatie van uitstekende keuken, uitmuntende
            wijnen en opmerkelijke service die 'Heroine' tot een favoriet maakt voor vele gasten.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/heroine4.jpg`}
              alt="Heroine"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/heroine1.jpg`}
              alt="Heroine"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/heroine3.jpg`}
              alt="Heroine"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            Ten slotte is 'Heroine' niet alleen een plek om te eten, maar ook een plek om te ontspannen
            en te genieten. Het restaurant organiseert regelmatig speciale avonden, zoals wijnproeverijen
            en culinaire workshops, waar gasten kunnen delegeren in de kunst van de Franse keuken. Of je
            nu komt voor een romantisch diner voor twee of een gezellig avondje met vrienden, 'Heroine'
            biedt een onvergetelijke ervaring die je zeker zal willen herhalen.
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

export default HeroineNieuws;
