import React from 'react';
import {Link} from 'gatsby';

import './footer.scss';
import Container from './container.js';

export default () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrapper">
          <div className="footer-links">
            <p><a className="footer-link" href="https://discord.gg/h3nfZmqKYN" target="_blank" rel="noreferrer">Discord</a></p>
            <p><a className="footer-link" href="https://facebook.com/outyardhackathon" target="_blank" rel="noreferrer">Facebook</a></p>
            <p><a className="footer-link" href="mailto:carl@crl.io" target="_blank" rel="noreferrer">Contact</a></p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
