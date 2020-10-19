import React from 'react';
import {Link} from 'gatsby';

import Container from './container';

import './header.scss';

const Header = () => (
  <header className="header">
    <Container wider="true">
      <div className="header-wrapper">
        <Link className="header-logo-link" to="/">
          <img className="header-logo" src="/images/logo-white.svg" alt="Outyard" />
        </Link>
        <p className="header-subtitle">Hackathon at Uppsala University</p>
      </div>
    </Container>

    <nav class="header-nav">
      <Container wider="true">
        <div className="header-nav-links">
          <a className="header-nav-link" href="https://discord.gg/WeTRnTc" target="_blank">Discord</a>
          <a className="header-nav-link" href="https://facebook.com/outyardhackathon" target="_blank">Facebook</a>
          <a className="header-nav-link" href="mailto:carl.enlund@gmail.com">Contact</a>
        </div>
      </Container>
    </nav>
  </header>
);

export default Header;
