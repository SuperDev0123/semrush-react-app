import React from 'react'
import { Box, Button } from '@material-ui/core'
import { When, Loader } from '@src/common/components'

const ActionButtons = ({ classes, sendData, isLoading, onPreview }) => {
  return (
    <Box className={classes.ActionButtonsBox}>
      <Button
        className={`${classes.ActionsButtons} ${classes.ActionButtonPreview}`}
        disabled={isLoading}
        onClick={onPreview}
      >
        Preview
      </Button>
      <Button
        className={`${classes.ActionsButtons} ${classes.ActionButtonLaunch}`}
        onClick={sendData}
        disabled={isLoading}
      >
        <When condition={isLoading}>
          <Loader sn={25} color="white" />
        </When>
        Launch
      </Button>
    </Box>
  )
}

export default ActionButtons
