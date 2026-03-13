import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const JarmuschNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/jarmusch3.jpg`}
          alt="Jarmusch"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">ontbijt voor fijnproevers</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Lunchroom 'Jarmusch' is een unieke culinaire bestemming die zich heeft gespecialiseerd in
            Amerikaans ontbijt, maar met een verfijnde Europese invloed. Gelegen in een levendige buurt,
            trekt 'Jarmusch' een divers publiek aan, van vroege vogels die op zoek zijn naar een hartig begin
            van de dag tot genieters die willen ontspannen tijdens een uitgebreide brunch. De inrichting van
            de lunchroom is een mix van industriële elementen en warme, natuurlijke materialen, wat resulteert
            in een ontspannen en stijlvolle sfeer.
          </p>

          <p>
            <br />
            Het menu van 'Jarmusch' biedt een breed scala aan gerechten die de beste elementen van de
            Amerikaanse ontbijtcultuur combineren met Europese verfijning. Denk aan klassiekers zoals
            pannenkoeken met ahornsiroop, maar dan verrijkt met verse bessen en een scheutje Franse crème fraîche.
            Of probeer de luxe versie van eggs Benedict, geserveerd op zachte brioche met een saus hollandaise
            die is verrijkt met een subtiele toets van truffel. Elk gerecht wordt met zorg bereid met verse,
            lokale ingrediënten, wat zorgt voor een smaakexplosie bij elke hap.
          </p>

          <p>
            <br />
            Naast de uitstekende gerechten, biedt 'Jarmusch' ook een uitgebreide selectie aan drankjes.
            Van krachtige espresso's en cappuccino's, gemaakt met zorgvuldig geselecteerde bonen, tot verse
            smoothies en geperst sap, er is voor iedere smaak iets te vinden. Voor wie op zoek is naar iets
            stevigers, is er een keurige selectie aan cocktails, zoals Bloody Mary's en Mimosas, die perfect
            aansluiten bij de brunchgerechten.
          </p>

          <p>
            <br />
            Het personeel van 'Jarmusch' staat bekend om zijn vriendelijke en attente service. Ze zorgen
            ervoor dat je je meteen thuis voelt en staan altijd klaar om je te helpen met aanbevelingen of
            speciale verzoeken. Of je nu alleen komt om te werken met een laptop en een kop koffie, of met
            een groep vrienden voor een gezellig brunchmoment, het personeel zorgt ervoor dat je ontspannen
            kunt genieten van je bezoek.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/jarmusch1.jpg`}
              alt="Jarmusch"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/jarmusch2.jpg`}
              alt="Jarmusch"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/jarmusch4.jpg`}
              alt="Jarmusch"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            Bij 'Jarmusch' streven we ernaar om elke bezoeker te laten genieten van een culinaire ervaring
            die je dag verrijkt. Onze passie voor kwaliteit en creativiteit zorgt ervoor dat elk moment bij ons
            een feestje is. Of je nu komt voor een snelle koffie of een uitgebreide brunch, wij zorgen ervoor dat
            je je thuis voelt en je bezoek onvergetelijk blijft.
          </p>

          <p>
            <br />
            Ten slotte is 'Jarmusch' meer dan alleen een plek om te eten. Het is een plek om samen te
            komen, te ontspannen en te genieten van de kleine dingen in het leven. De lunchroom organiseert
            regelmatig speciale evenementen, zoals themabrunches en workshops, waar gasten kunnen leren over
            de kunst van het perfecte ontbijt. Of je nu komt voor een snelle bijt of een uitgebreide brunch,
            'Jarmusch' biedt een onvergetelijke ervaring die je zeker zal willen herhalen.
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

export default JarmuschNieuws;
