import React from 'react';
import {Link} from 'gatsby';

import './footer.scss';
import Container from './container.js';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <div className="footer-links">
            <a className="footer-link" href="https://discord.gg/h3nfZmqKYN" target="_blank" rel="noreferrer">Discord</a>
            <a className="footer-link" href="https://facebook.com/outyardhackathon" target="_blank" rel="noreferrer">Facebook</a>
            <a className="footer-link" href="https://github.com/outyard" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
