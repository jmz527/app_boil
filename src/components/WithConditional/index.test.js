// Main Imports
import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Custom Imports
import WithConditional from '~/components/WithConditional';

Enzyme.configure({ adapter: new Adapter() });

const Component = () => (<h3>Test Component.</h3>);

describe('<WithConditional />', () => {
  it('should render the component only when the condition passes', () => {
    const ConditionalComponent = WithConditional(Component);
    const wrapper = shallow(
      <ConditionalComponent condition={true} />
    );
    expect(wrapper.html()).not.toBe(null);
  });

  it('should return null when the condition fails', () => {
    const ConditionalComponent = WithConditional(Component);
    const wrapper = shallow(
        <ConditionalComponent condition={false} />
      );
    expect(wrapper.html()).toBe(null);
  });
});
