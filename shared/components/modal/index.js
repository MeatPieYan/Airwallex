import React from 'react';
import { element, oneOf, arrayOf, bool, string, func } from 'prop-types';
import classNames from 'classnames';

import * as style from './style.scss';
import Button from '../button';
import Title from '../title';

const Modal = ({
  children,
  visible,
  title,
  okTxt,
  onOk,
  width
}) => {
  const clazz = classNames({
    [style.container]: true,
    [style.hidden]: !visible
  });

  return (
    <div className={clazz} style={width ? { width } : { width: '60%' }}>
      { title ? (<Title text={title} />) : ''}
      { children }
      <Button text={okTxt} onClick={onOk} />
    </div>
  );
};

Modal.defaultProps = {
  visible: false,
  title: '',
  okTxt: '',
  onOk: () => {},
  width: ''
};

Modal.propTypes = {
  children: oneOf(element, arrayOf(element)).isRequired,
  visible: bool,
  title: string,
  okTxt: string,
  onOk: func,
  width: string
};

export default Modal;
