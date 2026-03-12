import React, { useState, useEffect, useRef } from 'react';
import '../css/hurenFormulier.css';
import useCursorAnimation from '../hooks/useCursorAnimation';
import useMenuAnimation from '../hooks/useMenuAnimation';

const HurenFormulier = () => {
  useCursorAnimation();
  useMenuAnimation();
  const [totalCost, setTotalCost] = useState(null);

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

  // Haal het totaalbedrag op uit localStorage
  useEffect(() => {
    const savedTotalCost = localStorage.getItem('totalCost');
    if (savedTotalCost) {
      setTotalCost(parseFloat(savedTotalCost));
    }

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

    document.body.classList.add('hurenFormulier-page');
  }, []);

  return (
    <>
      {/* Cursor dots */}
      <div className="dotHurenForm" id="dot1"></div>
      <div className="dotHurenForm" id="dot2"></div>

      <main>
        <div className="wrapperHurenForm">
          <p className="tekstHurenForm">
            Welkom bij Het Industriegebouw! <br />
            Wij zijn blij dat u interesse toont in het huren van een ruimte in ons iconische gebouw.
          </p>

          {totalCost && (
            <div id="totalCostContainer" className="totalCost">
              <p>Uw totaalbedrag voor de kale huur bedraagt: <br /> €{totalCost.toFixed(2)},-  per maand.</p>
            </div>
          )}

          <p className="tekstHurenForm">
            Het Industriegebouw staat bekend om zijn unieke karakter en dynamische gemeenschap van huurders. <br />
            Om ervoor te zorgen dat we een duurzame en passende relatie kunnen opbouwen, vragen wij u vriendelijk
            om het aanvraagformulier in te vullen met uw contactgegevens. <br /><br />

            Na ontvangst van uw formulier nemen wij zo spoedig mogelijk contact met u op voor een
            persoonlijk gesprek. Dit gesprek helpt ons om beter te begrijpen wat u zoekt in een huurruimte
            en of onze visie en waarden bij elkaar passen. <br /><br />

            Wij streven ernaar om een gemeenschap te creëren waar iedere huurder zich thuis voelt en
            waar samenwerking en inspiratie centraal staan. Daarom nemen wij ons de tijd om elke potentiële
            huurder persoonlijk te leren kennen. <br /><br />

            Dank u voor uw interesse en we hopen u snel te mogen ontmoeten! <br /><br />

            Met vriendelijke groet, <br />
            Het Industriegebouw Team
          </p>

          <div className="fotoContainerHurenForm">
            <img
              ref={foto1Ref}
              src={`${process.env.PUBLIC_URL}/images/producten/restaurant.jpg`}
              alt="restaurant"
              className="fotoMain2HurenForm foto1"
              style={{ zIndex: zIndices.foto1 }}
              onClick={() => handleImageClick('foto1')}
            />
            <img
              ref={foto2Ref}
              src={`${process.env.PUBLIC_URL}/images/producten/kantoor.jpg`}
              alt="kantoor"
              className="fotoMain2HurenForm foto2"
              style={{ zIndex: zIndices.foto2 }}
              onClick={() => handleImageClick('foto2')}
            />
            <img
              ref={foto3Ref}
              src={`${process.env.PUBLIC_URL}/images/producten/winkel.jpg`}
              alt="winkel"
              className="fotoMain2HurenForm foto3"
              style={{ zIndex: zIndices.foto3 }}
              onClick={() => handleImageClick('foto3')}
            />
          </div>

          {/* Aanvraagformulier */}
          <form action="verwerk_formulier.php" method="post" className="aanvraagFormulier">
            <label htmlFor="naam">Naam:</label>
            <input type="text" id="naam" name="naam" required /><br /><br />

            <label htmlFor="onderneming">Naam onderneming:</label>
            <input type="text" id="onderneming" name="onderneming" required /><br /><br />

            <label htmlFor="adres">Adres:</label>
            <input type="text" id="adres" name="adres" required /><br /><br />

            <label htmlFor="telefoon">Telefoon:</label>
            <input type="tel" id="telefoon" name="telefoon" required /><br /><br />

            <label htmlFor="email">E-mailadres:</label>
            <input type="email" id="email" name="email" required /><br /><br />

            <input type="submit" value="Verzenden" />
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="footerHurenForm">
        <p>© 2026 Het Industriegebouw</p>
      </footer>
    </>
  );
};

export default HurenFormulier;
