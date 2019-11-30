import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Copyright from 'containers/Copyright';
import styles from './Footer.styles';

const Footer = (props) => {
  const { classes } = props;

  return (
    <footer className={ classes.footer }>
      <Copyright />
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(withStyles(styles, { withTheme: true })(Footer));
