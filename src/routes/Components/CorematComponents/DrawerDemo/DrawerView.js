import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import { getBackground, getOverlay } from '@src/@jumbo/utils/corematDemoHelper'
import { coremat } from '@src/@fake-db/coremat-components'
import CmtDrawer from '@src/@coremat/CmtDrawer'

const useStyles = makeStyles((theme) => ({
  textWhite: {
    color: theme.palette.common.white,
  },
}))

const DrawerView = () => {
  const classes = useStyles()

  const {
    open,
    setOpen,
    variant,
    direction,
    showBackground,
    backgroundStyle,
    showOverlay,
    overlayStyle,
    overlayOpacity,
  } = useContext(CorematContext)
  const { background, overlay } = coremat
  overlay.opacity = overlayOpacity

  const textDyanimicClass = () => {
    if (
      (showBackground && backgroundStyle !== 'color') ||
      (showOverlay && overlayOpacity > 0.5)
    ) {
      return classes.textWhite
    }
  }

  return (
    <CmtDrawer
      {...getBackground(showBackground, backgroundStyle, background)}
      {...getOverlay(showOverlay, overlayStyle, overlay)}
      variant={variant}
      anchor={direction}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box
        className={textDyanimicClass()}
        style={{
          width: 305,
          padding: 20,
        }}
      >
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </Box>
    </CmtDrawer>
  )
}

export default DrawerView
