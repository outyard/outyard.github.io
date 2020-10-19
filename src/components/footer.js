import React from 'react';
import {Link} from 'gatsby';

import Container from './container';

import './footer.scss';

export default () => (
  <footer className="footer">
    <Container>
      <div className="footer-wrapper">
        <img className="footer-logo" src="/images/logo-black.svg" alt="" />
        <div className="footer-links">
          <p><a className="footer-link" href="https://discord.gg/WeTRnTc" target="_blank">Discord</a></p>
          <p><a className="footer-link" href="https://facebook.com/outyardhackathon" target="_blank">Facebook</a></p>
          <p><Link className="footer-link" to="/about">About</Link></p>
        </div>
      </div>
    </Container>
  </footer>
);
