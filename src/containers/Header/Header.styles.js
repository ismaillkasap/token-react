export default function (theme) {
  return {
    grow: {
      flexGrow: 1,
    },
    logo: {
      display: 'contents',
      textDecoration: 'none',
      color: 'var(--waikawa-grey)',
      '&:visited': {
        color: 'var(--dusk)',
      },
    },
    mainAvatar: {
      height: 48,
      width: 120,
      borderRadius: 'unset',
    },
    menu: {
      marginLeft: '1.5rem',
    },
    divider: {
      backgroundColor: theme.palette.primary.main,
      height: 5,
      marginTop: -5,
    },
    header: {
      backgroundColor: '#ffffff',
    },
  };
}
