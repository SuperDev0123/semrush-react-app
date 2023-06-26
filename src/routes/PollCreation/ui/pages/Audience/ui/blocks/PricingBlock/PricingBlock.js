import * as React from 'react'
import { Box } from '@material-ui/core'

import { Card, Pricing } from '../../components'

import usePricingBlockStyles from './PricingBlockStyles'

const PricingBlock = ({
  calculatedTotalPrice,
  costInformation,
  selectedCriteriaList,
  pollResponses,
}) => {
  const classes = usePricingBlockStyles()

  return (
    <Card.Wrapper>
      <Card.Header className={classes.header} title="Pricing" color="#000000" />
      <Box className={classes.body}>
        <Pricing
          pollResponses={pollResponses}
          calculatedTotalPrice={calculatedTotalPrice}
          costInformation={costInformation}
          selectedCriteriaList={selectedCriteriaList}
        />
      </Box>
    </Card.Wrapper>
  )
}

export default PricingBlock
