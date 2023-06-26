import { withStyles } from '@material-ui/core'

const withSliderStyles = withStyles({
  root: {
    color: '#016AE9',
    height: 6,
    padding: 0,
    '& span.MuiSlider-markLabel': {},
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#016AE9',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E5E5',
  },
  mark: {
    color: 'transparent',
  },
  markLabel: {
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'right',
    color: '#000000',
    marginTop: '-10px',
    transform: 'translateX(0)',
    "&[data-index='0']": {
      left: 0,
      right: 'inherit',
    },
    "&[data-index='1']": {
      right: 0,
      left: 'inherit !important',
    },
  },
})

export default withSliderStyles
