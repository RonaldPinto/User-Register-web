import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const Context = React.createContext();
const flowid = uuid();

class Provider extends Component {
  constructor(props = {}) {
    super(props);
    const { configuration: data = {} } = props;
    this.state = {
      configuration: {
        flowid,
        data,
      },
    };
  }

  render() {
    const {
      configuration,
    } = this.state;

    const {
      children,
    } = this.props;

    return (
      <Context.Provider
        value={{
          configuration,
        }}>
        {children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node,
  configuration: PropTypes.oneOfType([PropTypes.any]),
};

Provider.defaultProps = {
  children: null,
  configuration: {},
};

const { Consumer } = Context;

export default Provider;
export {
  Context, Provider, Consumer, flowid,
};
