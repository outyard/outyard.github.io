import React from 'react';

import './layout.scss';
import Header from './header.js';
import Footer from './footer.js';

export default ({children}) => (
  <>
    <main className="main">
      <Header />
      {children}
    </main>
    <Footer />
  </>
);
