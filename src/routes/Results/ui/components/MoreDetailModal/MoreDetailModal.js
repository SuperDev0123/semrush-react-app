import React from 'react'
import pt from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { Box, Typography } from '@material-ui/core'

import { useMoreDetailModalStyles } from './MoreDetail.styles'

const MoreDetailModal = ({ onClose }) => {
  const classes = useMoreDetailModalStyles()

  return (
    <Box>
      <Dialog
        open={true}
        onClose={onClose}
        aria-labelledby="more-details-title"
        aria-describedby="pricing-details-description"
      >
        <Box className={classes.dialogTitleWrapper} id="more-details-title">
          <Typography variant="h3" className={classes.dialogTitle}>
            Helpful Information
          </Typography>
        </Box>
        <DialogContent>
          <Box id="pricing-details-description">
            <ul className={classes.dialogContentList}>
              <li>
                The panel respondents names have been anonymized to protect
                their privacy. That is why, instead of "John Smith", you will
                see IDs like A3JBOVVBJQWLK9
              </li>
              <li>The respondent avatar is for illustrative purposes only.</li>
              <li>
                With each response, the respondent is asked to provide an
                explanation that clearly justifies his/her choice. Most
                respondents usually (but not always) explain in good faith. This
                feedback allows you to get into the minds of your customers.
              </li>
            </ul>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" autoFocus>
            I got it
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

MoreDetailModal.propTypes = {
  onClose: pt.func.isRequired,
}

export default MoreDetailModal
