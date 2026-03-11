import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const ChocoholicNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/chocola1.jpg`}
          alt="Chocoholic"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">chocolademaker begint eigen zaak</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Chocoholic, de nieuwe chocolademaker die chocolade-liefhebbers verrukt met zijn ambachtelijke en
            verfijnde creaties, heeft zijn allereerste zaak geopend in het levendige Rotterdam. Met deze
            vestiging brengt Chocoholic de kunst van chocolade maken naar een van de meest dynamische steden
            van Nederland, waar smaak en creativiteit samenkomen.
          </p>

          <p>
            <br />
            De eerste locatie van Chocoholic in Rotterdam is gevestigd in een trendy en centrale wijk,
            waardoor het gemakkelijk bereikbaar is voor zowel lokale bewoners als toeristen. Het interieur
            van de winkel is ontworpen om een warme en uitnodigende sfeer te creëren, met een mix van moderne
            en klassieke elementen die perfect aansluiten bij de rijke traditie van chocolade maken. De ruimte
            is niet alleen een plek om heerlijke chocolade te kopen, maar ook om te genieten van een kop koffie
            of thee, terwijl je de ambachtelijke kunst van onze chocolatiers bekijkt.
          </p>

          <p>
            <br />
            Het assortiment van Chocoholic staat bol van de meest verfijnde en unieke chocoladecreaties.
            Van pure chocoladetafels en bonbons tot innovatieve smaken en seizoensgebonden specialiteiten,
            elk stukje chocolade wordt met zorg en passie gemaakt door onze ervaren chocolatiers. Chocoholic
            gebruikt alleen de beste ingrediënten, waaronder hoogwaardige cacao uit duurzame bronnen, om
            ervoor te zorgen dat elke hap een onvergetelijke smaakervaring is.
          </p>

          <p>
            <br />
            Naast het uitgebreide assortiment aan chocolade, biedt Chocoholic ook workshops en tastings
            aan, perfect voor chocolade-enthousiastelingen die meer willen leren over de kunst van chocolade
            maken. Ons vriendelijke en gekwalificeerde team staat altijd klaar om je te helpen met het kiezen
            van de perfecte chocolade of om je te begeleiden tijdens een van onze leerzame en lekkere workshops.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/chocola4.jpg`}
              alt="Chocoholic"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/chocola3.jpg`}
              alt="Chocoholic"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/chocola2.jpg`}
              alt="Chocoholic"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            Onze missie is om elke bezoeker een onvergetelijke ervaring te bieden, waarbij kwaliteit en
            service centraal staan. Of je nu voor de eerste keer bij ons bent of een trouwe klant, wij streven
            ernaar om je verwachtingen te overtreffen. Wij geloven in het creëren van een omgeving waar iedereen
            zich welkom voelt en waar je kunt genieten van de beste producten en diensten die wij met passie en
            zorg aanbieden.
          </p>

          <p>
            <br />
            Met de opening van deze eerste zaak in Rotterdam, hoopt Chocoholic een nieuwe standaard te zetten
            voor ambachtelijke chocolade in de regio. Of je nu een echte chocoholic bent of gewoon op zoek naar
            een lekkere verrassing, Chocoholic staat voor je klaar om je te verwelkomen met open armen en een
            stukje chocolade dat je nooit zult vergeten. Kom langs en ervaar zelf de zinnelijke wereld van
            Chocoholic in Rotterdam!
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

export default ChocoholicNieuws;
