export default function (theme) {
  return {
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#fafafa',
    },
    cardGrid: {
      paddingTop: theme.spacing(12),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  };
}
