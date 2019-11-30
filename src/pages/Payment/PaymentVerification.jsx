import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button, Typography, Card, CardContent, CardActions,
} from '@material-ui/core';
import styles from './PaymentVerification.styles';

const PaymentVerification = (props) => {
  const {
    classes, data, cancelPayment, confirmPayment,
  } = props;

  return (
    <Card className={ classes.root } elevation={ 0 }>
      <CardContent>
        <Typography className={ classes.title } color='textSecondary' gutterBottom>
          { data.receiptMsgCustomer && data.receiptMsgCustomer }
        </Typography>
        <Typography variant='body2' component='p'>
          { data.paymentInfoList
          && data.paymentInfoList[ 0 ]
          && data.paymentInfoList[ 0 ].paymentActionList
          && `${data.paymentInfoList[ 0 ].paymentActionList.reduce((acc, obj) => acc + obj.amount, 0)} TL` }
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          size='small'
          color='primary'
          className={ classes.button }
          disableRipple
          disableFocusRipple
          onClick={ confirmPayment }
        >
          Pay
        </Button>
        <Button
          variant='contained'
          size='small'
          color='secondary'
          className={ classes.button }
          disableRipple
          disableFocusRipple
          onClick={ cancelPayment }
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

PaymentVerification.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  data: PropTypes.shape({
    returnCode: PropTypes.number.isRequired,
    returnDesc: PropTypes.string.isRequired,
    receiptMsgCustomer: PropTypes.string.isRequired,
    receiptMsgMerchant: PropTypes.string.isRequired,
    paymentInfoList: PropTypes.arrayOf(
      PropTypes.shape({
        paymentProcessorID: PropTypes.number.isRequired,
        paymentActionList: PropTypes.arrayOf(
          PropTypes.shape({
            paymentType: PropTypes.number.isRequired,
            amount: PropTypes.number.isRequired,
            currencyID: PropTypes.number.isRequired,
            vatRate: PropTypes.number.isRequired,
          }).isRequired,
        ),
      }).isRequired,
    ),
    QRdata: PropTypes.string,
  }).isRequired,
  cancelPayment: PropTypes.func.isRequired,
  confirmPayment: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(PaymentVerification);
