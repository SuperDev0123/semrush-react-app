import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Modal,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import { Captcha } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'
import { setAttemptURL } from '@src/common/functions/tools'

import useStyles from './SearchCaptcha.styles'
import './style.css'
import OutOfSearchesPicture from '@src/common/assets/images/out_of_searches.png'
import { Close } from '@material-ui/icons'

const SearchCaptcha = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const [isCaptchaValid, setIsCaptchaValid] = useState(true)
  const redirectToSign = () => {
    setAttemptURL()
    history.push(browserRoutes.SIGN_UP())
  }

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-title"
    >
      <Box className={classes.modalBox}>
        <Box className={classes.modalRoot}>
          <Captcha setIsCaptchaValid={setIsCaptchaValid} />
          <Box className={classes.modalFooter}>
            <Button variant="contained" className={`${classes.modalActions} ${isCaptchaValid ? '' : classes.ModalBlueAction}`} disabled={isCaptchaValid} onClick={props.onSubmit}>
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default SearchCaptcha
