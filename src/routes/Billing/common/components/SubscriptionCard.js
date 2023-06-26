import {
  Box,
  Button,
  ListItem,
  ListItemIcon,
  Paper,
  Typography,
} from '@material-ui/core'
import { Check } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'
import useStyles from '../style/SubscriptionCard.style'

const SubscriptionCard = ({ subscription }) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Paper className={classes.planBox}>
      <Box className={classes.planHeaderBox}>
        <Typography className={classes.planName} variant="h3">
          {subscription.plan.name}
        </Typography>
        <Typography className={classes.planPrice} variant="h4">
          ${subscription.plan.price} / Per Month
        </Typography>
      </Box>
      <Box className={classes.planFeaturesBox}>
        {subscription.plan.features.map((feature, index) => (
          <ListItem key={index} className={classes.planFeatureListItem}>
            <ListItemIcon className={classes.featureListItemIcon}>
              <Check />
            </ListItemIcon>
            <Typography className={classes.planFeatureText}>
              {feature}
            </Typography>
          </ListItem>
        ))}
      </Box>
      <Box className={classes.planActionBox}>
        <Button
          className={classes.planActionButton}
          onClick={() => {
            history.push('/billing')
          }}
        >
          Change Plan
        </Button>
      </Box>
    </Paper>
  )
}

export default SubscriptionCard
