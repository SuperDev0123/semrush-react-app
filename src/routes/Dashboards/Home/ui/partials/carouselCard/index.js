import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { useStyle } from './CarouselCard.style'

const CarouselCard = ({ title, description, image, templateId }) => {
  const classes = useStyle()
  const history = useHistory()
  return (
    <Box>
      <div
        onClick={() => {
          history.push(`/poll-creation/${templateId}`)
        }}
        className={classes.img}
        style={{
          background: `url(${image})`,
        }}
      />
      <Box className={classes.cardContent}>
        <Typography
          className={classes.cardTitle}
          onClick={() => {
            history.push(`/poll-creation/${templateId}`)
          }}
        >
          {title}
        </Typography>
        <Typography className={classes.description}>{description}</Typography>
      </Box>
    </Box>
  )
}

export default CarouselCard
