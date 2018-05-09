import React, { Component as Comp } from 'react';
import { string, oneOf, func } from 'prop-types';
import { reactAutoBind } from 'funsee-utils';

import * as style from './style.scss';

@reactAutoBind()
class Input extends Comp {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { value, type, placeholder } = this.props;
    return (
      <input value={value} type={type} onChange={this.handleChange} placeholder={placeholder} className={style.input} />
    );
  }
}

Input.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
  onChange: (value) => {
    console.log('input changed: ', value);
  }
};

Input.propTypes = {
  value: string,
  type: oneOf(['text', 'password']),
  onChange: func,
  placeholder: string
};

export default Input;
