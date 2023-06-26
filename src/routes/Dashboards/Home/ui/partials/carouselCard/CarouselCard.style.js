import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles((theme) => ({
  img: {
    height: '105px',
    width: 'inherit',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: '217px 105px !important',
  },
  cardContent: {
    margin: '9px 12px',
    height: '65px',
  },
  cardTitle: {
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    marginBottom: '3px',
    color: theme.palette.common.black,
    cursor: 'pointer',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',

    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
  description: {
    fontFamily: 'Poppins Regular',
    fontSize: '11px',
    marginBottom: '3px',
    color: '#929292',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    cursor: 'pointer',

    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
}))
