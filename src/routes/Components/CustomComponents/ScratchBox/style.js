import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 430,
  },
  boxRoot: {
    padding: '68px 25px',
    backgroundColor: '#FFF',
    borderRadius: 15,
    position: 'relative',
    minHeight: 368,
    boxShadow: '0 4px 9px rgba(85, 85, 85, 0.48)',
    textAligh: 'center',
    '& .footerBgType': {
      backgroundColor: '#0414FF',
    },
  },
  label: {
    fontSize: 16,
    lineHeight: '20px',
    fontFamily: "'made_tommyregular',sans-serif",
    marginBottom: 12,
    display: 'block',
    color: '#232521',
    textAlign: 'center',
  },
  tempImg: {
    margin: '5px auto',
    display: 'block',
  },
  footerLabel: {
    margin: 0,
    left: 0,
    bottom: 0,
    fontSize: 14,
    padding: 15,
    width: '100%',
    color: '#ffffff',
    lineHeight: '16px',
    textAlign: 'center',
    position: 'absolute',
    fontFamily: "'made_tommyregular',sans-serif",
    textTransform: 'uppercase',
    backgroundColor: '#C4C4C4',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
}))

export { useStyles }
