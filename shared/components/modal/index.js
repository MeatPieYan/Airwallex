import React from 'react';
import { bool, string, func, node } from 'prop-types';
import classNames from 'classnames';

import * as style from './style.scss';
import Button from '../button';
import Mask from '../mask';
import Title from '../title';
import Splitter from '../splitter';

const Modal = ({
  children,
  visible,
  title,
  okTxt,
  onBtnClick,
  onMaskClick,
  width
}) => {
  const clazz = classNames({
    [style.container]: true,
    [style.hidden]: !visible
  });

  return [(
    <Mask visible={visible} onClick={onMaskClick} key='requestMask' />
  ), (
    <div className={clazz} style={width ? { width } : { width: '60%' }} key='requestModal'>
      { title ? (<div className={style.toolbar}><Title text={title} /><Splitter /></div>) : ''}
      { children }
      <div className={style.toolbar}>
        <Button text={okTxt} onClick={onBtnClick} />
      </div>
    </div>
    )];
};

Modal.defaultProps = {
  visible: false,
  title: '',
  okTxt: '',
  onBtnClick: () => {
    console.log('click button');
  },
  onMaskClick: () => {
    console.log('click mask in modal');
  },
  width: ''
};

Modal.propTypes = {
  children: node.isRequired,
  visible: bool,
  title: string,
  okTxt: string,
  onBtnClick: func,
  width: string
};

export default Modal;
