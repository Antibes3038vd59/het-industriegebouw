import React, { useEffect } from 'react';
import '../css/contact.css';
import useCursorAnimation from '../hooks/useCursorAnimation';
import useMenuAnimation from '../hooks/useMenuAnimation';

const Contact = () => {
  useCursorAnimation();
  useMenuAnimation();

  useEffect(() => {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();

        const naam = document.getElementById('naam').value;
        const email = document.getElementById('email').value;
        const bericht = document.getElementById('bericht').value;

        console.log('Naam:', naam);
        console.log('Email:', email);
        console.log('Bericht:', bericht);

        document.getElementById('resultaat').innerHTML = `
          <p>Bedankt, ${naam}! Je bericht is verzonden.</p>
        `;

        form.reset();
      });
    }
  }, []);

  return (
    <>
      <div className="dotContact" id="dot1"></div>
      <div className="dotContact" id="dot2"></div>

      <main className="contact-page">
        <div className="wrapperHurenKlein">
          <h1 className="tekstContact">
            Heeft u vragen voor Het Industriegebouw? Neem dan gerust contact met ons op.
          </h1>

          {/* Contactformulier */}
          <form id="contactForm" className="contactFormulier">
            <label htmlFor="naam">Naam:</label>
            <input type="text" id="naam" name="naam" required /><br /><br />

            <label htmlFor="email">E-mailadres:</label>
            <input type="email" id="email" name="email" required /><br /><br />

            <label htmlFor="bericht">Bericht:</label>
            <textarea id="bericht" name="bericht" rows="4" required></textarea>

            <input type="submit" value="Verzenden" className="button" />
          </form>
          <div id="resultaat" className="tekstContact"></div>
        </div>
      </main>

      <footer className="footerContact">
        <p>© 2026 Het Industriegebouw</p>
      </footer>
    </>
  );
};

export default Contact;
