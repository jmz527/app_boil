// Main Imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Custom Imports
import LoginPage from '~/pages/login';

configure({adapter: new Adapter()});

describe('<LoginPage />', () => {
  let wrapper = shallow(
    <LoginPage
      loginSuccess={true}
      currentUser={{}}
      location={{ state: { from: { pathname: '/about' } }}}
      authorizeUserSuccess={() => {}}
      authorizeUserFailure={() => {}}
    />
  );

  it('should render a Redirect when logged in', () => {
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });

});
