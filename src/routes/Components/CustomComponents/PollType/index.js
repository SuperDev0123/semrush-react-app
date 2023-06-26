import React from 'react'

import ImagePoll from './ImagePoll'
import TextPoll from './TextPoll'
import AudioPoll from './AudioPoll'
import VideoPoll from './VideoPoll'

const PollType = ({ pollTemplate }) => {
  switch (pollTemplate) {
    case 'image':
      return <ImagePoll />
    case 'short-text':
      return <TextPoll />
    case 'audio':
      return <AudioPoll />
    case 'video':
      return <VideoPoll />
    default:
      return <></>
  }
}

export default PollType
