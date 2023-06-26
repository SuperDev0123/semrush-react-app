import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Box, Grid } from '@material-ui/core'
import CheckCircle from '@material-ui/icons/CheckCircle'
import PlayArrow from '@material-ui/icons/PlayArrow'
import {
  createPoll,
  clearAudience,
  unsubscribe,
} from '@src/common/redux/actions/Poll'
import IPopper from '@src/@jumbo/components/Common/IPopper'

import { usePollItemStyles } from './styles'

const PollItem = ({ content, templateClass = '' }) => {
  const { type, question, footerText, srcs } = content
  const classes = usePollItemStyles({ content })
  const dispatch = useDispatch()
  const previewTxt = 'This is the label of option'
  const defaultSrcs = [
    '/images/poll-item/pol-img-11.png',
    '/images/poll-item/pol-img-12.png',
  ]

  const srces = srcs.length > 0 ? srcs : defaultSrcs

  const templateContentFactory = (srces) => {
    switch (type) {
      case 'image':
        return (
          <Box display="flex" flexDirection="row">
            <Box p={1} className={classes.imgOption}>
              <img src={srces[0]} />
            </Box>
            <Box p={1} className={`${classes.imgOption} ${classes.mrZero}`}>
              <img src={srces[1]} />
            </Box>
          </Box>
        )
      case 'web-platform':
        return (
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              className={classes.txtOptionExtended}
            >
              <CheckCircle className="check-icon" />
              <label style={{ maxWidth: 'calc(100% - 10px)' }}>
                https://www.geico.com/landingpage/go534/
              </label>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              className={classes.txtOptionExtended}
            >
              <CheckCircle className="check-icon" />
              <label style={{ maxWidth: 'calc(100% - 10px)' }}>
                https://www.progressive.com/lp/insurance-superstore/
              </label>
            </Box>
          </Box>
        )
      case 'short-text':
        return (
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              className={classes.txtOption}
            >
              <CheckCircle className="check-icon" />
              <label>Pfizer</label>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              className={classes.txtOption}
            >
              <CheckCircle className="check-icon" />
              <label>Moderna</label>
            </Box>
          </Box>
        )
      case 'video':
        return (
          <Grid container className={classes.root} spacing={2}>
            <Grid item md={6} className={clsx(classes.vdoOption, 'item-1')}>
              <div className="option-content">
                <PlayArrow className="play-icon" />
              </div>
              <label>Classical Music</label>
            </Grid>
            <Grid item md={6} className={clsx(classes.vdoOption, 'item-2')}>
              <div className="option-content">
                <PlayArrow className="play-icon" />
              </div>
              <label>Rock Music</label>
            </Grid>
          </Grid>
        )
      case 'audio':
        return (
          <Box
            display="flex"
            flexDirection="column"
            className={classes.audioOptions}
          >
            <Box
              display="flex"
              flexDirection="row"
              className={classes.txtOption}
            >
              <CheckCircle className="check-icon" />
              <Box className="audio-content" flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="row"
                  className="content-head"
                >
                  <IPopper>{previewTxt}</IPopper> Fast - Paced
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  className="content-body"
                >
                  <PlayArrow className="play-icon" />
                  <img
                    src="./../images/play-visual.png"
                    className="play-visual-img"
                  />
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              className={classes.txtOption}
            >
              <CheckCircle className="check-icon" />
              <Box className="audio-content">
                <Box
                  display="flex"
                  flexDirection="row"
                  className="content-head"
                >
                  <IPopper>{previewTxt}</IPopper> Slow - Paced
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  className="content-body"
                >
                  <PlayArrow className="play-icon" />
                  <img
                    src="./../images/play-visual.png"
                    className="play-visual-img"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )
      case 'option':
        return (
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              className={clsx(classes.mdaOption)}
            >
              <label className="option-label">Option A</label>
              <label className="media-label">Media A</label>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              className={clsx(classes.mdaOption)}
            >
              <label className="option-label">Option B</label>
              <label className="media-label">Media B</label>
            </Box>
          </Box>
        )
    }
  }

  const handleOnClick = () => {
    dispatch(createPoll({ pollTemplate: type }))
    dispatch(clearAudience())
    dispatch(unsubscribe())
  }

  return (
    <Link
      to={`/create-poll/${type}`}
      className={classes.root}
      onClick={handleOnClick}
    >
      <div className={clsx(classes.pollItem, type, templateClass)}>
        <label className={classes.label}>{question}</label>
        {templateContentFactory(srces)}
        <div className={clsx(classes.footerLabel, 'footerBgType')}>
          <span className={classes.span}>{footerText}</span>
        </div>
      </div>
    </Link>
  )
}

export default PollItem
