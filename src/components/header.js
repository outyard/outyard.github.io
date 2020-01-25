import React from 'react';

import Container from './container';

import './header.scss';

const Header = () => (
  <header className="header">
    <Container>
      <img className="header-logo" src="/images/logo-blue.svg" alt="Outyard" />
      <div className="header-nav">
        <p className="header-nav-item">Hackathon @ Uppsala University</p>
      </div>
    </Container>
  </header>
);

export default Header;
