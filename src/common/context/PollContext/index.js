import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import PollContext from './PollContext'
import { pollTypes, pollSteps } from '@src/common/constants'

const { IMAGE, SHORTTEXT, AUDIO, VIDEO } = pollTypes

const getPollTypeTitle = (pollType) => {
  switch (pollType) {
    case IMAGE:
      return 'images'
    case SHORTTEXT:
      return 'titles'
    case AUDIO:
      return 'videos'
    case VIDEO:
      return 'audios'
    default:
      return 'titles'
  }
}

const PollContextProvider = ({ children }) => {
  const { pollType } = useParams()
  const [pollStep, setPollStep] = useState(pollSteps.CREATE_POLL)
  const [selectedFilters, setSelectedFilters] = useState({})

  const pollData = useSelector((state) => state.poll.pollData)

  const [pollTemplate, setPollTemplate] = useState(pollType || '')
  const [pollTitle, setPollTitle] = useState(
    (pollData && pollData.pollTitle) || ''
  )
  const [pollSubTitle, setPollSubTitile] = useState(
    (pollData && pollData.pollSubTitle) || ''
  )
  const [originalFiles, setOriginalFiles] = useState({
    fileA: null,
    fileB: null,
  })

  const [pollTypeTitle, setPollTypeTitle] = useState(
    getPollTypeTitle(pollType) || 'title'
  )

  return (
    <PollContext.Provider
      value={{
        pollData,
        pollTemplate,
        pollTitle,
        pollSubTitle,
        pollTypeTitle,

        setPollTemplate,
        setPollTitle,
        setPollSubTitile,
        setPollTypeTitle,

        selectedFilters,
        setSelectedFilters,

        pollStep,
        setPollStep,
        originalFiles,
        setOriginalFiles,
      }}
    >
      {children}
    </PollContext.Provider>
  )
}

export default PollContextProvider
