import React, { Component as Comp } from 'react';
import connect from 'funsee/connect';
import { reactAutoBind } from 'funsee-utils';

import * as style from './style.scss';
import { Button, Flexbox, Form, Input, Modal } from '../../components';
import { showRequestModal, hiddenRequestModal, inputChange } from './action';

@connect(
  state => ({
    showRequestModalFlag: state.module.login.showRequestModalFlag,
    form: state.module.login.form
  }),
  {
    showRequestModal,
    hiddenRequestModal,
    inputChange
  }
)
@reactAutoBind()
export default class Login extends Comp {
  showRequest() {
    this.props.showRequestModal();
  }

  hiddenRequest() {
    this.props.hiddenRequestModal();
  }

  inputChange(key, value) {
    this.props.inputChange(key, value);
  }

  render() {
    const { showRequestModalFlag, form } = this.props;

    return [(
      <Flexbox justifyContent='center' flexDirection='column' clazz={style.flexbox} key='flexbox'>
        <p className={style.title}>A better way</p>
        <p className={style.title}>to enjoy every day.</p>
        <p className={style.subTitle}>Be the first to know when we launch.</p>
        <div className={style.btn}>
          <Button text='Request an invite' className={style.button} onClick={this.showRequest} />
        </div>
      </Flexbox>
    ), (
      <Modal
        key='requestModal'
        visible={showRequestModalFlag}
        title='Request on invite'
        width='300px'
        okTxt='send'
        // onBtnClick={this.showRequest}
        onMaskClick={this.hiddenRequest}
      >
        <Form value={form} onChange={this.inputChange} >
          <Input placeholder='Full name' rules={value => value.length >= 4} name='name' />
          <Input placeholder='Email' rules={/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/} name='email' />
          <Input placeholder='Confirm email' name='confirmEmail' />
        </Form>
      </Modal>
      )];
  }
}
