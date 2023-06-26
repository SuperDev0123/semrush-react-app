import React, { useEffect, useState } from 'react'
import { Box, IconButton } from '@material-ui/core'
import { MdPlayCircleFilled } from 'react-icons/md'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ url, height, width, className, variant, ...rest }) => {
  const [isYoutube, setIsYoutube] = useState(true)
  const [isPlay, setIsPlay] = useState(false)
  const handlePlay = () => {
    setIsPlay(!isPlay)
  }
  useEffect(() => {
    setIsYoutube(url.includes('youtube'))
  }, [url])
  return (
    <>
      {variant === 'video' && (
        <Box
          style={{
            position: 'relative',
            borderRadius: '5px',
            overflow: 'hidden',
            height: isYoutube && '120px',
            // width: slug === "winner" ? "200px" : "150px",
          }}
          className={className}
        >
          <ReactPlayer
            controls={isPlay || isYoutube}
            width={width || '100%'}
            height={height || '100%'}
            url={url}
            onPause={() => {
              setIsPlay(false)
            }}
            playing={isPlay}
            {...rest}
          />
          {!isYoutube && !isPlay && (
            <IconButton
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              onClick={handlePlay}
            >
              <MdPlayCircleFilled />
            </IconButton>
          )}
        </Box>
      )}
      {variant === 'audio' && (
        <ReactPlayer
          controls={true}
          width={'100%'}
          height={50}
          url={url}
          {...rest}
        />
      )}
    </>
  )
}
export default VideoPlayer
