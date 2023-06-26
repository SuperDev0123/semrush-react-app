import * as React from 'react'
import { Prompt } from 'react-router-dom'
import pt from 'prop-types'

const PromptProvider = ({ children, condition, message }) => {
  React.useEffect(() => {
    window.onpopstate = function () {
      if (condition) {
        const question = window.confirm(message)
        if (question) {
          window.history.pushState(null, document.title, window.location.href)
        }
      }
    }

    if (condition) {
      window.onbeforeunload = function (event) {
        event = event || window.event
        event.preventDefault = true
        event.cancelBubble = true
        event.returnValue = message
      }
    } else {
      window.onbeforeunload = null
    }

    return () => {
      window.onbeforeunload = null
    }
  }, [condition])

  return (
    <>
      <Prompt when={condition} message={message} />
      {children}
    </>
  )
}

PromptProvider.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  condition: pt.bool.isRequired,
  message: pt.string.isRequired,
}

export default PromptProvider
