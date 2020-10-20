import React from 'react';
import {Link} from 'gatsby';

import Container from './container';

import './header.scss';

export default () => (
  <header className="header">

    <Container>
      <div className="header-wrapper">
        <Link className="header-logo-link" to="/">
          <img className="header-logo" src="/images/logo-white.svg" alt="Outyard" />
        </Link>
      </div>
    </Container>

    <nav class="header-nav">
      <Container>
        <div className="header-nav-links">
          <Link className="header-nav-link" to="/about">About</Link>
          <a className="header-nav-link" href="https://facebook.com/outyardhackathon" target="_blank">Facebook</a>
          <a className="header-nav-link" href="https://discord.gg/WeTRnTc" target="_blank">Discord</a>
        </div>
      </Container>
    </nav>

  </header>
);
