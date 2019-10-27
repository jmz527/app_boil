import React from 'react';

// https://levelup.gitconnected.com/unit-testing-higher-order-components-using-enzyme-b9bfad668a42
const withConditional = Component =>
  function withConditionalComponent({ condition, ...props }) {
    if (condition) {
      return <Component {...props} />;
    }
    return null;
  };

export default withConditional;
