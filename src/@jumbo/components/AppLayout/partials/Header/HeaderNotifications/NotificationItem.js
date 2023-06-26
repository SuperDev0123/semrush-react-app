import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { FaRegPaperPlane } from 'react-icons/fa'
import {
  MdOutlineMail,
  MdOutlineCake,
  MdListAlt,
  MdPeopleAlt,
  MdShare,
} from 'react-icons/md'
import { AiOutlinePieChart } from 'react-icons/ai'
import CmtMediaObject from '@src/@coremat/CmtMediaObject'
import { Maybe } from '@src/common/functions'

import { useNotificationItemStyles } from './styles'

const iconStyle = {
  color: '#000',
  fontSize: '1.7rem',
}
const icons = {
  PIECHART: <AiOutlinePieChart style={iconStyle} />,
  PEOPLE: <MdPeopleAlt style={iconStyle} />,
  BALLOT: <MdListAlt style={iconStyle} />,
  BIRTHDAY: <MdOutlineCake style={iconStyle} />,
  INVITATION: <MdOutlineMail style={iconStyle} />,
  SHARED_POST: <MdShare style={iconStyle} />,
  POSTING: <FaRegPaperPlane style={iconStyle} />,
}

const NotificationItem = ({ item, date }) => {
  const classes = useNotificationItemStyles()
  const getPostTitle = (item, date) => (
    <Typography component="div" variant="h6" className={classes.titleRoot}>
      <Box component="span">
        <Link
          to={Maybe.isNoneOrEmptyString(item.action_url)}
          className={classes.postTitle}
        >
          {item.title}
        </Link>
      </Box>
      <Box component="span" ml={1}>
        {item.message}
      </Box>
      <Box className={classes.date}>
        {moment(date).format('dddd, MMMM DD YYYY, hh:mm A')}
      </Box>
    </Typography>
  )
  return (
    <Box className={classes.feedItemRoot}>
      <CmtMediaObject
        avatarPos="center"
        icons={icons[item.type]}
        title={getPostTitle(item, date)}
      />
    </Box>
  )
}

export default NotificationItem
