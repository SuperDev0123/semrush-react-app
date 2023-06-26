import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modalBlurBackground: {
    width: '103vw',
    marginLeft: '-2rem',
    filter: 'blur(14px)',
    backgroundColor: '#0000007a',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '106vh',
    marginTop: '-2rem',
  },
  modalRoot: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '85%',
    overflow: 'hidden',
    borderRadius: '5px 5px 0 0',
    [theme.breakpoints.down('md')]: {
      minWidth: '95%',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '96%',
    },
  },
  upperBody: {
    width: '100%',
    backgroundImage:
      'linear-gradient(268.83deg, rgba(1, 106, 233, 0.78) 0%, #0763D6 46.11%, #19519D 100%)',
    borderRadius: '5px 5px 0 0',
  },
  rowEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '2rem 2rem 1rem',
  },
  rowCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '17rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '5rem',
      paddingLeft: '5.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '5rem',
      paddingLeft: '3rem',
    },
  },
  rowList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 4rem 0 15rem',
    marginLeft: '17rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0 4rem 0 8.5rem',
      marginLeft: '6rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '7rem',
      padding: '0 4rem 0 6.5rem',
    },
  },
  modalTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: '40px',
    lineHeight: '60px',
    zIndex: '1',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      lineHeight: '40px',
    },
  },
  rowPadding: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '17rem',
    padding: '0 4rem 0 12rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem 0 5.5rem',
      marginLeft: '7rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 1rem 0 4rem',
    },
  },
  modalDescription: {
    color: '#fff',
    lineHeight: '39px',
    fontSize: '26px',
    fontWeight: '400',
    zIndex: '1',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '25px',
    },
  },
  modalList: {
    listStyle: 'disc',
  },
  modalListItem: {
    paddingInline: '0',
    display: 'list-item',
    color: '#fff',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: '600',
    zIndex: '1',
  },
  lowerBody: {
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid #fff',
    borderRadius: '5px',
  },
  lowerBodyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBlock: '2.5rem',
    marginLeft: '17rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  imageBox: {
    display: 'flex',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      top: '10%',
    },
    [theme.breakpoints.down('xs')]: {
      top: '20%',
    },
    [theme.breakpoints.up(1440)]: {
      top: '0%',
    },
  },
  OutOfSearchImage: {
    height: '38rem',
  },
  modalClose: {
    color: '#FFF',
    padding: '0',
    zIndex: '1',
  },
  modalActions: {
    backgroundColor: '#FFF',
    border: '1px solid #016AE9',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '36px',
    color: '#016AE9',
    padding: '1rem 2rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    zIndex: '1',
    '&:hover': {
      backgroundColor: '#F7F7F7',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      fontSize: '20px',
      lineHeight: '20px',
    },
  },
  ModalBlueAction: {
    backgroundColor: '#016AE9',
    color: '#FFF',
    '&:hover': {
      backgroundColor: 'rgb(4, 95, 205)',
    },
  },
}))

export default useStyles
