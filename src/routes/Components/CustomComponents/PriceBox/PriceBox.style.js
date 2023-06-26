import { makeStyles } from '@material-ui/core'

import dtheme from '@src/common/config/theme/defaultTheme'

const buttonStyle = {
  textTransform: 'uppercase',
  position: 'relative',
  fontFamily: "'made_tommyregular', sans-serif",
  fontWeight: '400 !important',
  fontSize: 20,
  lineHeight: '25px',
  backgroundColor: '#FFF',
  color: dtheme.palette.info.contrastText,
  borderRadius: dtheme.radius,
}

export const useStyles = makeStyles((theme) => ({
  pricingComp: {
    ...buttonStyle,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 320,
    minHeight: 178,
    margin: '0 auto',
    textAlign: 'center',
    color: '#3C3F3B',
    [theme.breakpoints.down('sm')]: {
      margin: '5px 0 0 0',
      width: '100%',
      maxWidth: '100%',
    },
    '&>label': {
      fontFamily: "'made_tommymedium', sans-serif",
      marginBottom: 5,
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 500,
      letterSpacing: '0em',
      textAlign: 'center',
    },
    '& .pricing-body': {
      display: 'none',
      '&.show': {
        display: 'block',
      },
    },
    '&.with-lbl': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '-7px',
      '& span.btn-sub': {
        fontFamily: "'made_tommyregular', sans-serif",
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: '0em',
        textAlign: 'center',
        color: '#FFF',
      },
    },
    '& .pricing-footer': {
      '&.active': {
        padding: '15px 30px',
        backgroundColor: '#0414FF',
        borderRadius: '0 0 10px 10px',
        textAlign: 'left',
        height: 44,
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  priceList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    textAlign: 'left',
    '& li': {
      fontFamily: "'made_tommyregular', sans-serif",
      lineHeight: '20px',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: 400,
      marginTop: 3,
      letterSpacing: '0em',
      textAlign: 'left',
      '& .plus-mark': {
        marginLeft: -11,
        marginRight: 5,
      },
      '& .sublist': {
        margin: '0 5px',
        padding: 0,
        listStyle: 'none',
        '& .crm-vals': {
          display: 'inline-flex',
          flexDirection: 'column',
          margin: '0 5px',
          padding: 0,
          listStyle: 'none',
        },
      },
    },
  },
}))
