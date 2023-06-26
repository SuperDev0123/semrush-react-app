import * as React from 'react'
import { Box, Input, Typography } from '@material-ui/core'

import {
  responsesSliderMarks,
  ALLOWED_MIN_RESPONSES,
} from '@src/routes/PollCreation/ui/pages/Audience/common/constants'
import { PollCreationContext } from '@src/routes/PollCreation/common/context/PollCreationContext'
import { pollCreationSteps } from '@src/routes/PollCreation/common/constants'

import { Card, Menu, Slider } from '../../components'

import useTargetingBlockStyles from './TargetingBlock.styles'

const TargetingBlock = ({ responseInformation, openCriteriaBlock, responsesRequired }) => {
  const classes = useTargetingBlockStyles()
  const { setAudienceStepFlow, ...state } =
    React.useContext(PollCreationContext)
  const { pollResponses } = state[pollCreationSteps.AUDIENCE]
  React.useEffect(() => {
    if (responsesRequired && responsesRequired != pollResponses) {
      setAudienceStepFlow({ pollResponses: responsesRequired })
    }
  }, [])
  const ALLOWED_MAX_RESPONSES = responseInformation.maxRespondentsPerPoll

  const changePollResponsesHandler = ({ target: { value } }) => {
    const copiedValue = value || 1
    if (
      copiedValue > ALLOWED_MAX_RESPONSES ||
      copiedValue < ALLOWED_MIN_RESPONSES
    ) {
      return
    }

    setAudienceStepFlow({ pollResponses: parseInt(copiedValue) })
  }
  return (
    <Card.Wrapper>
      <Card.Header className={classes.header} title="Audience Targeting">
        <Menu openCriteriaBlock={openCriteriaBlock} />
      </Card.Header>
      <Box className={classes.body}>
        <Box className={classes.participant}>
          <Box className={classes.participantTop}>
            <Typography className={classes.participantTitle}>
              Number of Participants
            </Typography>
            <Input
              disableUnderline
              className={classes.participantField}
              type="number"
              value={
                pollResponses || responseInformation.recommendedNumRespondents
              }
              onChange={changePollResponsesHandler}
              inputProps={{
                max: ALLOWED_MAX_RESPONSES,
                min: 1,
              }}
            />
          </Box>
          <Box className={classes.participantMiddle}>
            <Slider
              onChange={(event, T) => {
                changePollResponsesHandler({
                  target: { value: T },
                })
              }}
              value={
                pollResponses || responseInformation.recommendedNumRespondents
              }
              marks={responsesSliderMarks(ALLOWED_MAX_RESPONSES)}
              step={ALLOWED_MIN_RESPONSES}
              max={ALLOWED_MAX_RESPONSES}
            />
          </Box>
          <Box className={classes.information} />
        </Box>
      </Box>
    </Card.Wrapper>
  )
}

export default TargetingBlock
