import React, { useState, useEffect, useRef } from 'react';
import '../../css/nieuws.css';
import useCursorAnimation from '../../hooks/useCursorAnimation';
import useMenuAnimation from '../../hooks/useMenuAnimation';

const PlatenspelerNieuws = () => {
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
          src={`${process.env.PUBLIC_URL}/images/nieuws/elpee1.jpg`}
          alt="platenspeler"
          className="fotoMain1"
        />
        <h1 className="mainTekst1Nieuws">draagbare platenspeler</h1>

        <div className="wrapperNieuwsKlein">
          <p>
            <br />
            Altena, een unieke winkel, heeft zich gespecialiseerd in het aanbieden van portable
            platenspelers en andere handzame elektronica uit de vorige eeuw, verpakt in een modern en
            compact jasje. Deze winkel is een paradijs voor liefhebbers van vinyl en retro-technologie,
            die op zoek zijn naar kwaliteit en authenticiteit in een tijdperk van snelle veranderingen.
          </p>

          <p>
            <br />
            De portable platenspelers van Altena combineren het beste van beide werelden: de warme,
            authentieke klank van vinyl en de gemakkelijkheid van moderne technologie. Deze draagbare
            platenspelers zijn ontworpen om makkelijk mee te nemen, zodat je je favoriete langspeelplaten
            overal kunt afspelen, of je nu thuis bent, op reis of bij vrienden. Met hun compacte ontwerp
            en gebruiksvriendelijke functies, zijn deze platenspelers perfect voor de moderne muziekliefhebber
            die niet wil afzien van kwaliteit.
          </p>

          <p>
            <br />
            Het interieur van de winkel is een mix van retro en modern, met een sfeer die je terugbrengt
            naar de jaren '70 en '80, maar met een frisse, eigentijdse toets. De schappen zijn gevuld met
            een schat aan elektronica, elk met een eigen verhaal en karakter. Het vriendelijke en deskundige
            personeel van Altena staat altijd klaar om je te helpen bij het vinden van het perfecte product
            en om je vragen te beantwoorden over de geschiedenis en het gebruik van elk item.
          </p>

          <p>
            <br />
            Naast portable platenspelers biedt Altena een breed scala aan andere retro-elektronica,
            allemaal verpakt in een nieuw, compact jasje. Denk aan draagbare cassette- en cd-spelers,
            vintage radiotoestellen en zelfs klassieke speelgoedrobots – allemaal voorzien van moderne
            updates die ze geschikt maken voor het hedendaagse leven. Elk product is zorgvuldig geselecteerd
            en getest om ervoor te zorgen dat het niet alleen goed werkt, maar ook de nostalgische charme
            behoudt die deze items zo bijzonder maakt.
          </p>

          <div className="fotoContainer">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/elpee4.png`}
              alt="Elpee"
              className="fotoMain2 foto3"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/elpee3.png`}
              alt="Elpee"
              className="fotoMain2 foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/nieuws/elpee2.png`}
              alt="Elpee"
              className="fotoMain2 foto1"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          <p>
            <br />
            Bij Altena streven we ernaar om elke bezoeker te laten genieten van een tijdreis door de geschiedenis
            van elektronica. Onze passie voor nostalgie en innovatie zorgt ervoor dat elk product een verhaal vertelt
            en een unieke ervaring biedt. Of je nu op zoek bent naar een draagbare platenspeler of een vintage
            radiotoestel, wij zorgen ervoor dat je een stuk vindt dat je hartje blijft warmen en je dag verrijkt.
          </p>

          <p>
            <br />
            Met haar unieke aanbod en toewijding aan kwaliteit en authenticiteit, hoopt Altena een plek
            te zijn waar mensen kunnen genieten van de schoonheid en het vermaak van retro-technologie.
            Of je nu een verzamelaar bent van vinyl, een liefhebber van vintage elektronica of gewoon op
            zoek naar iets unieks en nostalgisch, Altena biedt een ervaring die je nergens anders vindt.
            Kom langs en ontdek de magie van het verleden, verpakt in een modern jasje, bij Altena.
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

export default PlatenspelerNieuws;
