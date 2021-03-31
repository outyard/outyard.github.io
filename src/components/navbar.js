import React from 'react';
import {Link} from 'gatsby';

import './navbar.scss';
import Container from './container.js';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <Container>
          <nav className="navbar-nav">
            <div className="navbar-nav-logo-wrapper">
              <Link className="navbar-nav-link navbar-nav-logo" to="/">
                <img className="navbar-nav-logo-image" src="/media/outyard/logo-cyan.svg" alt="Outyard" />
              </Link>
            </div>
            <div className="navbar-nav-links">
              <a className="navbar-nav-link" href="https://discord.gg/h3nfZmqKYN" target="_blank" rel="noreferrer">Discord</a>
              <Link className="navbar-nav-link" to="/about">About</Link>
            </div>
          </nav>
        </Container>
      </div>
    </nav>
  );
}
