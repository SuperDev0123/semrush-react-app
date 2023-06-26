import React, { useState, useEffect, useContext } from 'react'
import { useQuery, useMutation } from 'react-query'

import {
  Modal,
  Box,
  Button,
  Input,
  Typography,
  Tooltip,
  FormControlLabel,
  Switch,
} from '@material-ui/core'
import {
  responsesSliderMarks,
  ALLOWED_MIN_RESPONSES,
} from '@src/routes/PollCreation/ui/pages/Audience/common/constants'
import { pollCreationSteps } from '@src/routes/PollCreation/common/constants'
import { PollCreationContext } from '@src/routes/PollCreation/common/context/PollCreationContext'
import { When } from '@src/common/components'
import queryKeys from '@src/common/queryKeys'
import {
  checkClientSubscription,
  getPollDetails,
  updatePollTestDetails,
} from '@src/common/api'
import { Storage } from '@src/routes/PollCreation/common/services'
import { Slider } from '../../components'
import useUserAudienceBlockStyles from './UserAudienceBlock.styles'
import { Close } from '@material-ui/icons'

const UserAudienceBlock = ({ onClose }) => {
  const classes = useUserAudienceBlockStyles()

  const [isLinkCopied, setIsLinkCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const [pollResponses, setPollResponses] = useState(0)
  const [pollId, setPollId] = useState(0)
  const [sharableLink, setSharableLink] = useState('')

  const { ...state } = useContext(PollCreationContext)

  const { data, isSuccess } = useQuery({
    queryKey: queryKeys.CHECK_USER_SUBSCRIPTION,
    queryFn: checkClientSubscription,
  })

  const getPollDetailsMutation = useMutation({
    mutationKey: queryKeys.GET_POLL_DETAILS,
    mutationFn: getPollDetails,
    onSuccess: (data) => {
      setIsLoading(false)
      setSharableLink(data.data.shared_test_slug)
      setIsSharing(data.data.my_audience_responses !== null)
      if (data.data.my_audience_responses !== null) {
        setPollResponses(data.data.my_audience_responses)
      }
    },
  })

  const updatePolltestDetailsMutation = useMutation({
    mutationKey: queryKeys.UPDATE_POLL_TEST_DETAILS,
    mutationFn: updatePollTestDetails,
    onSuccess: () => {
      setIsLoading(false)
      onClose(true)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const ALLOWED_MAX_RESPONSES = data.data.maxRespondentsPerPoll

  const onDialogClose = () => {
    if (isLoading) {
      return
    }

    onClose(false)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(sharableLink)
    setIsLinkCopied(true)
    setTimeout(() => setIsLinkCopied(false), 1500)
  }

  const changePollResponsesHandler = ({ target: { value } }) => {
    const copiedValue = value || 1
    if (
      copiedValue > ALLOWED_MAX_RESPONSES ||
      copiedValue < ALLOWED_MIN_RESPONSES
    ) {
      return
    }

    setPollResponses(parseInt(copiedValue))
  }

  const updateSettings = () => {
    setIsLoading(true)
    updatePolltestDetailsMutation.mutate({
      pollId,
      testDetails: {
        is_sharing: true,
        responses_number: isSharing
          ? pollResponses
          : data.data.recommendedNumRespondents,
      },
    })
  }

  useEffect(() => {
    const pollDataStorage = Storage.get(
      `${state.templateID}-${pollCreationSteps.DESIGN}`,
      true
    )

    setIsLoading(true)
    setPollId(pollDataStorage.poll_id)
    getPollDetailsMutation.mutate(pollDataStorage.poll_id)
  }, [])

  useEffect(() => {
    if (isSuccess) {
      setPollResponses(data.data.recommendedNumRespondents)
    }
  }, [isSuccess])

  return (
    <Modal
      open={true}
      disableEscapeKeyDown={isLoading}
      onClose={onDialogClose}
      aria-labelledby="modal-title"
    >
      <Box className={classes.modalRoot}>
        <Box className={classes.modalHeader}>
          <Typography className={classes.modalTitle} id="modal-title">
            Audience Sharing
          </Typography>
          <Button
            className={classes.modalClose}
            onClick={onDialogClose}
            disabled={isLoading}
          >
            <Close />
          </Button>
        </Box>
        <Box className={classes.modalBody}>
          <Typography className={classes.modalShareText}>
            You can copy and share this link to your target audience.
          </Typography>
          <Box className={classes.modalLinkCopy}>
            <Input
              disableUnderline
              className={classes.modalLinkText}
              placeholder="Loading..."
              value={sharableLink}
              fullWidth
              inputProps={{ readOnly: true }}
            />
            <Tooltip
              title="Link copied!"
              disableFocusListener
              disableHoverListener
              disableTouchListener
              open={isLinkCopied}
            >
              <Button className={classes.modalCopy} onClick={handleCopyLink}>
                Copy
              </Button>
            </Tooltip>
          </Box>
          <Box className={classes.sliderDescriptionParent}>
            <Box className={classes.sliderDescriptionSubParent}>
              <FormControlLabel
                label=""
                className={classes.modalCheckLabel}
                control={
                  <Switch
                    disabled={isLoading}
                    checked={isSharing}
                    className={classes.modalCheck}
                    onChange={(e) => setIsSharing(e.target.checked)}
                  />
                }
              />
              <Box className={classes.sliderDescriptionBox}>
                <Typography className={classes.sliderTitle}>
                  Limit the number of responses
                </Typography>
                <Typography className={classes.sliderSubTitle}>
                  Stop accepting responses after this number participants
                </Typography>
              </Box>
            </Box>
            <When condition={isSharing}>
              <Input
                disableUnderline
                className={classes.participantField}
                type="number"
                value={pollResponses}
                onChange={changePollResponsesHandler}
                inputProps={{
                  max: ALLOWED_MAX_RESPONSES,
                  min: 1,
                }}
              />
            </When>
          </Box>
          <Box className={classes.responsesNumber}>
            <When condition={isSharing}>
              <Box className={classes.participantMiddle}>
                <Slider
                  onChange={(event, T) =>
                    changePollResponsesHandler({
                      target: { value: T },
                    })
                  }
                  value={pollResponses}
                  marks={responsesSliderMarks(ALLOWED_MAX_RESPONSES)}
                  step={ALLOWED_MIN_RESPONSES}
                  max={ALLOWED_MAX_RESPONSES}
                />
              </Box>
            </When>
          </Box>
          <Button
            className={`${classes.modalCancelCopy}`}
            onClick={updateSettings}
            disabled={isLoading}
          >
            Done
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default UserAudienceBlock
