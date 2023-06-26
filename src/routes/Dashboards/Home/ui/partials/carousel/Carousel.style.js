import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    borderRadius: '5px',
    padding: '21px 17px',
    margin: '8px 0 0',
    position: 'relative',
    overflow: 'hidden',
    height: 'fit-content',
  },
  card: {
    boxShadow: '0px 0px 15px 0px rgb(0, 0, 0, 0.22)',
    borderRadius: '5px',
    position: 'relative',
    margin: '15px 10px',
    overflow: 'hidden',
    width: '217px',
  },
  title: {
    fontFamily: 'Poppins Bold',
    fontSize: '14px',
    marginBottom: '3px',
    color: theme.palette.common.black,
  },
  //   carouselContainer: {
  //     overflow: 'auto !important',
  //   },
  carouselItem: {
    width: 'unset !important',
  },
  leftArrow: {
    height: '106px',
    width: '23px',
    color: 'black',
    position: 'absolute',
    margin: 'auto 0',
    top: '50%',
    background: theme.palette.common.white,
    transform: 'translate(-12px, -50%)',
    zIndex: '999',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0 8px 8px 0',
  },
  rightArrow: {
    height: '106px',
    width: '23px',
    color: 'black',
    right: 0,
    background: theme.palette.common.white,
    position: 'absolute',
    margin: 'auto 0',
    top: '50%',
    zIndex: '999',
    transform: 'translate(0, -50%)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px 0 0 8px',
  },
}))
