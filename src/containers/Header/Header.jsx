import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  Avatar,
} from '@material-ui/core';
import styles from './Header.styles';

const Header = (props) => {
  const { classes, history } = props;
  const currentUrl = window.location.pathname;

  const handleClick = (url) => {
    history.push(url);
  };

  return (
    <>
      <AppBar position='fixed' color='default' elevation={ 0 } className={ classes.header }>
        <Toolbar>
          <Link to='/' className={ classes.logo }>
            <Avatar alt='Token Case Study' src='/imgs/logo.png' className={ classes.mainAvatar } />
          </Link>

          <div className={ classes.grow } />
          <div className={ classes.sectionDesktop }>
            { currentUrl === '/new-form'
            && (
            <Button
              variant='contained'
              color='primary'
              disableRipple
            >
              Save
            </Button>
            ) }
            { currentUrl === '/forms'
            && (
            <Button
              variant='contained'
              color='primary'
              disableRipple
              onClick={ () => handleClick('/new-form') }
            >
              New Form
            </Button>
            ) }
            { currentUrl === '/components'
            && (
            <Button
              variant='contained'
              color='primary'
              disableRipple
              onClick={ () => handleClick('/new-component') }
            >
              New Component
            </Button>
            ) }
          </div>
        </Toolbar>
        <span className={ classes.divider } />
      </AppBar>
    </>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Header));
