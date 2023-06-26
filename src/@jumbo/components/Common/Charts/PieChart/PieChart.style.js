import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .recharts-pie-sector': {
      '& text': {
        fontFamily: 'Poppins SemiBold',
      },
      '& .winner': {
        backgroundImage: "url('/images/badge.svg')",
        marginLeft: -30,
      },
    },
  },
  customTooltipWrapper: {
    background: theme.palette.common.white,
    borderRadius: '5px',
    color: theme.palette.common.black,
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
    padding: '0.4rem 0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  react: {
    width: '15px',
    height: '15px',
    marginRight: '10px',
  },
  labelTitle: {
    fontFamily: 'Poppins Bold',
    fontSize: '.9rem',
  },
  labelValue: {
    fontFamily: 'Poppins Regular',
    fontSize: '.8rem',
  },
}))

export { useStyles }
