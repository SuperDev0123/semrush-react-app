import React, { useContext } from 'react'

import { SourceCodeComponent } from '@src/@jumbo/components/CorematDemosComponents'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import { coremat } from '@src/@fake-db/coremat-components'

const DemoSourceCode = () => {
  const { size, variant, color } = useContext(CorematContext)

  const getSizeCode = () => {
    if (typeof size === 'string') {
      return `size="${size}"`
    }

    return `size={${size}}`
  }

  const getAvatarUrl = () => {
    return `src="${coremat.avatar}"`
  }

  const getSourceCode = () => {
    return (
      `
<CmtAvatar color="${color}" ` +
      getSizeCode() +
      ` variant="${variant}" alt="avatar" ` +
      getAvatarUrl() +
      ` />
<CmtAvatar color="${color}" ` +
      getSizeCode() +
      ` variant="${variant}">
  NP
</CmtAvatar>
<CmtAvatar color="${color}" ` +
      getSizeCode() +
      ` variant="${variant}">
  <FavoriteIcon />
</CmtAvatar>
<CmtAvatar color="${color}" ` +
      getSizeCode() +
      ` variant="${variant}" />
`
    )
  }

  return <SourceCodeComponent sourceCode={getSourceCode()} />
}

export default DemoSourceCode
