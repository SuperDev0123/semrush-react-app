import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button } from '@material-ui/core'

import { browserRoutes } from '@src/common/browserRoutes'

import useLaunchTestStyles from './LaunchTest.styles'

const LaunchTest = ({ selectedItemsCount, headlines, searchHeadline }) => {
  const classes = useLaunchTestStyles()
  const history = useHistory()

  const launchTestClick = () => {
    const files = []
    headlines.forEach((element) => {
      element.checked && files.push(element.modifiedText)
    })
    const pollData = {
      pollTitle: '',
      pollSubTitle: `Which ad is more appealing for "${searchHeadline}"?`,
      textA: '',
      textB: '',
      fileA: files[0] || '',
      fileB: files[1] || '',
    }

    history.push(browserRoutes.POLL_CREATION(7, pollData))
  }

  return (
    <Box className={classes.container}>
      <Typography component="h2" className={classes.title}>
        Next step: Launch your test
      </Typography>
      <Typography component="p" className={classes.description}>
        Find the most effective headline by testing up to two of our suggestions
        on real people. You'll get both qualitative and quantitative data on
        your headlines within minutes minutes
      </Typography>
      <Button
        className={classes.launchTestAction}
        onClick={launchTestClick}
        disabled={selectedItemsCount < 1 || selectedItemsCount > 2}
      >
        Launch Test
      </Button>
    </Box>
  )
}

export default LaunchTest
