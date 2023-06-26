import React, { useContext } from 'react'

import PollContext from '@src/common/context/PollContext'
import { pollTypes } from '@src/common/constants'

import ImagePoll from './ImagePollNew'
import TextPoll from './TextPollNew'
import AudioPoll from './AudioPollNew'
import VideoPoll from './VideoPollNew'
import WebPlatformPoll from './WebPlatformPoll'

const { IMAGE, SHORTTEXT, AUDIO, VIDEO, WEB_PLATFORM } = pollTypes

const PollType = ({ formik }) => {
  const { pollTemplate } = useContext(PollContext)

  switch (pollTemplate) {
    case IMAGE:
      return <ImagePoll formik={formik} />
    case SHORTTEXT:
      return <TextPoll formik={formik} />
    case AUDIO:
      return <AudioPoll formik={formik} />
    case VIDEO:
      return <VideoPoll formik={formik} />
    case WEB_PLATFORM:
      return <WebPlatformPoll formik={formik} />
    default:
      return <></>
  }
}

export default PollType
