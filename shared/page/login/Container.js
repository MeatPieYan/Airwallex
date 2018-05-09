import React, { Component as Comp } from 'react';
import connect from 'funsee/connect';
import { reactAutoBind } from 'funsee-utils';

import * as style from './style.scss';
import { Button, Flexbox, Form, Input, Modal } from '../../components';
import { showRequestModal, hiddenRequestModal, inputChange, sendReq, hiddenSuccessModal } from './action';

@connect(
  state => ({
    showRequestModalFlag: state.module.login.showRequestModalFlag,
    showSuccessModalFlag: state.module.login.showSuccessModalFlag,
    form: state.module.login.form,
    errorMsg: state.common.errorMsg,
    loading: state.common.loading
  }),
  {
    showRequestModal,
    hiddenRequestModal,
    inputChange,
    sendReq,
    hiddenSuccessModal
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

  hiddenSuccess() {
    this.props.hiddenSuccessModal();
  }

  inputChange(key, value, hasError) {
    this.props.inputChange(key, value, hasError);
  }

  submit() {
    const validation = this.props.form.validate;
    const keys = Object.keys(validation);
    const hasError = keys.some(key => validation[key]);
    if (!hasError) {
      this.props.sendReq(this.props.form.value);
    }
  }

  render() {
    const {
      showRequestModalFlag,
      showSuccessModalFlag,
      form,
      errorMsg,
      loading
    } = this.props;

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
        onBtnClick={this.submit}
        onMaskClick={this.hiddenRequest}
        loading={loading}
        loadingTxt='sending, please wait...'
      >
        <Form value={form.value} onChange={this.inputChange}>
          <Input placeholder='Full name' rules={value => value.length >= 4} name='name' />
          <Input placeholder='Email' rules={/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/} name='email' />
          <Input placeholder='Confirm email' rules={value => value === form.value.email} name='confirmEmail' />
        </Form>

        <div>{errorMsg}</div>
      </Modal>
      ), (
        <Modal
          visible={showSuccessModalFlag}
          title='All done!'
          width='350px'
          okTxt='ok'
          onBtnClick={this.hiddenSuccess}
          onMaskClick={this.hiddenSuccess}
        >
          <div sytle='text-align: center;'>Successful~</div>
        </Modal>
      )];
  }
}
