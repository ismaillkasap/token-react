export default function (theme) {
  return {
    message: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1),
      border: '1px solid #bdbdbd',
    },
    info: {
      color: '#004085',
      backgroundColor: '#cce5ff',
      borderColor: '#b8daff',
    },
    error: {
      color: '#721c24',
      backgroundColor: '#f8d7da',
      borderColor: '#f5c6cb',
    },
    success: {
      color: '#155724',
      backgroundColor: '#d4edda',
      borderColor: '#c3e6cb',
    },
    icon: {
      marginTop: 6,
      marginRight: 3,
    },
  };
}
