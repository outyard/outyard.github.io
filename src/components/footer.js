import React from 'react';
import {Link} from 'gatsby';

import Container from './container';

import './footer.scss';

export default () => (
  <footer className="footer">
    <Container>
      <div className="footer-wrapper">
        <div className="footer-logo-wrapper">
          <Link to="/" className="footer-logo-link">
            <img className="footer-logo" src="/images/logo-black.svg" alt="" />
          </Link>
        </div>
        <div className="footer-links">
          <p><a className="footer-link" href="mailto:carl@crl.io" target="_blank">Contact</a></p>
          <p><a className="footer-link" href="https://facebook.com/outyardhackathon" target="_blank">Facebook</a></p>
          <p><a className="footer-link" href="http://github.com/outyard" target="_blank">GitHub</a></p>
        </div>
      </div>
    </Container>
  </footer>
);
