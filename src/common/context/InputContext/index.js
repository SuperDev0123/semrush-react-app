import React, { useState } from 'react'
import InputContext from './InputContext'

const InputContextProvider = ({ children }) => {
  const [selectedCriterias, setSelectedCriterias] = useState([])

  return (
    <InputContext.Provider
      value={{
        selectedCriterias,
        setSelectedCriterias,
      }}
    >
      {children}
    </InputContext.Provider>
  )
}

export default InputContextProvider
