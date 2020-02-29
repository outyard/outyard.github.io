import React from 'react';

import Container from './container';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <Container>
      <img className="footer-logo" src="/images/logo-yellow.svg" alt="" />
      <div className="footer-links">
        <p><a href="mailto:carl.enlund@gmail.com">Contact</a></p>
        <p><a href="https://github.com/outyard" target="_blank">Outyard on GitHub &#x2197;</a></p>
      </div>
    </Container>
  </footer>
);

export default Footer;
