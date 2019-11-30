import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import styles from './Page404.styles';

const Page404 = () => <div>404 Not Found</div>;

export default withRouter(withStyles(styles, { withTheme: true })(Page404));
