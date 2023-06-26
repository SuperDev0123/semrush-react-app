import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button } from '@material-ui/core'

import { browserRoutes } from '@src/common/browserRoutes'

import { ArrowRightAlt } from '@material-ui/icons'
import useSelectedBoxStyles from './SelectedBox.styles'

const SelectedBox = ({ selectedItemsCount, headlines, searchHeadline }) => {
  const classes = useSelectedBoxStyles()
  const history = useHistory()

  const launchTest = () => {
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
    <Box className={classes.box}>
      <Box className={classes.childBox}>
        <Typography component="h2" className={classes.firstHeadline}>
          {selectedItemsCount} Headlines are Selected
        </Typography>
        <Typography component="h4" className={classes.secondHeadline}>
          You can have up to 2 headlines per test.
        </Typography>
      </Box>
      <Button
        disabled={selectedItemsCount < 1 || selectedItemsCount > 2}
        className={classes.searchbutton}
        onClick={launchTest}
      >
        <span>Launch Test</span>
        <ArrowRightAlt className={classes.buttonArrow} />
      </Button>
    </Box>
  )
}

export default SelectedBox
