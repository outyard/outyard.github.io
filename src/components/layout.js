import React from 'react';

import './layout.scss';
import Navbar from './navbar.js';
import Footer from './footer.js';

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
