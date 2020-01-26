import React from 'react';

import Container from './container';

import './header.scss';

const Header = () => (
  <header className="header">
    <Container>
      <a className="header-logo-link" href="/"><img className="header-logo" src="/images/logo-blue.svg" alt="Outyard" /></a>
      <div className="header-nav">
        <p className="header-nav-item">Hackathon @ Uppsala University</p>
      </div>
    </Container>
  </header>
);

export default Header;
