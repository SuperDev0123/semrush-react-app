import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  customToolTIp: {
    backgroundColor: 'rgba(255,255,255,.8)',
    fontFamily: 'Poppins Regular',
    color: '#000',
    padding: '0.5rem',
    border: '2px solid #dddddd',
  },
  barTxt: {
    fontFamily: 'Poppins SemiBold',
    fill: '#000',
  },
}))

export { useStyles }
