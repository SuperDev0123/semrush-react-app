import React, { useContext } from 'react'

import { SourceCodeComponent } from '@src/@jumbo/components/CorematDemosComponents'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'

const DemoSourceCode = () => {
  const { buttons, buttonType, enableTooltip, buttonSize, onClickType } =
    useContext(CorematContext)

  const getTooltipCode = () => {
    if (enableTooltip) {
      return `
  enableTooltip`
    }

    return ''
  }

  const getOnItemClick = () => {
    if (onClickType === 'common') {
      return `
  onItemClick={(item) => { console.log('item', item); }}`
    }

    return ''
  }

  const getButtonType = () => {
    if (buttonType !== 'combo') {
      return `
  type="${buttonType}"`
    }

    return ''
  }

  const getButtonsJson = () => {
    if (onClickType === 'individual') {
      return buttons.map((item) => {
        return { ...item, onClick: 'Place your function here' }
      })
    }

    return buttons
  }

  const getDataString = () => {
    const dataString = JSON.stringify(getButtonsJson(), null, 2)
    const button1 = dataString.replace(
      '"icon": "delete",',
      '"icon": <DeleteIcon />,'
    )
    const button2 = button1.replace('"icon": "send",', '"icon": <SendIcon />,')
    const button3 = button2.replace('"icon": "add",', '"icon": <AddIcon />,')
    const button4 = button3.replace(
      '"icon": "publish",',
      '"icon": <PublishIcon />,'
    )
    return button4.replace('"icon": "save",', '"icon": <SaveIcon />,')
  }

  const getSourceCode = () => {
    return (
      `
<CmtButtons
  items={buttons}
  variant="contained"
  size="${buttonSize}"
  color={'primary'}` +
      getButtonType() +
      getTooltipCode() +
      getOnItemClick() +
      ` />

const buttons = ${getDataString()};
`
    )
  }

  return <SourceCodeComponent sourceCode={getSourceCode()} />
}

export default DemoSourceCode
