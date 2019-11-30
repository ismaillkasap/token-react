import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  withStyles, Paper, Grid,
} from '@material-ui/core';
import classNames from 'classnames';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined';
import SuccessIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import styles from './Alert.styles';

const Header = (props) => {
  const { classes, message, messageType } = props;

  return (
    <Paper
      className={ classNames(classes.message, {
        [ classes.info ]: messageType === 'info',
        [ classes.error ]: messageType === 'error',
        [ classes.success ]: messageType === 'success',
      }) }
      elevation={ 0 }
    >
      <Grid container justify='center' alignItems='center'>
        <Grid item className={ classes.icon }>
          { messageType === 'info' && <InfoIcon fontSize='small' /> }
          { messageType === 'error' && <ErrorIcon fontSize='small' /> }
          { messageType === 'success' && <SuccessIcon fontSize='small' /> }
        </Grid>
        <Grid item>
          { message }
        </Grid>
      </Grid>
    </Paper>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  messageType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Header));
