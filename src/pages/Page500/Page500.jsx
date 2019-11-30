import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import styles from './Page500.styles';

const Page500 = () => <div>500</div>;

export default withRouter(withStyles(styles, { withTheme: true })(Page500));
