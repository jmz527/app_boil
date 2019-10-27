// Main Imports
import React from 'react';
import { withRouter } from 'react-router-dom';

// Style Imports
// import './index.scss';

const AboutPage = () => (
  <div className='aboutPage'>
    <h2>About</h2>
    <p>
      {`
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, saepe, perferendis. \
        Dolores nulla fugit commodi ipsa quis quas ipsam adipisci facere at obcaecati! \
        Quia architecto, incidunt, ex placeat sunt soluta.
      `}
    </p>
  </div>
);

export default withRouter(AboutPage);
