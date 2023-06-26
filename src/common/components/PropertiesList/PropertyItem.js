import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import md5 from 'md5'
import CmtMediaObject from '@src/@coremat/CmtMediaObject'

import ProfileIcon from '@src/common/assets/images/properties/128_3 1.png'
import ScheduleIcon from '@src/common/assets/images/properties/schedule-icon.png'
import ProfileOutlinedIcon from '@src/common/assets/images/properties/profile-outlined-icon.png'
import { COLORS } from '../../constants'

const useStyles = makeStyles((theme) => ({
  getContentBold: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'rgba(0,0,0,1)',
    fontFamily: 'made_tommy, sans-serif',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  getContentWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  getContentLight: {
    fontSize: '12px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'rgba(0,0,0,1)',
    fontFamily: 'Poppins Light',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  description: {
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'rgba(0,0,0,1)',
    maxWidth: 798,
  },
  getContentBox: {
    display: 'flex',
    marginRight: 65,
  },
  mediaObjectRoot: {
    width: '100%',
    display: 'flex',
    '@media screen and (max-width: 699px)': {
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    '& .Cmt-media-image': {
      marginRight: 24,
      '@media screen and (max-width: 699px)': {
        alignSelf: 'unset',
        marginRight: 0,
        marginBottom: 16,
        width: '100%',
      },
    },
    '& .Cmt-media-body': {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
  carouselRoot: {
    marginRight: 0,
    '& .bottom-left .slick-dots': {
      left: 10,
    },
    '& .slick-dots': {
      bottom: 15,
      '& li button:before': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
      },
      '& li.slick-active button:before': {
        backgroundColor: theme.palette.warning.main,
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  titleRoot: {
    marginBottom: 12,
    fontSize: '16px',
    fontStyle: 'normal',
    fontFamily: 'Poppins SemiBold',
    letterSpacing: '0em',
    color: 'rgba(0, 0, 0, 1)',
  },
  badgeRoot: {
    color: theme.palette.common.white,
    fontFamily: 'Poppins SemiBold',
    borderRadius: 30,
    fontSize: '12px',
    padding: '2px 10px',
    marginBottom: 16,
    display: 'inline-block',
  },
  subTitleRoot: {
    fontSize: '12px',
    color: theme.palette.text.secondary,
    marginBottom: 8,
    fontFamily: 'Poppins Regular',
  },
  iconRoot: {
    fontSize: '18px',
    marginRight: '6px',
    fontFamily: 'Poppins Regular',
  },
  linkBtn: {
    fontSize: 14,
    color: theme.palette.primary.main,
    letterSpacing: 1.25,
    fontWeight: theme.typography.fontWeightBold,
    cursor: 'pointer',
    display: 'inline-block',
  },
  priceRoot: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0em',
    textAlign: 'center',
    fontFamily: 'made_tommy, sans-serif',
    color: 'rgba(0,0,0,1)',
  },
  footerComponentRoot: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: 16,
      textAlign: 'left',
    },
  },
  containerStyle: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
    [theme.breakpoints.up('md')]: {
      width: 150,
    },
    '@media screen and (max-width: 699px)': {
      width: '100%',
    },
    '& .slick-slide img': {
      borderRadius: 4,
      display: 'block !important',
    },
  },
}))

const PropertyItem = ({ item, timeFactory }) => {
  const classes = useStyles()
  const getTitle = () => (
    <React.Fragment>
      <Box
        className={classes.badgeRoot}
        component="span"
        bgcolor={COLORS[item.option === 'optionA' ? 0 : 1]}
      >
        {item.responseText}
      </Box>
      <Typography
        component="div"
        variant="h4"
        mb={1}
        className={classes.titleRoot}
      >
        {`${item.worker_id} voted for ${item.responseText}`}
      </Typography>
    </React.Fragment>
  )

  const getContent = (item) => (
    <Box
      className={classes.getContentWrapper}
      component="p"
      display="flex"
      flexDirection="row"
      mb={4}
      fontSize={12}
    >
      <Box
        component="span"
        mr={{ xs: 3, md: 4 }}
        className={classes.getContentBox}
      >
        <Box component="span" color="text.secondary" mr={1}>
          <Typography variant="body1" className={classes.getContentLight}>
            Status:
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.getContentBold}>
          {item.assignment_status}
        </Typography>
      </Box>
      <Box
        component="span"
        mr={{ xs: 3, md: 4 }}
        className={classes.getContentBox}
      >
        <Box component="span" color="text.secondary" mr={1}>
          <Typography variant="body1" className={classes.getContentLight}>
            ID:
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.getContentBold}>
          {item.assignment_id}
        </Typography>
      </Box>
      <Box
        component="span"
        mr={{ xs: 3, md: 4 }}
        className={classes.getContentBox}
      >
        <Box component="span" color="text.secondary" mr={1}>
          <Typography variant="body1" className={classes.getContentLight}>
            Time to complete:
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.getContentBold}>
          {item.time_to_complete ? `${item.time_to_complete} seconds` : ''}
        </Typography>
      </Box>
      <Box
        component="span"
        mr={{ xs: 3, md: 4 }}
        className={classes.getContentBox}
      >
        <Box component="span" color="text.secondary" mr={1}>
          <Typography variant="body1" className={classes.getContentLight}>
            Sentiment:
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.getContentBold}>
          {item.sentiment}
        </Typography>
      </Box>
    </Box>
  )

  const getFooter = () => (
    <React.Fragment>
      <Typography component="div" variant="h6" className={classes.priceRoot}>
        {timeFactory(item.submit_time)}
      </Typography>
    </React.Fragment>
  )

  const getAvatar = (item) => {
    try {
      const hashedWorkerID = md5(item.worker_id).toUpperCase()
      return require(`@src/common/assets/images/properties/icons/avatar-${hashedWorkerID.slice(
        0,
        2
      )}.png`)
    } catch (err) {
      return ProfileIcon
    }
  }

  return (
    <CmtMediaObject
      className={classes.mediaObjectRoot}
      avatar={
        <Box className={classes.carouselRoot}>
          <img width="78" height="78" src={getAvatar(item)} alt="" />
        </Box>
      }
      avatarPos="center"
      title={getTitle()}
      subTitleProps={{ className: classes.subTitleRoot }}
      footerComponent={getFooter()}
      footerComponentProps={{ className: classes.footerComponentRoot }}
    >
      <Box
        fontSize={12}
        color="text.disabled"
        display="flex"
        flexDirection="row"
        alignItems="center"
        mb={4}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          mr={4}
          sx={{ fontFamily: 'Poppins Regular', fontSize: '14px' }}
        >
          <img className={classes.iconRoot} src={ProfileOutlinedIcon} />{' '}
          {item.worker_id}
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ fontFamily: 'Poppins Regular', fontSize: '14px' }}
        >
          <img className={classes.iconRoot} src={ScheduleIcon} />{' '}
          {item.created_at}
        </Box>
      </Box>
      {getContent(item)}
      <Typography variant="body1" className={classes.description}>
        {item.answer}
      </Typography>
    </CmtMediaObject>
  )
}

export default PropertyItem
