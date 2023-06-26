import { makeStyles } from '@material-ui/core'

const useHeaderStyles = makeStyles((theme) => ({
    header: {
        marginLeft: 'auto',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    '& > a': {
      textDecoration: 'none',
    },
  },
  button: {
    width: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    fontWeight: '400',
    textDecoration: 'none',
    fontSize: '15px !important',
  },
  menuItems: {
    width: '238px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    background: 'linear-gradient(180deg, #0246F3 0%, #008DDF 100%)',
    transition: 'all 0.3s ease',
  },
  menuLinks: {
    padding: '15px',
    color: theme.palette.common.white,
    fontFamily: 'Poppins Regular',
    fontSize: '16px',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderLeft: '4px solid transparent',
    '&:hover': {
      borderColor: theme.palette.common.white,
      borderLeft: '4px solid #fff',
      backgroundColor: 'rgb(255 255 255 / 22%)',
    },
    button: {
        width: "auto",
        paddingLeft: "32px",
        paddingRight: "32px",
        fontWeight: "400",
        textDecoration: "none",
        fontSize: "15px !important",
    },
  },
  menuIcon: {
    marginRight: '15px',
    fontSize: '21px',
  },
}))

export default useHeaderStyles
