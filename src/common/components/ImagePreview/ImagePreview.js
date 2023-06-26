import * as React from 'react'
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import useImagePreviewStyles from './ImagePreview.styles'

const ImagePreview = ({ handleClose, previewImageURL }) => {
  const classes = useImagePreviewStyles()
  return (
    <Dialog open={true} onClose={handleClose} maxWidth="md">
      <DialogContent>
        <img
          className={classes.previewImage}
          src={previewImageURL}
          width="auto"
          alt=""
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ImagePreview
