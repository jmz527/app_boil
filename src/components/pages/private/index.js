// Main Imports
import React from 'react';
import { withRouter } from 'react-router-dom';

// Style Imports
// import './index.scss';

const privatePage = () => (
  <div className='privatePage'>
    <h2>THIS PAGE IS PRIVATE</h2>
    <p>YOU HAVE ACCESSED A PRIVATE PAGE!!!</p>
  </div>
);

export default withRouter(privatePage);
