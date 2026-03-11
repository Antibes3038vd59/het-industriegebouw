import React, { useState, useEffect } from 'react';
import '../css/hurenFormulier.css';
import useCursorAnimation from '../hooks/useCursorAnimation';
import useMenuAnimation from '../hooks/useMenuAnimation';

const HurenFormulier = () => {
  useCursorAnimation();
  useMenuAnimation();
  const [totalCost, setTotalCost] = useState(null);

  useEffect(() => {
    const storedTotalCost = localStorage.getItem('totalCost');
    if (storedTotalCost) {
      setTotalCost(storedTotalCost);
    }

    document.body.classList.add('hurenFormulier-page');

    // JavaScript-logica voor afbeeldingen
    const images = document.querySelectorAll('.fotoMain2HurenForm');
    let zIndexCounter = 4;

    images.forEach(image => {
      const style = window.getComputedStyle(image);
      const transform = style.transform;
      let matrix;

      try {
        matrix = new DOMMatrix(transform);
      } catch (e) {
        const parts = transform.match(/^matrix\((.+)\)$/);
        if (parts) {
          const values = parts[1].split(', ');
          matrix = {
            e: parseFloat(values[4]),
            f: parseFloat(values[5])
          };
        }
      }

      if (matrix) {
        image.style.setProperty('--tx', `${matrix.e}px`);
        image.style.setProperty('--ty', `${matrix.f}px`);
        image.style.setProperty('--direction', matrix.e > 0 ? '15px' : '-15px');
      }

      image.addEventListener('click', function() {
        this.style.zIndex = zIndexCounter++;
      });
    });
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
              <p>Uw totaalbedrag voor de kale huur bedraagt: €{totalCost},- per maand.</p>
            </div>
          )}

          <p className="tekstHurenForm">
            Het Industriegebouw staat bekend om zijn unieke karakter en dynamische gemeenschap van huurders. <br />
            Om ervoor te zorgen dat we een duurzame en passende relatie kunnen opbouwen, vragen wij u vriendelijk <br />
            om het aanvraagformulier in te vullen met uw contactgegevens. <br /><br />

            Na ontvangst van uw formulier nemen wij zo spoedig mogelijk contact met u op voor een <br />
            persoonlijk gesprek. Dit gesprek helpt ons om beter te begrijpen wat u zoekt in een huurruimte <br />
            en of onze visie en waarden bij elkaar passen. <br /><br />

            Wij streven ernaar om een gemeenschap te creëren waar iedere huurder zich thuis voelt en <br />
            waar samenwerking en inspiratie centraal staan. Daarom nemen wij ons de tijd om elke potentiële <br />
            huurder persoonlijk te leren kennen. <br /><br />

            Dank u voor uw interesse en we hopen u snel te mogen ontmoeten! <br /><br />

            Met vriendelijke groet, <br />
            Het Industriegebouw Team
          </p>

          <div className="fotoContainerHurenForm">
            <img src="../../images/producten/restaurant.jpg" alt="restaurant" className="fotoMain2HurenForm foto1" />
            <img src="../../images/producten/kantoor.jpg" alt="kantoor" className="fotoMain2HurenForm foto2" />
            <img src="../../images/producten/winkel.jpg" alt="winkel" className="fotoMain2HurenForm foto3" />
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
