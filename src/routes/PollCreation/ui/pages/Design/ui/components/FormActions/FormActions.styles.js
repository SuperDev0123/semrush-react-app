import { makeStyles } from '@material-ui/core'

const useFormActionsStyles = makeStyles((theme) => ({
  footerBlock: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '30px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '25px',
      marginBottom: '10px',
    },
  },
  previewButton: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0 !important',
    },
  },
}))

export default useFormActionsStyles
