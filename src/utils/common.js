function isStatusSuccess(statusCode, data) {
  return statusCode >= 200 && statusCode < 300 && data.returnCode === 1000;
}


// eslint-disable-next-line import/prefer-default-export
export { isStatusSuccess };
