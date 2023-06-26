import { makeStyles } from '@material-ui/core'

const useSelectedBoxStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: '#016AE9',
    boxShadow: '0 -4px 23px rgba(0, 0, 0, .25)',
    paddingBlock: '1.5rem',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xs')]: {
      paddingInline: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      paddingInline: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingInline: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingInline: '10rem',
    },
  },
  childBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  searchbutton: {
    backgroundColor: 'transparent !important',
    color: '#FFF',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '36px',
    textTransform: 'none',
    paddingBlock: '0',
    paddingInline: '0 3rem',
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
    '&.Mui-disabled': {
      color: '#d2d2d2',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      lineHeight: '28px',
      padding: '0',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '18px',
    },
  },
  buttonArrow: {
    [theme.breakpoints.down('sm')]: {
      marginInlineStart: '0',
    },
    [theme.breakpoints.up('md')]: {
      marginInlineStart: '1rem',
    },
  },
  firstHeadline: {
    color: '#fff',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      lineHeight: '28px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0',
      fontSize: '18px',
      lineHeight: '18px',
    },
  },
  secondHeadline: {
    marginTop: '5px',
    color: '#fff',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
      lineHeight: '14px',
    },
  },
}))

export default useSelectedBoxStyles
