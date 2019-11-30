import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from 'containers/Header';
import Footer from 'containers/Footer';
import styles from './MainContainer.styles';

const MainContainer = (props) => {
  const { children, classes } = props;

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <Header />

      <main>
        <Container className={ classes.cardGrid } maxWidth='xl'>
          { children }
        </Container>
      </main>

      <Footer />
    </div>
  );
};

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(
  withStyles(styles, { withTheme: true })(MainContainer),
);
