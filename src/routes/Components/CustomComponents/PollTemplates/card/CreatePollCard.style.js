import { makeStyles } from '@material-ui/styles'

const createStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
    margin: 'auto',
    position: 'relative',
  },
  paper: {
    padding: '0.5rem',
    margin: '0.2rem 0',
    border: 'none',
    boxShadow: 'none',
    borderRadius: '0.5rem',
  },
  mainContain: {
    minHeight: '425px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    zIndex: 1,
  },
  boll: {
    backgroundColor: '#F6F6F6',
    height: '62.7px',
    width: '62.7px',
    right: '54%',
    top: '-0.6rem',
    zIndex: -1,
    position: 'absolute',
    borderRadius: '100%',
  },
  addIcon: {
    color: '#19519D',
    right: '37.8%',
    top: '-1.2rem',
    position: 'absolute',
  },
  title: {
    fontFamily: 'Poppins SemiBold',
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'center',
    color: '#19519D',
    marginTop: '18px',
  },
  subTitle: {
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'center',
    marginTop: '5px',
    color: theme.palette.common.black,
  },
  createPollButton: {
    borderRadius: '.2rem',
    boxShadow: 'none',
    backgroundColor: '#016AE9',
    fontFamily: 'Poppins SemiBold',
    fontSize: 14,
    lineHeight: '17px',
    margin: '0 35px',
    marginTop: '26px',
    padding: '12px 12px',
    minWidth: 135,
    '&:hover': {
      backgroundColor: '#0e72eb',
    },
    '& span': {
      fontWeight: 500,
      color: '#ffffff',
      textTransform: 'initial',
    },
    '& svg': {
      fontSize: '1.4rem',
      position: 'relative',
      left: '-3px',
      [theme.breakpoints.down('sm')]: {
        left: 0,
      },
    },
  },
}))

export default createStyle
