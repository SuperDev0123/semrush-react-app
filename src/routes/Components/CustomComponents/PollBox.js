import React from 'react'
import { Link } from 'react-router-dom'
import { map } from 'lodash'
import clsx from 'clsx'
import { makeStyles, Box } from '@material-ui/core'
import CheckCircle from '@material-ui/icons/CheckCircle'
import { YTBPLayer } from '../../../common/components'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 430,
  },
  boxRoot: {
    padding: '19px 22px 110px 22px',
    backgroundColor: '#FFF',
    borderRadius: 15,
    position: 'relative',
    minHeight: 300,
    height: '100%',
    boxShadow: '0 4px 9px rgba(85, 85, 85, 0.48)',
    textAlign: 'left',
    '& .footerBgType': {
      backgroundColor: '#0414FF',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      padding: '19px 22px 90px 22px',
    },
  },
  tempImg: {
    margin: '5px 10px 5px 0',
    display: 'inline-flex',
    maxWidth: 155,
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      margin: 0,
      padding: 5,
    },
  },
  question: {
    fontFamily: "'made_tommyregular',sans-serif",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    color: '#232521',
    minHeight: 45,
    marginBottom: 15,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      height: 'auto',
      lineHeight: 1,
      width: '100%',
      marginBottom: 0,
    },
  },
  status: {
    fontFamily: "'made_tommylight',sans-serif",
    fontWeight: 300,
    fontSize: 13,
    lineHeight: '16px',
    color: 'rgba(255,255,255,.55)',
    marginTop: 5,
  },
  imgOption: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 160,
    minHeight: 85,
    display: 'grid',
    placeContent: 'center',
    marginRight: 15,
    boxShadow: '0px 1px 16px rgba(153, 153, 153, 0.25)',
  },
  footerLabel: {
    margin: 0,
    left: 0,
    bottom: 0,
    fontSize: 18,
    padding: 15,
    width: '100%',
    color: '#ffffff',
    lineHeight: '22px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    fontFamily: "'made_tommyregular',sans-serif",
    textTransform: 'uppercase',
    backgroundColor: '#C4C4C4',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  txtOption: {
    alignItems: 'center',
    margin: '0 auto 8px',
    width: 'calc(100% - 30px)',
    '& .check-icon': {
      marginRight: 10,
      color: '#13AB19',
      width: '.9em',
      height: '.9em',
    },
    '& label': {
      boxShadow: '0px 3px 14px rgb(166 166 166 / 25%)',
      padding: '7px 10px',
      width: '100%',

      borderRadius: 5,
      backgroundColor: '#232521',
      color: '#fff',
      fontWeight: 400,
      fontSize: 12,
    },
  },
}))

const LogoBox = ({ srces }) => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" flexDirection="row">
      <Box p={1} className={classes.imgOption}>
        <img src={srces[0]} />
      </Box>
      <Box p={1} className={classes.imgOption}>
        <img src={srces[1]} />
      </Box>
    </Box>
  )
}

const ShortText = ({ srces }) => {
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" className={classes.txtOption}>
        <CheckCircle className="check-icon" />
        <label>{srces[0]}</label>
      </Box>
      <Box display="flex" flexDirection="row" className={classes.txtOption}>
        <CheckCircle className="check-icon" />
        <label>{srces[1]}</label>
      </Box>
    </Box>
  )
}

const PollBox = ({ content }) => {
  const classes = useStyles()
  const { type, question, footerText, status, srcs, id } = content

  return (
    <Link to={{ pathname: `/results/${id}` }} className={classes.root}>
      <div className={clsx(classes.boxRoot, type)}>
        <p className={classes.question}>{question}</p>
        {type === 'image' &&
          map(srcs, (src, key) => (
            <img src={src} key={key} className={classes.tempImg} />
          ))}
        {type === 'logo_box' && <LogoBox srces={srcs} />}
        {type === 'short-text' && <ShortText srces={srcs} />}
        {type === 'web-platform' && <ShortText srces={srcs} />}
        {type === 'video' &&
          map(srcs, (src, key) => (
            <YTBPLayer
              key={`${src}-${key}`}
              videoLink={src}
              width="49%%"
              height="auto"
              style={{
                marginRight: key % 2 !== 0 ? 0 : '5px',
                marginLeft: key % 2 === 0 ? 0 : '5px',
              }}
            />
          ))}
        {type === 'audio' &&
          map(srcs, (src, key) => (
            <audio controls>
              <source src={src} key={key} className={classes.tempImg} />
            </audio>
          ))}

        <div className={clsx(classes.footerLabel, 'footerBgType')}>
          <span className={classes.span}>
            {footerText !== '' ? footerText : 'UNTITLED'}
          </span>
          <span className={classes.status}>{status}</span>
        </div>
      </div>
    </Link>
  )
}

export default PollBox
