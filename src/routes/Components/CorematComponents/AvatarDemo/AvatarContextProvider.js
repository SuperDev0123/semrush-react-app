import React, { useState } from 'react'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'

const AvatarContextProvider = ({ children }) => {
  const [variant, setVariant] = useState('circle')
  const [size, setSize] = useState('medium')
  const [color, setColor] = useState('random')

  return (
    <CorematContext.Provider
      value={{
        variant,
        setVariant,
        size,
        setSize,
        color,
        setColor,
      }}
    >
      {children}
    </CorematContext.Provider>
  )
}

export default AvatarContextProvider
