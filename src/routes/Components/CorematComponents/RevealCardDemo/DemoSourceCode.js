import React, { useContext } from 'react'

import {
  getBackgroundSourceCode,
  getOverlaySourceCode,
} from '@src/@jumbo/utils/corematDemoHelper'
import { SourceCodeComponent } from '@src/@jumbo/components/CorematDemosComponents'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import { coremat } from '@src/@fake-db/coremat-components'

const DemoSourceCode = () => {
  const { background, overlay } = coremat
  const {
    revealed,
    showBackground,
    backgroundStyle,
    showOverlay,
    overlayStyle,
  } = useContext(CorematContext)

  const getSourceCode = () => {
    return (
      `
<CmtRevealCard` +
      getBackgroundSourceCode(showBackground, backgroundStyle, background) +
      getOverlaySourceCode(showOverlay, overlayStyle, overlay) +
      `
  revealComponentTitle="Invite your friend"
  revealComponent={<InviteFriendForm />}
  revealed={${revealed}}
  onClose={handleOnClose}>
  <ChildrenComponent revelCard={revelCard} />
</CmtRevealCard>
`
    )
  }

  return <SourceCodeComponent sourceCode={getSourceCode()} />
}

export default DemoSourceCode
