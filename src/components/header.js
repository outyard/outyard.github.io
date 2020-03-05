import React from 'react';
import {Link} from 'gatsby';

import Container from './container';

import './header.scss';

const Header = () => (
  <header className="header">
    <Container>
      <Link className="header-logo-link" to="/"><img className="header-logo" src="/images/logo-blue.svg" alt="Outyard" /></Link>
      <div className="header-nav">
        <p className="header-nav-item">Hackathon @ Uppsala University</p>
      </div>
    </Container>
  </header>
);

export default Header;
