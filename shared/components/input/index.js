import React, { Component as Comp } from 'react';
import { string, oneOf, func, any } from 'prop-types';
import { reactAutoBind } from 'funsee-utils';
import className from 'classnames';

import * as style from './style.scss';

@reactAutoBind()
class Input extends Comp {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      hasError: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  handleBlur(e) {
    this.checkInput(e);
  }

  checkRegExp(e) {
    const reg = new RegExp(this.props.rules);
    if (!reg.test(e.target.value)) {
      this.setState({ hasError: true });
      return;
    }
    this.setState({ hasError: false });
  }

  checkFunction(e, fn) {
    if (fn(e.target.value)) {
      this.setState({ hasError: false });
      return;
    }
    this.setState({ hasError: true });
  }

  checkInput(e) {
    if (typeof this.props.rules === 'function') {
      this.checkFunction(e, this.props.rules);
      return;
    }

    this.checkRegExp(e);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);

    this.checkInput(e);
  }

  render() {
    const { value, type, placeholder } = this.props;
    const clazz = className({
      [style.input]: true,
      [style.error]: this.state.hasError
    });

    return (
      <input
        value={value}
        type={type}
        onChange={this.handleChange}
        placeholder={placeholder}
        className={clazz}
        onBlur={this.handleBlur}
      />
    );
  }
}

Input.defaultProps = {
  rules: '',
  value: '',
  type: 'text',
  placeholder: '',
  onChange: (value) => {
    console.log('input changed: ', value);
  }
};

Input.propTypes = {
  rules: any,
  value: string,
  type: oneOf(['text', 'password']),
  onChange: func,
  placeholder: string
};

export default Input;
