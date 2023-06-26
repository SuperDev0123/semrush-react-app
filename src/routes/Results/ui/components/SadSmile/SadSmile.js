import React from 'react'

import './SadSmile.css'

const SadSmile = () => {
  return (
    <div className="demo-smile">
      <div className="sad-smile">
        <div className="sad-smile__eyes sad-smile__lefteye">
          <div className="sad-smile__tear"></div>
        </div>
        <div className="sad-smile__eyes sad-smile__righteye">
          <div className="sad-smile__tear"></div>
        </div>
        <div className="sad-smile__mouth"></div>
      </div>
    </div>
  )
}

export default SadSmile
