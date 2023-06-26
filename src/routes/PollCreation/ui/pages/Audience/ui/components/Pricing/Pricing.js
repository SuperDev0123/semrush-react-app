import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'
import { List, Box, Typography } from '@material-ui/core'

import { When } from '@src/common/components'
import { priceFraction } from '@src/routes/PollCreation/ui/pages/Audience/common/utils'

import PricingItem from './PricingItem'

import usePricingStyles from './Pricing.styles'

const Pricing = ({
  wrapperClassName,
  calculatedTotalPrice,
  costInformation,
  selectedCriteriaList,
  pollResponses,
}) => {
  const classes = usePricingStyles()

  const mergedWrapperClsName = classnames(classes.pricingListWrapper, {
    [wrapperClassName]: wrapperClassName,
  })
  const fullSelectedCriteriaList = selectedCriteriaList.filter(
    (item) => !!item.id
  )

  const fullSelectedCriteriaListCount = fullSelectedCriteriaList.length

  return (
    <Box className={mergedWrapperClsName}>
      <List className={classes.pricingList}>
        <PricingItem
          title={`${pollResponses} Responses`}
          price={priceFraction(pollResponses * costInformation.costPerResponse)}
          description={`USD ${costInformation.costPerResponse.toFixed(
            2
          )} per response`}
        />
        <When condition={fullSelectedCriteriaListCount > 0}>
          <PricingItem
            title={`${fullSelectedCriteriaListCount} Advance Criteria`}
            price={priceFraction(
              pollResponses *
                fullSelectedCriteriaListCount *
                costInformation.costPerAdditionalCriteria
            )}
            description={`+USD ${costInformation.costPerAdditionalCriteria} per response per criteria`}
          />
        </When>
      </List>
      <Box className={classes.pricingFooter}>
        <Typography className={classes.pricingFooterText}>
          Total Price
        </Typography>
        <Typography className={classes.pricingFooterText}>
          USD {calculatedTotalPrice}
        </Typography>
      </Box>
    </Box>
  )
}

Pricing.propTypes = {
  criteriaList: pt.array,
  wrapperClassName: pt.string,
}

export default Pricing
