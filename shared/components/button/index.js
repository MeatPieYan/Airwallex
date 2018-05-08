import React from 'react';
import { string, func } from 'prop-types';
import className from 'classnames';

import * as style from './style.scss';

const Button = ({ text, onClick, custClass }) => { 
  const clazz = className(style.btn, custClass)
  return (
    <button onClick={onClick} className={clazz}>{text}</button>
  )
};

Button.defaultProps = {
  text: '',
  onClick: () => {},
  custClass: ''
};

Button.propTypes = {
  text: string,
  onClick: func,
  custClass: string
};

export default Button;
