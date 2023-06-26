import { makeStyles } from '@material-ui/core'

const usePreferenceTestBlockStyles = makeStyles((theme) => ({
  headerTitle: {
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#19519D',
    marginBottom: '11px',
  },
  block: {
    marginTop: '16px',
  },
  divider: {
    border: '1px solid #E5E5E5',
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
      marginTop: '32px',
      marginBottom: '20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
    },
  },
  fieldsWrapper: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  fieldWrapperBlock: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}))

export default usePreferenceTestBlockStyles
