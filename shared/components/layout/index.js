import React from 'react';
import { element } from 'prop-types';

import * as style from './style.scss';
import './reset.scss';

const Layout = ({ children }) => (
  <section className={style.container}>
    <header className={style.header}>
      <span>BROCCOLI & CO.</span>
    </header>
    <article className={style.content}>
      { children }
    </article>
    <footer className={style.footer}>
      <p>Made with ♥ in Melbourne.</p>
      <p>&copy; 2016 Broccoli & Co. All rights reserved.</p>
    </footer>
  </section>
);

Layout.propTypes = {
  children: element.isRequired
};

export default Layout;
