import React from 'react'

import Song from './Song'
import Play from './Play'
import Pause from './Pause'
import Bar from './Bar'

import { useAudioPlayer } from '@src/routes/PollCreation/common/hooks'

import './AudioPlayer.css'

function Audio({ url }) {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer()

  return (
    <div className="player" onClick={(e) => e.stopPropagation()}>
      <audio id="audio">
        <source src={url} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <Song
        songName="Instant Crush"
        songArtist="Daft Punk ft. Julian Casablancas"
      />
      <div className="controls">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  )
}

export default Audio
