import React from 'react';
import {Link} from 'gatsby';

import Container from './container';

import './header.scss';

const Header = () => (
  <header className="header">
    <Container wide="true">
      <div className="header-wrapper">
        <Link className="header-logo-link" to="/">
          <img className="header-logo" src="/images/logo-white.svg" alt="Outyard" />
        </Link>
        <p className="header-subtitle">Hackathon at Uppsala University</p>
      </div>
    </Container>
  </header>
);

export default Header;
