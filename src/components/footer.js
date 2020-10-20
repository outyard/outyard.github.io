import React from 'react';
import {Link} from 'gatsby';

import Container from './container';

import './footer.scss';

export default () => (
  <footer className="footer">
    <Container>
      <div className="footer-wrapper">
        <Link to="/"><img className="footer-logo" src="/images/logo-gray.svg" alt="" /></Link>
        <div className="footer-links">
          <p><Link className="footer-link" to="/about">About</Link></p>
          <p><a className="footer-link" href="https://facebook.com/outyardhackathon" target="_blank">Facebook</a></p>
          <p><a className="footer-link" href="https://discord.gg/WeTRnTc" target="_blank">Discord</a></p>
          <p><a className="footer-link" href="https://github.com/outyard" target="_blank">GitHub</a></p>
        </div>
      </div>
    </Container>
  </footer>
);
