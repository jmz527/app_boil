// Main Imports
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Style Imports
import './index.scss';

const navigation = () => (
  <div className='navigation'>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/topics'>Topics</Link>
      </li>
      <li>
        <Link to='/private'>Private</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  </div>
);

export default withRouter(navigation);
