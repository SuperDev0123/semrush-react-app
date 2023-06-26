import * as React from 'react'
import pt from 'prop-types'

import { Box, ListItem, Typography } from '@material-ui/core'

import usePricingStyles from './Pricing.styles'

const PricingItem = ({ title, price, description }) => {
  const classes = usePricingStyles()

  return (
    <ListItem className={classes.pricingListItem}>
      <Box className={classes.pricingListItemHeader}>
        <Typography className={classes.pricingListItemHeaderText}>
          {title}
        </Typography>
        <Typography className={classes.pricingListItemHeaderText}>
          USD {price}
        </Typography>
      </Box>
      <Box className={classes.pricingListItemMiddle}>
        <Typography className={classes.pricingListItemMiddleText}>
          {description}
        </Typography>
      </Box>
    </ListItem>
  )
}

PricingItem.propTypes = {
  title: pt.string.isRequired,
  price: pt.oneOfType([pt.string, pt.number]).isRequired,
  description: pt.string.isRequired,
}

export default PricingItem
