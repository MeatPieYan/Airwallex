import React from 'react';
import { bool, func } from 'prop-types';
import className from 'classnames';
import * as style from './style.scss';

const Mask = ({ visible, onClick }) => {
  const clazz = className({
    [style.container]: true,
    [style.hidden]: !visible
  });

  return (
    <div className={clazz} onClick={onClick} />
  );
};

Mask.defaultProps = {
  visible: false,
  onClick: () => {
    console.log('Click Mask');
  }
};

Mask.propTypes = {
  visible: bool,
  onClick: func
};

export default Mask;
