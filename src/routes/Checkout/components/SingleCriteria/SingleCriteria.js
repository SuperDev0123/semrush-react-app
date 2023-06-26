import React from 'react'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'

import PollResponseIcon from '@src/common/assets/images/group.png'
import AdvancedCriteriaIcon from '@src/common/assets/images/advanced.png'

const SingleCriteria = ({
  classes,
  price,
  audience,
  textPrimary,
  textSecondary,
  isAdvanced = false,
}) => {
  const icon = isAdvanced ? AdvancedCriteriaIcon : PollResponseIcon
  return (
    <ListItem className={classes.checkoutInfoListItem} alignItems="flex-start">
      <ListItemAvatar className={classes.checkoutInfoListItemAvatar}>
        <Avatar className={classes.avatar} alt="Poll response" src={icon} />
      </ListItemAvatar>
      <ListItemText
        className={classes.checkoutInfoListItemText}
        primary={
          <Typography
            sx={{ display: 'inline' }}
            className={classes.checkoutInfoListItemTextPrimary}
          >
            {textPrimary}
          </Typography>
        }
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            className={classes.checkoutInfoListItemTextSecondary}
          >
            {textSecondary}
          </Typography>
        }
      />
      <Typography
        className={classes.checkoutInfoListItemResponses}
        variant="body2"
        component="div"
      >
        {audience.response}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        className={classes.checkoutInfoListItemPrice}
      >
        {price.toFixed(2)}
      </Typography>
    </ListItem>
  )
}

export default SingleCriteria
