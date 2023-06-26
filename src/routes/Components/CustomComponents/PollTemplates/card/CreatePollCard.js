import React, { useState } from 'react'
import { Box, Button, Paper, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import clsx from 'clsx'

import { Templates } from '@src/common/components'
import createStyle from './CreatePollCard.style'

const CreatePollCard = ({ className }) => {
  const classes = createStyle()
  const [open, setOpen] = useState(false)
  return (
    <Paper className={clsx(classes.paper, classes.mainContain)}>
      <Box className={clsx(classes.root, className)}>
        <Box className={classes.iconContainer}>
          <Box className={classes.boll} />
          <Add className={classes.addIcon} />
          <img src="/images/icons/Vector.png" alt="mail icon" />
        </Box>
        <Typography className={classes.title}>
          You haven’t created a test
        </Typography>
        <Typography className={classes.subTitle}>
          Looks like you haven’t created a test yet. You can create one by
          clicking the button below.
        </Typography>
        <Button
          className={classes.createPollButton}
          onClick={() => {
            setOpen(true)
          }}
        >
          Create a Test
        </Button>
        <Templates open={open} onClose={() => setOpen(false)} />
      </Box>
    </Paper>
  )
}

export default CreatePollCard
