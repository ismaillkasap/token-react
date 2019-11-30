import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ (props) => (<Component key='component' { ...props } />) }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

PrivateRoute.defaultProps = {
  location: window.location,
  user: null,
};

export default PrivateRoute;
