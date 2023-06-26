import { makeStyles } from '@material-ui/core'

const useTemplatesStyles = makeStyles((theme) => ({
  templates: {
    display: 'block',
    width: '100%',
    height: '86vh',

    overflowY: 'auto',
    padding: '17px 27px',
    background: theme.palette.common.white,
    border: '1px solid #FFFFFF',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      height: '90vh',
    },
  },
}))

export default useTemplatesStyles
