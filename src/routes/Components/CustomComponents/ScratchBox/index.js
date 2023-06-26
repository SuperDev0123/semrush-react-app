import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { map } from 'lodash'
import clsx from 'clsx'

import {
  clearPoll,
  clearAudience,
  unsubscribe,
} from '@src/common/redux/actions/Poll'

import { useStyles } from './style'

const ScratchBox = ({ content }) => {
  const classes = useStyles()
  const { type, footerText, srcs } = content
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(clearPoll({ pollTemplate: type, textA: '', textB: '' }))
    dispatch(clearAudience())
    dispatch(unsubscribe())
  }

  return (
    <Link
      to={`/create-poll/${type}`}
      className={classes.root}
      onClick={handleOnClick}
    >
      <div className={clsx(classes.boxRoot, type)}>
        {map(srcs, (src, key) => (
          <img src={src} key={key} className={classes.tempImg} />
        ))}
        <div className={clsx(classes.footerLabel, 'footerBgType')}>
          <span className={clsx(classes.span)}>{footerText}</span>
        </div>
      </div>
    </Link>
  )
}

export default ScratchBox
