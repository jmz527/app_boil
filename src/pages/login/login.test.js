// Main Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Custom Imports
import { LoginPage } from '~/pages/login';

Enzyme.configure({ adapter: new Adapter() });

describe('<LoginPage />', () => {
  it('should render a Redirect when logged in', () => {
    const props = {
      loginSuccess: true,
      currentUser: {},
      location: { state: { from: { pathname: '/about' } }},
      authorizeUserSuccess: () => {},
      authorizeUserFailure: () => {}
    }

    const wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
