import React from 'react';
import { node, object, func } from 'prop-types';
import { reactAutoBind } from 'funsee-utils';

@reactAutoBind()
class Form extends React.Component {
  componentWillMount() {
    React.Children.forEach(this.props.children, (child) => {
      if (!child.props.name) {
        throw Error('Please define props[name] for each input');
      }
      this.props.onChange(child.props.name, '', true);
    });
  }

  onValueChange(name) {
    return (value, hasError) => {
      this.props.onChange(name, value, hasError);
    };
  }

  render() {
    const { children, value } = this.props;
    return (
      <form>
        {
          React.Children.map(children, (child, i) => {
            if (!child.props.name) {
              throw Error('Please define props[name] for each input');
            }
            return React.cloneElement(child, {
              onChange: this.onValueChange(child.props.name),
              value: value[child.props.name],
              key: i
            });
          })
        }
      </form>
    );
  }
}

Form.defaultProps = {
  value: {},
  onChange: (key, value) => {
    console.log(`change ${key} as ${value}`);
  }
};

Form.propTypes = {
  children: node.isRequired,
  value: object,
  onChange: func
};

export default Form;
