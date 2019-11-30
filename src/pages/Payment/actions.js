import { useReducer } from 'react';
import paymentInformationFromFileSystem from 'utils/paymentInformation.json';
import ENDPOINT from 'utils/constants';
import { isStatusSuccess } from 'utils/common';
import axiosService from 'utils/axios.service';
import {
  READ_QR_CODE, PAYMENT_VERIFICATION, CANCEL_PAYMENT, READ_QR_CODE_ERROR,
  ERROR_RESULT, SUCCESS_RESULT,
} from './constants';

let paymentInformation = null;

/**
 *
 *
 * @param {*} state
 * @param {*} action
 */
const paymentStateReducer = (state, action) => {
  switch (action.type) {
    case READ_QR_CODE:
      return {
        ...state,
        paymentInformation,
        message: '',
        messageType: null,
        step: 0,
      };
    case PAYMENT_VERIFICATION:
      return {
        ...state,
        paymentInformation,
        message: '',
        messageType: null,
        step: 1,
      };
    case CANCEL_PAYMENT:
      return {
        ...state,
        message: 'Payment canceled.',
        messageType: 'info',
        step: -1,
      };
    case READ_QR_CODE_ERROR:
      return {
        ...state,
        message: 'An unexpected error occurred.',
        messageType: 'error',
        step: -1,
      };
    case ERROR_RESULT:
      return {
        ...state,
        message: 'An unexpected error occurred.',
        messageType: 'error',
        step: 2,
      };
    case SUCCESS_RESULT:
      return {
        ...state,
        message: 'Payment completed as successfully.',
        messageType: 'success',
        step: 2,
      };
    default:
      throw new Error();
  }
};

/**
 *
 *
 */
const usePaymentReducer = () => {
  const [ state, dispatch ] = useReducer(paymentStateReducer, {
    isLoading: false,
    step: -1,
    error: '',
  });

  /**
  *
  *
  * @param {*} dispatch
  * @param {*} data
  */
  const paymentVerification = (data) => {
    dispatch({ type: PAYMENT_VERIFICATION, payload: data });
  };

  /**
 *
 *
 */
  const readQRCodeError = () => {
    dispatch({ type: READ_QR_CODE_ERROR });
  };

  /**
  *
  *
  */
  const ErrorResult = () => {
    dispatch({ type: ERROR_RESULT });
  };

  /**
  *
  *
  */
  const SuccessResult = () => {
    dispatch({ type: SUCCESS_RESULT });
  };

  const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  /**
  *
  *
  *
  */
  const readQRCode = async () => {
    dispatch({ type: READ_QR_CODE });

    paymentInformation = paymentInformationFromFileSystem;
    await sleep(1000);

    if (paymentInformation !== null) {
      paymentVerification(paymentInformation);
    } else {
      readQRCodeError();
    }
  };

  /**
  *
  *
  *
  */
  const cancelPayment = async () => {
    dispatch({ type: CANCEL_PAYMENT });
  };

  /**
  *
  *
  *
  */
  const confirmPayment = async () => {
    await axiosService
      .setCustomHeaders({})
      .post(ENDPOINT.PAYMENT,
        {
          data: paymentInformation,
        },
        (status, data) => {
          if (isStatusSuccess(status, data)) {
            SuccessResult();
          } else {
            ErrorResult();
          }
        });
  };

  return [ state, readQRCode, cancelPayment, confirmPayment ];
};

export default usePaymentReducer;
