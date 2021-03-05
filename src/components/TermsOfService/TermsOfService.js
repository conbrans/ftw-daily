import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const {
    rootClassName,
    className
  } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Zuletzt aktualisiert : 01.03.2021</p>


      <h2>1. Begrifflichkeiten</h2>
      <p>
        Nachfrage/Käufer: eine Person (natürlich oder juristisch), die über die Plattform eine
        Bestellung aufgibt.</p>
      <p>
        Anbieter/Verkäufer: eine Person (natürlich oder juristisch), die über die Plattform
        Backwaren anbietet oder verkauft und die Plattform zum Abschluss von Verträgen und Bezahlung
        nutzt.</p>
      <p>Plattform: Die Website, die von der Let’s Bake GbR zur Verfügung gestellt wird,
        einschließlich der einzelnen Nachfrager- und Anbieterprofile.</p>
      <p>Anfrage: Eine unverbindliche Nachricht an einen Anbieter/Verkäufer, in dem die weiteren
        Details zum Produkt gestellt werden können.
      </p>

      <h2>2. Identität von Let’s Bake</h2>
      <p>Die Let’s Bake GbR ist unter der Bezeichnung letsbake.de tätig.</p>
      <p>Korrespondezanschrift:</p>
      <p>Let’s Bake GbR</p>
      <p>Kaiserstraße 10c</p>
      <p>49809 Lingen</p>
      <p>info@letsbake.de</p>
      <p>Tel.: 0172 975 38 34</p>


      <h2>3. Anwendbarkeit</h2>
      <p>
        Die vorliegenden Allgemeinen Geschäftsbedingungen sind sowohl für Käufer als auch Verkäufer
        der Plattform anwendbar.
        Durch die Aufgabe einer Bestellung schließt der Nachfrager einen Vertrag mit dem Anbieter über
        die Lieferung des vom Nachfrager ausgewählten Angebots.
      </p>

      <p>
        Die Let’s Bake GbR ist nicht für das Angebot und/oder den Vertrag zwischen dem Nachfrager und
        dem Anbieter verantwortlich. Gegebenenfalls gelten die Allgemeinen Geschäftsbedingungen des
        Anbieters zusätzlich für das Angebot und den Vertrag.
      </p>

      <h2> 4. Preise</h2>
      <p>Alle Preise sind zuzüglich Versandkosten zu verstehen, eine
        gegebenenfalls bestehende Umsatzsteuer ist inklusive.</p>
      <h2> 5. Lieferung und Abholung</h2>
      <p>Die Lieferung oder Abholung ist zwischen dem Käufer und Verkäufer zu vereinbaren. Let’s
        Bake bietet dabei lediglich die Möglichkeit, einen Versanddienstleister zu beauftragen.</p>
      <h2> 6. Schadenersatz</h2>
      <p>Etwaige Schadenersatzansprüche sind gegen den Verkäufer, nicht aber die Let’s Bake GbR zu
        stellen.</p>
      <h2> 7. Gerichtsstand</h2>
      <p>Gerichtsstand für beide Teile ist Osnabrück.</p>
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const {string} = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
