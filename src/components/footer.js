import React from 'react';

import Container from './container';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <Container>
      <img className="footer-logo" src="/images/logo-yellow.svg" alt="" />
      <div class="footer-text">
        <p>Outyard is an independently organized hackathon at Uppsala University. It is meant to inspire personal programming projects and is a great way to learn and work under intense deadlines.</p>
      </div>
      <div className="footer-links">
        <p><a href="mailto:carl.enlund@gmail.com">Contact</a></p>
        <p><a href="https://facebook.com/outyardhackathon" target="_blank">Facebook &#x2197;</a></p>
        <p><a href="https://github.com/outyard" target="_blank">GitHub &#x2197;</a></p>
      </div>
    </Container>
  </footer>
);

export default Footer;
