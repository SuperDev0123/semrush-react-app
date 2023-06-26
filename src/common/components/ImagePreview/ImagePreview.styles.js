import { makeStyles } from '@material-ui/core'

const useImagePreviewStyles = makeStyles((theme) => ({
  previewImage: {
    minWidth: '450px',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '300px',
      width: 'auto',
    },
  },
}))

export default useImagePreviewStyles
