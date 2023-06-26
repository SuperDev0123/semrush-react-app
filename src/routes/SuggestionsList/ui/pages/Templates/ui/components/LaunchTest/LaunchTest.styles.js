import { makeStyles } from '@material-ui/core'

const useLaunchTestStyles = makeStyles({
  container: {
    backgroundColor: 'rgba(3, 35, 251, 0.05)',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '1rem 2rem',
    marginBlock: '1rem',
  },
  title: {
    color: '#000',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: '500',
    marginTop: '1rem',
  },
  description: {
    color: '#000',
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: '400',
    marginBlock: '1rem',
  },
  launchTestAction: {
    borderRadius: '5px',
    backgroundColor: '#016AE9',
    padding: '1rem 2rem',
    color: '#fff',
    lineHeight: '30px',
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '1rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#055eca',
    },
    '&.Mui-disabled': {
      color: '#d2d2d2',
    },
  },
})

export default useLaunchTestStyles
