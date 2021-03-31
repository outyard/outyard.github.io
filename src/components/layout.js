import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';

import Header from './header';
import Footer from './footer';

import './layout.scss';

export default ({children}) => (
  <>
    <main className="main">
      <Header />
      {children}
    </main>
    <Footer />
  </>
);
