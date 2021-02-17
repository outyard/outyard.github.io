import React from 'react';
import {Link} from 'gatsby';

import Container from './container';

import './header.scss';

export default () => (
  <header className="header">
    &nbsp;
    <div className="header-wrapper">
      <Container>
	<nav className="header-nav">
	  <div className="header-nav-links">
	    <Link className="header-nav-link header-nav-logo" to="/">
	      <img className="header-nav-logo-image" src="/images/logo-cyan.svg" alt="Outyard" />
	    </Link>
	    <a className="header-nav-link" href="https://discord.gg/WeTRnTc" target="_blank">Discord</a>
	    <Link className="header-nav-link" to="/about">About</Link>
	  </div>
	</nav>
      </Container>
    </div>
  </header>
);
