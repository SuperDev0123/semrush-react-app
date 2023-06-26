import React from 'react'
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

import { browserRoutes } from '@src/common/browserRoutes'
import { setAttemptURL } from '@src/common/functions/tools'

import useStyles from './OutOfSearchesModal.styles'
import './style.css'
import OutOfSearchesPicture from '@src/common/assets/images/out_of_searches.png'
import { Close } from '@material-ui/icons'

const OutOfSearchesModal = (props) => {
  const classes = useStyles()
  const history = useHistory()

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
      <Box className={classes.modalParent}>
        <Box
          className={classes.modalBlurBackground}
          style={{
            backgroundImage: 'url("/images/out_of_searches_background.png")',
          }}
        />
        <Box className={classes.modalRoot}>
          <Box className={classes.upperBody}>
            <Box className={classes.rowEnd}>
              <Button className={classes.modalClose} onClick={props.onClose}>
                <Close />
              </Button>
            </Box>
            <Box className={classes.rowCenter}>
              <Typography className={classes.modalTitle} id="modal-title">
                You're out of free searches!
              </Typography>
            </Box>
            <Box className={classes.rowPadding}>
              <Typography className={classes.modalDescription} component="p">
                Subscribe to get more searches. Test your suggestions on real
                people and get access to our full template gallery.
              </Typography>
            </Box>
            <Box className={classes.rowList}>
              <List className={classes.modalList}>
                <ListItem className={classes.modalListItem}>
                  <ListItemText>Pay nothing today</ListItemText>
                </ListItem>
                <ListItem className={classes.modalListItem}>
                  <ListItemText>Cancel Anytime</ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box className={classes.lowerBody}>
            <Box className={classes.lowerBodyContainer}>
              <Button className={classes.modalActions} onClick={props.onClose}>
                No thanks
              </Button>
              <Button
                onClick={redirectToSign}
                className={`${classes.modalActions} ${classes.ModalBlueAction}`}
              >
                Get Started NOW
              </Button>
            </Box>
          </Box>
          <Box className={classes.imageBox}>
            <img
              src={OutOfSearchesPicture}
              alt="Out of searches"
              className={classes.OutOfSearchImage}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default OutOfSearchesModal
