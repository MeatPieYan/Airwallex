import React from 'react';
import { string } from 'prop-types';

import style from './style.scss';

const Title = ({ text }) => (
  <h1 className={style.title}>{text}</h1>
);

Title.propTypes = {
  text: string.isRequired
};

export default Title;
