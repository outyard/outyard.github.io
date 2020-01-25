import React from 'react';

import Container from './container';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <Container>
      <p><a href="mailto:carl.enlund@gmail.com">Contact</a></p>
      <p><a href="https://github.com/outyard">GitHub</a></p>
    </Container>
  </footer>
);

export default Footer;
