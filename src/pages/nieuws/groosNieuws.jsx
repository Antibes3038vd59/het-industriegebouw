import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const GroosNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/groos4.jpg`}
          alt="Groos"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">Groos neemt intrek in nieuw onderkomen</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Groos is een unieke conceptstore die zich heeft gevestigd in het Industriegebouw, een iconisch
            bedrijfsverzamelgebouw in het hart van Rotterdam. Het Industriegebouw, oorspronkelijk ontworpen
            door architect Hugh Maaskant, is een symbool van de naoorlogse wederopbouw en herbergt tegenwoordig
            een levendige mix van winkels, horecagelegenheden en creatieve bedrijven. Groos heeft zich hier
            perfect weten te nestelen, wat resulteert in een inspirerende en dynamische omgeving voor bezoekers.
          </p>

          <p>
            <br />
            De conceptstore Groos is opgericht met een duidelijke visie: het bieden van een platform voor
            lokale ontwerpers, kunstenaars en ondernemers. Door samen te werken met tal van creatieve talenten
            uit Rotterdam en omgeving, creëert Groos een plek waar unieke producten en verhalen centraal staan.
            Dit maakt de winkel niet alleen een plek om te shoppen, maar ook een plek om te ontdekken en te
            verbinden met de lokale creatieve scene.
          </p>

          <p>
            <br />
            Binnen Groos vind je een breed scala aan producten, variërend van mode en accessoires tot
            designobjecten en kunst. Elk product in de winkel heeft zijn eigen verhaal, wat de winkelervaring
            bijzonder maakt. Of je nu op zoek bent naar een uniek kledingstuk, een handgemaakt sieraad of
            een opvallend stuk voor je interieur, Groos biedt een verrassende selectie die je zelden ergens
            anders zal vinden.
          </p>

          <p>
            <br />
            Het interieur van Groos is zorgvuldig ontworpen om de creativiteit en authenticiteit van de producten
            te benadrukken. De ruimte is licht en luchtig, met een industriële uitstraling die past bij
            de geschiedenis van het gebouw. De inrichting is minimalistisch, waardoor de aandacht volledig
            uitgaat naar de tentoongestelde producten. Dit zorgt voor een rustige en inspirerende sfeer waarin
            bezoekers zich gemakkelijk thuis voelen.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/groos7.jpg`}
              alt="Groos"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/groos6.jpg`}
              alt="Groos"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/groos5.jpg`}
              alt="Groos"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />

          </div>

          <p>
            <br />
            Naast de winkelruimte organiseert Groos regelmatig evenementen en workshops. Deze activiteiten
            variëren van ontmoetingen met lokale ontwerpers en kunstenaars tot creatieve workshops waar
            bezoekers zelf aan de slag kunnen gaan. Deze evenementen dragen bij aan de gemeenschapsgevoel
            en maken Groos tot meer dan alleen een winkel; het is een plek van ontmoeting en inspiratie.
          </p>

          <p>
            <br />
            Groos legt grote nadruk op duurzaamheid en verantwoord ondernemen. Veel van de producten die in
            de winkel worden aangeboden, zijn gemaakt van duurzame materialen of op een milieuvriendelijke
            manier geproduceerd. Daarnaast werkt Groos nauw samen met lokale leveranciers, wat bijdraagt aan
            een kleinere ecologische voetafdruk en de ondersteuning van de lokale economie.
          </p>

          <p>
            <br />
            Het team achter Groos bestaat uit een groep gepassioneerde mensen die zich inzetten voor de missie
            van de winkel. Ze staan klaar om bezoekers te helpen bij het vinden van het perfecte product en
            delen graag de verhalen achter de verschillende merken en ontwerpers. Deze persoonlijke aanpak
            draagt bij aan de unieke winkelervaring die Groos biedt.
          </p>

          <p>
            <br />
            Ten slotte is Groos meer dan alleen een winkel; het is een plek van ontmoeting, inspiratie en
            creativiteit. Door zijn unieke aanbod, duurzame waarden en betrokkenheid bij de lokale
            gemeenschap, heeft Groos zich ontwikkeld tot een onmisbaar onderdeel van het Industriegebouw
            en de creatieve scene van Rotterdam. Een bezoek aan Groos is een uitnodiging om te ontdekken,
            te verbinden en te genieten van de rijkdom aan talent en creativiteit die de stad te bieden heeft.
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

export default GroosNieuws;



