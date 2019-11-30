import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Copyright = () => (
  <Typography variant='body2' color='textSecondary' align='center'>
    { 'Copyright ©' }
    { new Date().getFullYear() }{ ' ' }
    <Link color='inherit' to='/'>
      Token Inc.
    </Link>{ ' ' }
    All Rights Reserved.
  </Typography>
);

export default Copyright;
