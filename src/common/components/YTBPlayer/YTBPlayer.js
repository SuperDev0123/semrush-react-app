import React from 'react'
import pt from 'prop-types'

import { getYoutubeID } from '@src/common/functions/tools'

import useYTBStyles from './YTBPlayer.styles'

import YTBSadIcon from '@src/common/assets/images/ytb-sad.png'

const YTBPlayer = ({ videoLink, width, height, title, style, ...rest }) => {
  const classes = useYTBStyles()
  const styles = style || {}

  const embedID = getYoutubeID(videoLink)
  if (!embedID) {
    return (
      <div className={classes.invalidIconWrapper}>
        <img className={classes.invalidIcon} src={YTBSadIcon} alt="" />
      </div>
    )
  }

  return (
    <iframe
      width={width}
      height={height}
      src={`//www.youtube.com/embed/${embedID}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ ...styles }}
      {...rest}
    />
  )
}

YTBPlayer.defaultProps = {
  title: 'YouTube video player',
  width: 500,
  height: 315,
}

YTBPlayer.propTypes = {
  videoLink: pt.string.isRequired,
  title: pt.string,
  width: pt.oneOfType([pt.string, pt.number]),
  height: pt.oneOfType([pt.string, pt.number]),
}

export default YTBPlayer
