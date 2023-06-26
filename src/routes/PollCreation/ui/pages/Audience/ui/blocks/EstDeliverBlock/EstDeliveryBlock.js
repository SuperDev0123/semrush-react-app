import * as React from 'react'
import { Box, Typography } from '@material-ui/core'

import { deliveryTime } from '@src/routes/PollCreation/ui/pages/Audience/common/utils'
import { minutesToHhMm } from '@src/common/functions/tools'

import { Card } from '../../components'

import useEstDeliveryStyles from './EstDelivery.styles'

const EstDeliveryBlock = ({ pollResponses, selectedCriteriaList }) => {
  const classes = useEstDeliveryStyles()

  const fullSelectedCriteriaList = selectedCriteriaList.filter(
    (item) => !!item.id
  )
  const calculatedDeliveryTime = deliveryTime(
    pollResponses,
    fullSelectedCriteriaList.length
  )

  const isOverOneHours = calculatedDeliveryTime > 60

  return (
    <Card.Wrapper>
      <Card.Header
        className={classes.header}
        title="Est. Delivery"
        color="#000000"
      />
      <Box className={classes.body}>
        <Typography className={classes.bodyText}>
          This test is estimated to be completed in :
        </Typography>
        <Typography className={classes.bodyEstDate}>
          {isOverOneHours
            ? `${minutesToHhMm(calculatedDeliveryTime)} Hours`
            : `${calculatedDeliveryTime} Mins`}
        </Typography>
      </Box>
    </Card.Wrapper>
  )
}

export default EstDeliveryBlock
