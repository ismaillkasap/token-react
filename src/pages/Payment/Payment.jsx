import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper, Button, Grid, Stepper, Step, StepLabel, Typography, StepContent, Container,
} from '@material-ui/core';
import usePaymentReducer from 'pages/Payment/actions';
import PaymentVerification from 'pages/Payment/PaymentVerification';
import Alert from 'containers/Alert';
import styles from './Payment.styles';

const Payment = (props) => {
  const { classes } = props;
  const [ {
    paymentInformation, step, message, messageType,
  }, readQRCode, cancelPayment, confirmPayment ] = usePaymentReducer();

  const getSteps = () => [ 'Reading payment information', 'Verification', 'Result' ];
  const steps = getSteps();

  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <Typography>
            We&apos;re doing all the work for you to pay fast, just give us a moment.
          </Typography>
        );
      case 1:
        return (
          <PaymentVerification
            data={ paymentInformation }
            cancelPayment={ cancelPayment }
            confirmPayment={ confirmPayment }
          />
        );
      case 2:
        return <Alert messageType={ messageType } message={ message } />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Paper elevation={ 0 } className={ classes.root }>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Container maxWidth='sm'>
          { step > -1
           && (
           <Stepper activeStep={ step } orientation='vertical'>
             { steps.map((label, index) => (
               <Step key={ label }>
                 <StepLabel>{ label }</StepLabel>
                 <StepContent>
                   { getStepContent(index) }
                 </StepContent>
               </Step>
             )) }
           </Stepper>
           ) }

          { step > -1 && step === steps.length - 1 && (
            <Grid container justify='center' alignItems='center'>
              <Grid item>
                <Button variant='contained' color='primary' onClick={ readQRCode }>
                  NEW SCAN
                </Button>
              </Grid>
            </Grid>
          ) }
          { step === -1
          && (
            <>
              <Grid container justify='center' alignItems='center'>
                <Grid item>
                  <Button variant='contained' color='primary' onClick={ readQRCode }>SCAN</Button>
                  { /* <Button variant='contained' color='primary' onClick={ handleGet }>
              GET
              </Button> */ }
                </Grid>
              </Grid>

              { message
              && (
                <Alert messageType={ messageType } message={ message } />
              ) }
            </>
          ) }
        </Container>
      </Grid>
    </Paper>
  );
};

Payment.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles, { withTheme: true })(Payment);
