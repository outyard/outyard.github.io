import React from 'react';

import Header from './header';
import Footer from './footer';
import '../styles/reset.scss';
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
