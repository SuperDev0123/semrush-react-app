import React, { useContext } from 'react'

import { SourceCodeComponent } from '@src/@jumbo/components/CorematDemosComponents'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import { coremat } from '@src/@fake-db/coremat-components'

const DemoSourceCode = () => {
  const {
    alignment,
    badgeVerticalAlign,
    badgeHorizontalAlign,
    badgeOnItem,
    showBadge,
    badgeType,
    avatarVariant,
  } = useContext(CorematContext)
  const { avatar } = coremat

  const getBadgeTypeCode = () => {
    if (badgeType === 'counter') {
      return `
  badge={32}`
    } else {
      return `
  badge={
    <React.Fragment>
      <StarRateIcon style={{ height: 18 }} />
      <Box pr={2}>${4.5}</Box>
    </React.Fragment>
  }`
    }
  }

  const getBadgeCode = () => {
    if (showBadge) {
      return (
        getBadgeTypeCode() +
        `
  showItemBadge={${badgeOnItem}}
  anchorOrigin={{
    vertical: '${badgeVerticalAlign}',
    horizontal: '${badgeHorizontalAlign}',
  }}
  `
      )
    }

    return ''
  }

  const getSourceCode = () => {
    return (
      `
<CmtObjectSummary
  avatar="${avatar}"
  title="John Smith"
  subTitle="Designer"
  avatarProps={{ variant: '${avatarVariant}', size: 80 }}` +
      getBadgeCode() +
      `
  align="${alignment}"
/>
`
    )
  }

  return <SourceCodeComponent sourceCode={getSourceCode()} />
}

export default DemoSourceCode
