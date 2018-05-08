import React from 'react';
import { element, string, arrayOf } from 'prop-types';
import classNames from 'classnames';

import * as style from './style.scss';

const defaultProps = {
  justifyContent: 'center',
  flexDirection: 'row',
  clazz: ''
};

const propTypes = {
  children: arrayOf(element).isRequired,
  justifyContent: string,
  flexDirection: string,
  clazz: string
};

const Flexbox = ({
  children,
  justifyContent,
  flexDirection,
  clazz
}) => {
  const classname = classNames(style.container, style[`js_${justifyContent}`], style[`fd_${flexDirection}`], clazz);

  return (
    <div className={classname}>
      {children}
    </div>
  );
};

Flexbox.defaultProps = defaultProps;
Flexbox.propTypes = propTypes;

export default Flexbox;
