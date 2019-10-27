// Main Imports
import React from 'react';
import PropTypes from 'prop-types';

// Custom Imports
import Aux from '~/components/Aux';
import Navigation from '~/components/Navigation';
import UserBar from '~/components/UserBar';

// Style
import './index.scss';

const layout = (props) => (
  <Aux className='layout'>
    <nav className='navigation'>
      <Navigation />
    </nav>
    <hr />
    <UserBar />
    <hr />
    <main className='main'>
      { props.children }
    </main>
  </Aux>
);
layout.propTypes = {
  children: PropTypes.object
};

export default layout;
