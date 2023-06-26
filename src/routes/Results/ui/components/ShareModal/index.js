import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import queryKeys from '@src/common/queryKeys'
import { pollShare } from '@src/common/api'
import {
  Modal,
  Box,
  Button,
  Typography,
  Input,
  Switch,
  FormControlLabel,
  Tooltip,
} from '@material-ui/core'
import { When, Toaster } from '@src/common/components'
import useStyles from './style'
import './style.css'
import { Close } from '@material-ui/icons'

const ShareModal = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [isLoading, setIsLoading] = useState(false)
  const [isLinkCopied, setIsLinkCopied] = useState(false)
  const [isSharing, setIsSharing] = useState(props.isSharing)
  const [sharableLink, setSharableLink] = useState('Sharing is disabled.')

  const handleSharingChange = (e) => {
    setIsSharing(e.target.checked)
  }

  const handleCopyLink = () => {
    if (isSharing) {
      navigator.clipboard.writeText(sharableLink)
      setIsLinkCopied(true)
      setTimeout(() => setIsLinkCopied(false), 1500)
    }
  }

  const togglePollShareMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_POLL_SHARE,
    mutationFn: pollShare,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      setIsLoading(false)
      const sharableLinkTemp = isSharing
        ? `${window.location.origin}/results/${props.id}/${data.link}`
        : 'Sharing is disabled'
      setSharableLink(sharableLinkTemp)
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
      setIsLoading(false)
    },
  })

  useEffect(() => {
    setSharableLink(
      !isSharing
        ? 'Sharing is disabled.'
        : props.isOwner
        ? `${window.location.origin}/results/${props.id}/${props.previousSlug}`
        : window.location.href
    )
  }, [])

  useEffect(() => {
    if (props.open) {
      setIsLoading(true)
      togglePollShareMutation.mutate({ id: props.id, is_sharing: isSharing })
    }
  }, [isSharing])

  return (
    <Modal
      open={props.open}
      disableEscapeKeyDown={isLoading}
      onClose={!isLoading ? props.onClose : () => {}}
      aria-labelledby="modal-title"
    >
      <Box className={classes.modalRoot}>
        <Box className={classes.modalHeader}>
          <Typography className={classes.modalTitle} id="modal-title">
            Result Sharing
          </Typography>
          <Button
            className={classes.modalClose}
            onClick={props.onClose}
            disabled={isLoading}
          >
            <Close />
          </Button>
        </Box>
        <Box className={classes.modalBody}>
          <Typography className={classes.modalShareText}>
            You can copy and share this link with your team or client.
          </Typography>
          <Box className={classes.modalLinkCopy}>
            <Input
              disableUnderline
              className={classes.modalLinkText}
              placeholder="Loading..."
              value={sharableLink}
              fullWidth
              inputProps={{
                readOnly: true,
              }}
            />
            <Tooltip
              title="Link copied!"
              disableFocusListener
              disableHoverListener
              disableTouchListener
              open={isLinkCopied}
            >
              <Button
                disabled={isLoading}
                disableFocusRipple={!isSharing}
                className={`${classes.modalCopy} ${
                  isSharing && classes.modalCopyBlue
                }`}
                onClick={handleCopyLink}
              >
                Copy
              </Button>
            </Tooltip>
          </Box>
          <When condition={props.isOwner}>
            <FormControlLabel
              label={
                isSharing
                  ? 'Result Sharing is Enabled'
                  : 'Enable Result Sharing'
              }
              className={classes.modalCheckLabel}
              control={
                <Switch
                  disabled={isLoading}
                  checked={isSharing}
                  className={classes.modalCheck}
                  onChange={handleSharingChange}
                />
              }
            />
          </When>
          <Button
            className={`${classes.modalCancelCopy}`}
            onClick={props.onClose}
            disabled={isLoading}
          >
            Back to Result Page
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ShareModal
