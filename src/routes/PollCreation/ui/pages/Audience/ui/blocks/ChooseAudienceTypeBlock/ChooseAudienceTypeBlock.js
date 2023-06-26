import React from 'react'

import {
  Modal,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import useChooseAudienceTypeBlockStyles from './ChooseAudienceTypeBlock.styles'
import { Close } from '@material-ui/icons'
import ChooseAudienceType from '@src/common/assets/images/choose_audience_type.png'

const ChooseAudienceTypeBlock = ({ onClose, onUseUserAudience }) => {
  const classes = useChooseAudienceTypeBlockStyles()

  return (
    <Modal open={true} onClose={() => onClose()} aria-labelledby="modal-title">
      <Box className={classes.modalRoot}>
        <Box className={classes.modalHeader}>
          <Button className={classes.modalClose} onClick={onClose}>
            <Close />
          </Button>
        </Box>
        <Box className={classes.modalBody}>
          <img
            src={ChooseAudienceType}
            alt="Poll created success"
            className={classes.successImage}
          />
          <Box className={classes.modalFeaturesBox}>
            <Typography className={classes.modalFeaturesHeader}>
              Are you sure you don't want to test on our panel?
            </Typography>
            <List className={classes.modalFeaturesList}>
              <ListItem className={classes.modalFeature}>
                <ListItemText className={classes.modalFeatureText}>
                  Real and unbiased respondents
                </ListItemText>
              </ListItem>
              <ListItem className={classes.modalFeature}>
                <ListItemText className={classes.modalFeatureText}>
                  Responses in minutes
                </ListItemText>
              </ListItem>
              <ListItem className={classes.modalFeature}>
                <ListItemText className={classes.modalFeatureText}>
                  Anti-cheating software
                </ListItemText>
              </ListItem>
            </List>
          </Box>
          <Box className={classes.modalActionsBox}>
            <Button
              className={`${classes.modalPtpAudience} ${classes.modalMyAudienceButton}`}
              onClick={onUseUserAudience}
            >
              use my own audience
            </Button>
            <Button className={`${classes.modalPtpAudience}`} onClick={onClose}>
              Use PTP Audience
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default ChooseAudienceTypeBlock
