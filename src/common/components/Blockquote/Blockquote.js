import * as React from 'react'
import pt from 'prop-types'

import './Blockquote.css'

const Blockquote = ({ title, description }) => {
  return (
    <div className="blockquote">
      <h2 className="blockquote-title">{title}</h2>
      <blockquote>{description}</blockquote>
    </div>
  )
}

Blockquote.propTypes = {
  title: pt.string.isRequired,
  description: pt.string.isRequired,
}

export default Blockquote
