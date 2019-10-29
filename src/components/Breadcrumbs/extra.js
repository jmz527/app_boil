var here = location.href.split('/').slice(3);

var parts = [{ "text": 'Home', "link": '/' }];

for( var i = 0; i < here.length; i++ ) {
    var part = here[i];
    var text = part.toUpperCase();
    var link = '/' + here.slice( 0, i + 1 ).join('/');
    parts.push({ "text": text, "link": link });
}






// Main Imports
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Custom Imports
import { toTitleCase } from '~/utilities';

const Breadcrumbs = (props) => {
  let sections, itemPath;
  let pathArr, display, breadcrumbStyle, breadcrumbClassname = '';

  const { location: { pathname } } = props;
  console.log(pathname);
  console.log(props);

  if (pathname === '/') {
    // If we are on the home page, just return the home
    sections = [{ key: 'Home', itemPath: '/', content: 'Home', link: false }];
    display = 'none'; // <-- Comment this out if you want the breadcrumbs to be displayed on '/'
  } else {

    // If we are on a nested page, create the breadcrumbs based on the url pathname
    pathArr = pathname.split('/');
    display = 'block';

    sections = pathArr.map((pathItem, index) => {

      let key = 'Home', content = 'Home';
      const link = false;

      if (index === pathArr.length - 1) {
        // The last item in the path array should be just plain txt (not a link)

        pathItem = pathItem.split('-').join(' ');
        key = pathItem;
        itemPath = '';
        content = toTitleCase(pathItem);
      } else if (index !== 0) {
        // All items inbetween should be linked
        itemPath = pathArr.slice(1, index + 1).join('/');

        key = pathItem;
        content = toTitleCase(pathItem);
      }

      return { key, itemPath, content, link };
    });
  }

  breadcrumbStyle = { padding: '1em 0 0 2.5em', position: 'absolute', zIndex: 1000, display };
  console.log(sections);

  return (
    <div>
      <ul>
        { sections.forEach(section => <li>{`${JSON.stringify(section)}`}</li>)}
      </ul>

      <p>{`${JSON.stringify(breadcrumbStyle)}`}</p>
      <p>{`${JSON.stringify(breadcrumbClassname)}`}</p>
    </div>
  );
};
Breadcrumbs.propTypes = {
  loginSuccess: PropTypes.bool,
  location: PropTypes.object
};

function mapStateToProps(state) {
  return {
    loginSuccess: state.user.loginSuccess
  };
}

export default withRouter(connect(mapStateToProps)(Breadcrumbs));

