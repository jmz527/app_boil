// Main Imports
import React from 'react';
import { withRouter } from 'react-router-dom';

// Custom Imports
import BuggyCounter from '~/components/BuggyCounter';
import ErrorBoundary from '~/components/ErrorBoundary';
import withConditional from '~/components/WithConditional';

// Style Imports
// import './index.scss';

const MyComponent = () => (
  <div>
    This is MyComponent, conditionally...
  </div>
);

const ConditionalComponent = withConditional(MyComponent);

const HomePage = () => (
  <div className='homePage'>
    <h2>Home</h2>

    {/* BuggyCounter without ErrorBoundary */}
    <div style={{ position: 'relative', display: 'inline-block', width: '50%' }}>
      <label>BuggyCounter without ErrorBoundary</label>
      <BuggyCounter />
    </div>

    {/* BuggyCounter with ErrorBoundary */}
    <div style={{ position: 'relative', display: 'inline-block', width: '50%' }}>
      <label>BuggyCounter with ErrorBoundary</label>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>

    <ConditionalComponent condition={3 < 4} />

  </div>
);

export default withRouter(HomePage);
