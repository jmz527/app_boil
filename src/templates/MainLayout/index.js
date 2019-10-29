// Main Imports
import React from 'react';
import PropTypes from 'prop-types';

// Custom Imports
import Aux from '~/components/Aux';
import Navigation from '~/components/Navigation';
import Breadcrumbs from '~/components/Breadcrumbs';
import UserBar from '~/components/UserBar';

// Style
import './index.scss';

const MainLayout = (props) => (
  <Aux className='mainLayout'>
    <nav className='navigation'>
      <Navigation />
    </nav>
    <hr />
    <Breadcrumbs />
    <hr />
    <UserBar />
    <hr />
    <main className='main'>
      { props.children }
    </main>
  </Aux>
);
MainLayout.propTypes = {
  children: PropTypes.object
};

export default MainLayout;
