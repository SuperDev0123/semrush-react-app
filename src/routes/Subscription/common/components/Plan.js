import React from 'react'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import { When } from '@src/common/components'
import { Check } from '@material-ui/icons'
import useStyles from '../style/Plan.style'

const Plan = (props) => {
  const classes = useStyles()

  return (
    <Box
      className={`${classes.parentBox} ${
        props.isCurrentPlan || props.isRecommended
          ? classes.parentBoxBorder
          : ''
      }`}
      align="center"
    >
      <When condition={!props.isCurrentPlan && props.isRecommended}>
        <Box className={classes.recommendedTextBox}>
          <Typography className={classes.recommendedText}>
            Recommended
          </Typography>
        </Box>
      </When>
      <Box className={classes.planTitleBox}>
        <Typography variant="h4" className={classes.planTitle}>
          {props.plan.name} &nbsp;
          <When condition={props.plan.trial_days}>
            <Typography
              component="span"
              className={classes.planTrialInformation}
            >
              ({props.plan.trial_days} days trial)
            </Typography>
          </When>
        </Typography>
      </Box>
      <Box className={classes.planPriceBox}>
        <Typography
          component="span"
          className={classes.planPrice}
          style={{ fontSize: '17px' }}
        >
          $
        </Typography>
        <Typography component="span" className={classes.planPrice}>
          {props.plan.price}/
        </Typography>
        <Typography component="span" className={classes.planPriceInfo}>
          Per Month
        </Typography>
      </Box>
      <List className={classes.featuresList}>
        {props.plan.features.map((feature, index) => (
          <ListItem key={index} className={classes.featuresListItem}>
            <ListItemIcon className={classes.featureListItemIcon}>
              <Check />
            </ListItemIcon>
            <ListItemText primary={feature} className={classes.listText} />
          </ListItem>
        ))}
      </List>
      {props.children}
    </Box>
  )
}

export default Plan
