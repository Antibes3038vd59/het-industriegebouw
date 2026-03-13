import React from 'react';
import '../css/about.css';
import useCursorAnimation from '../hooks/useCursorAnimation';
import useMenuAnimation from '../hooks/useMenuAnimation';

const About = () => {
  // Roep de hooks aan voor animaties
  useCursorAnimation();
  useMenuAnimation();

  return (
    <>
      {/* Cursor dots */}
      <div className="dotAbout" id="dot1"></div>
      <div className="dotAbout" id="dot2"></div>

      <main className="about-page">
        <div className="wrapperAbout">
          <h1 className="titleAbout">Over Het Industriegebouw</h1><br/>
          <p className="tekstAbout">
            Het Industriegebouw, gelegen in het hart van Rotterdam, is een iconisch bedrijfsverzamelgebouw
            dat een belangrijke rol speelt in de stadseconomie. Dit gebouw, ontworpen door de beroemde architect
            Hugh Maaskant, biedt onderdak aan een diversiteit van bedrijven, variërend van start-ups tot
            gevestigde ondernemingen. De unieke structuur van het gebouw, met ruimte voor winkels en horeca
            in de plint, maakt het een levendige plek waar zakelijkheid en sociale interactie naadloos samengaan.
          </p><br/>
          <p className="tekstAbout">
            De filosofie van het team achter Het Industriegebouw is gebaseerd op de principes van samenwerking,
            innovatie en duurzaamheid. Ze geloven sterk in het creëren van een gemeenschap binnen het gebouw,
            waar bedrijven elkaar ondersteunen en inspireren. Dit wordt bereikt door het organiseren van
            regelmatige netwerkevenementen, workshops en andere activiteiten die de interactie tussen de
            huurders bevorderen. Daarnaast wordt er veel aandacht besteed aan het bieden van een gezonde en
            inspirerende werkomgeving, met moderne faciliteiten en een focus op welzijn.
          </p><br/>
          <p className="tekstAbout">
            Duurzaamheid is een ander belangrijk aspect van de filosofie van Het Industriegebouw. Het team streeft
            ernaar om het gebouw zo energie-efficiënt en milieuvriendelijk mogelijk te maken. Dit omvat het gebruik
            van duurzame materialen, energiezuinige technologieën en het implementeren van groene ruimtes binnen
            en rondom het gebouw. Door deze maatregelen hoopt het team een positieve bijdrage te leveren aan de
            milieudoelstellingen van Rotterdam en een voorbeeld te zijn voor andere bedrijfsverzamelgebouwen.
          </p><br/>
          <p className="tekstAbout">
            De strategische locatie van Het Industriegebouw, dicht bij het centraal station en andere belangrijke
            verkeersaders, maakt het een aantrekkelijke plek voor bedrijven die waarde hechten aan bereikbaarheid
            en connectiviteit. Deze locatie draagt bij aan de dynamiek van het gebouw en zorgt ervoor dat het een
            belangrijke rol speelt in de ontwikkeling van Rotterdam als een moderne, internationale stad.
          </p><br/>
          <p className="tekstAbout">
            Ten slotte is Het Industriegebouw meer dan alleen een plek om te werken; het is een plek om te groeien,
            te innoveren en te netwerken. Met zijn unieke combinatie van historisch design, moderne faciliteiten
            en een sterke gemeenschapsgerichte filosofie, blijft Het Industriegebouw een symbool van de
            vooruitstrevende geest van Rotterdam en een inspiratiebron voor bedrijven die streven naar succes
            en duurzaamheid.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footerAbout">
        <p>© 2026 Het Industriegebouw</p>
      </footer>
    </>
  );
};

export default About;
