import * as React from 'react'
import { Box, Button, Typography } from '@material-ui/core'

import { Card, CriteriaList } from '../../components'

import useCriteriaBlockStyles from './CriteriaBlock.styles'

const QuestionImagePath = '/images/icons/info.svg'

const CriteriaBlock = ({ onClose }) => {
  const classes = useCriteriaBlockStyles()

  return (
    <Card.Wrapper>
      <Card.Header title="Advanced Criteria (Optional)">
        <Button
          color="default"
          className={classes.headerCancelButton}
          onClick={onClose}
        >
          Cancel
        </Button>
      </Card.Header>
      <Box className={classes.body}>
        <Box className={classes.notification}>
          <img src={QuestionImagePath} alt="" />
          <Typography className={classes.notificationText}>
            Advanced criteria incur additional fees,see Pricing Details to learn
            more.
          </Typography>
        </Box>
        <Typography className={classes.bodyText}>
          Specify any additional criteria respondents must meet to respond to
          your test:
        </Typography>
        <Box className={classes.criteriaList}>
          <CriteriaList />
        </Box>
      </Box>
    </Card.Wrapper>
  )
}

export default CriteriaBlock
