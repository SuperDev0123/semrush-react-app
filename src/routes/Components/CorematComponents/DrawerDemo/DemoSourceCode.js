import React, { useContext } from 'react'

import {
  getBackgroundSourceCode,
  getOverlaySourceCode,
} from '@src/@jumbo/utils/corematDemoHelper'
import { SourceCodeComponent } from '@src/@jumbo/components/CorematDemosComponents'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import { coremat } from '@src/@fake-db/coremat-components'

const DemoSourceCode = () => {
  const {
    open,
    variant,
    direction,
    showBackground,
    backgroundStyle,
    showOverlay,
    overlayStyle,
  } = useContext(CorematContext)
  const { background, overlay } = coremat

  const getSourceCode = () => {
    return (
      `
<CmtDrawer` +
      getBackgroundSourceCode(showBackground, backgroundStyle, background) +
      getOverlaySourceCode(showOverlay, overlayStyle, overlay) +
      `
  variant="${variant}"
  anchor="${direction}"
  open={${open}}
  onClose={() => setOpen(false)}>
  <Box
    style={{
      width:305,
      padding: 20,
    }}>
    <Typography variant="body2">
      This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
      frozen peas along with the mussels, if you like.
    </Typography>
  </Box>
</CmtDrawer>`
    )
  }

  return <SourceCodeComponent sourceCode={getSourceCode()} />
}

export default DemoSourceCode
