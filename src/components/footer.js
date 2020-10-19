import React from 'react';

import Container from './container';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <Container>
      <div className="footer-wrapper">
        <img className="footer-logo" src="/images/logo-blue.svg" alt="" />
        <div className="footer-links">
          <p><a href="mailto:carl.enlund@gmail.com">Contact</a></p>
          <p><a href="https://facebook.com/outyardhackathon" target="_blank">Facebook</a></p>
          <p><a href="https://discord.gg/WeTRnTc" target="_blank">Discord</a></p>
          <p><a href="https://github.com/outyard" target="_blank">GitHub</a></p>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
