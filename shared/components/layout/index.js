import React, { Component as C } from 'react';

import './reset.scss';

const Layout = ({children}) => (
  <section>
    <header>
      <span>BROCCOLI & CO.</span>
    </header>
    <article>
      { children }
    </article>
    <footer>
      <p>Made with in Melbourne.</p>
      <p>&copy; 2016 Broccoli & Co. All rights reserved.</p>
    </footer>
  </section>
);

export default Layout;
