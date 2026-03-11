import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const MvrdvNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/mvrdv1.jpg`}
          alt="MVRDV"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">MVRDV in een klap grootste huurder</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            MVRDV, een van de meest innovatieve en toonaangevende architectenbureaus ter wereld, heeft
            een belangrijke stap gezet door de grootste huurder van het Industriegebouw te worden. Dit iconische
            gebouw, gelegen in het hart van Rotterdam, is al decennialang een broedplaats voor creativiteit
            en innovatie. Met deze verhuizing versterkt MVRDV zijn positie als een leidende speler in de
            architectuurwereld en brengt het zijn visie en expertise naar een van de meest dynamische steden
            van Nederland.
          </p>

          <p>
            <br />
            Het Industriegebouw, oorspronkelijk ontworpen door architect Hugh Maaskant, is een symbool
            van industriële geschiedenis en moderne vernieuwing. Met zijn indrukwekkende grootte en rijke
            erfgoed biedt het gebouw de perfecte omgeving voor MVRDV om zijn creatieve en technologische
            ambitie te ontplooien. De ruimtes binnen het Industriegebouw zijn ideaal voor het huisvesten
            van grote teams en het faciliteren van samenwerking en innovatie, wat perfect aansluit bij de
            werkwijze van MVRDV.
          </p>

          <p>
            <br />
            De verhuizing van MVRDV naar het Industriegebouw is meer dan alleen een fysieke verplaatsing;
            het is een strategische zet die de toekomstvisie van het bureau onderstreept. Door zich te vestigen
            in dit historische gebouw, creëert MVRDV een brug tussen het verleden en de toekomst, tussen
            industriële erfgoed en moderne architectuur. Dit past naadloos binnen de filosofie van MVRDV,
            die zich richt op duurzame en innovatieve oplossingen voor stedelijke ontwikkeling.
          </p>

          <p>
            <br />
            Het Industriegebouw biedt MVRDV de ruimte om te groeien en te experimenteren. Met zijn
            uitgebreide oppervlakte en flexibele indeling kunnen verschillende teams binnen MVRDV naadloos
            samenwerken aan grote projecten. De open en lichte ruimtes stimuleren creativiteit en uitwisseling
            van ideeën, wat essentieel is voor het succes van elk architectenbureau. Daarnaast biedt de
            locatie uitstekende faciliteiten, zoals vergaderruimtes, workshops en presentatieruimtes, die
            perfect aansluiten bij de behoeften van MVRDV.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/mvrdv4.jpg`}
              alt="MVRDV"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/mvrdv3.jpg`}
              alt="MVRDV"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/mvrdv2.jpg`}
              alt="MVRDV"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            De keuze voor het Industriegebouw is ook een bewuste stap om dichter bij de klanten en partners
            van MVRDV te komen. Rotterdam is een belangrijke stad voor architectuur en stedelijke ontwikkeling
            en door hier een basis te hebben, kan MVRDV nog beter inspelen op de lokale behoeften en trends.
            De nabijheid van belangrijke projecten en partners maakt het mogelijk om sneller en efficiënter
            te reageren op veranderingen en nieuwe uitdagingen.
          </p>

          <p>
            <br />
            MVRDV heeft een sterke band met Rotterdam en het Industriegebouw. Veel van de iconische projecten
            van het bureau, zoals de Markthal en het Depot Boijmans Van Beuningen, zijn gelegen in deze stad.
            Door zich te vestigen in het Industriegebouw, versterkt MVRDV zijn engagement met de stad en
            haar bewoners. Het bureau hoopt door deze verhuizing nog meer bij te dragen aan de ontwikkeling
            en verfraaiing van Rotterdam.
          </p>

          <p>
            <br />
            Het Industriegebouw is niet alleen een werkplek, maar ook een plek voor inspiratie en uitwisseling.
            De vele creatieve bedrijven en ateliers die hier gevestigd zijn, creëren een dynamische en
            stimulerende omgeving. MVRDV kan hier profiteren van de synergie met andere innovatieve bedrijven
            en kunstenaars, wat leidt tot nieuwe samenwerkingen en creatieve oplossingen.
          </p>

          <p>
            <br />
            De verhuizing van MVRDV naar het Industriegebouw is ook een statement over duurzaamheid en
            hergebruik. Het bureau staat bekend om zijn toewijding aan duurzame architectuur en het hergebruik
            van bestaande gebouwen. Door zich te vestigen in een historisch gebouw, toont MVRDV aan hoe
            oude structuren nieuw leven kunnen worden ingeblazen en geïntegreerd kunnen worden in moderne
            stedelijke ontwikkeling.
          </p>

          <p>
            <br />
            Het Industriegebouw biedt MVRDV de mogelijkheid om zijn eigen kantoorruimte te ontwerpen en
            in te richten volgens de hoogste standaarden van duurzaamheid en innovatie. Dit maakt het mogelijk
            om nieuwe materialen en technieken te testen en te implementeren, wat weer bijdraagt aan de
            voortdurende innovatie binnen het bureau.
          </p>

          <p>
            <br />
            Ten slotte is de verhuizing van MVRDV naar het Industriegebouw een belangrijke stap voor zowel
            het bureau als de stad Rotterdam. Het versterkt de positie van MVRDV als een leidende speler in
            de architectuurwereld en biedt de stad een nieuwe impuls voor innovatie en creativiteit.
            Met zijn verhuizing naar dit iconische gebouw, zet MVRDV een voorbeeld voor andere bedrijven
            en toont het de waarde van historisch erfgoed en duurzame ontwikkeling.
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

export default MvrdvNieuws;
