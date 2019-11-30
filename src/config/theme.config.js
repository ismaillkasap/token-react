import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#097db5' },
    secondary: { main: '#EA3F3F' },
    third: { main: '#40b3a2' },
    gray: { main: '#BDC3C7' },
    danger: { main: '#EC2E2E' },
    modarate: { main: '#E8A87C' },
    text: {
      primary: '#31405c',
    },
    background: {
      default: '#eff1f4',
    },
  },
  typography: {
    fontFamily: [
      '"Source Sans Pro"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: 'white',
        boxShadow: 'none',
      },
      contained: {
        boxShadow: 'none',
      },
    },
  },
});

export default theme;
