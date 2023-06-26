import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Grid,
  Hidden,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core'
import { Cached, Visibility } from '@material-ui/icons'
import moment from 'moment'

import { statusColor } from '@src/common/data'
import { getPollList } from '@src/common/redux/actions/Poll'
import { Storage } from '@src/routes/PollCreation/common/services'
import { pollCreationSteps } from '@src/routes/PollCreation/common/constants'
import { browserRoutes } from '@src/common/browserRoutes'
import { When } from '@src/common/components'
import createStyle from './PollCard.style'

const PollCard = ({ data }) => {
  const classes = createStyle()
  const history = useHistory()
  const dispatch = useDispatch()
  const timeFactory = (datetime) => moment.utc(datetime).fromNow()
  const menuItems = [
    {
      name: 'Preview',
      icon: <img src="/images/icons/Upload.svg" alt="upload icon" />,
      handleClick: () => {
        console.log('Preview')
      },
    },
    {
      name: 'Edit',
      icon: null,
      handleClick: () => {
        console.log('Edit')
      },
    },
    {
      name: 'Archive',
      icon: null,
      handleClick: () => {
        console.log('Archive')
      },
    },
    {
      name: 'Delete',
      icon: null,
      handleClick: () => {
        console.log('Delete')
      },
    },
  ]
  const ButtonsContainer = () => (
    <Box className={classes.buttonsContainer}>
      {/* To Do: refresh functionality needs to be fixed after pagination */}
      {/* <When condition={data.status !== 'draft'}>
        <Tooltip title={'Refresh'}>
          <Box
            className={classes.buttons}
            onClick={() => {
              dispatch(getPollList())
            }}
          >
            <Cached className={classes.mIcons} />
          </Box>
        </Tooltip>
      </When> */}

      <Tooltip title={'Preview'}>
        <Box
          className={classes.buttons}
          onClick={() => {
            const win = window.open(
              browserRoutes.POLL_PREVIEW({
                poll_id: data.id,
                preview_slug: data.preview_slug,
              }),
              '_blank'
            )
            win.focus()
          }}
        >
          <Visibility className={classes.mIcons} />
        </Box>
      </Tooltip>
    </Box>
  )
  const Percentage = ({ result }) => (
    <Box className={classes.percentageContainer}>
      <Box className={classes.percentageContain}>
        <Typography className={classes.percentage}>
          {result.option_a_percent || 0}%
        </Typography>
        <Tooltip title={result.text_a || 'Label A'}>
          <Typography className={classes.percentageText}>
            {result.text_a || 'Label A'}
          </Typography>
        </Tooltip>
      </Box>
      <Box className={classes.percentageContain}>
        <Typography className={classes.percentage}>
          {result.option_b_percent || 0}%
        </Typography>
        <Tooltip title={result.text_b || 'Label B'}>
          <Typography className={classes.percentageText}>
            {result.text_b || 'Label B'}
          </Typography>
        </Tooltip>
      </Box>
    </Box>
  )
  const UpdatedAt = ({ data }) => {
    return (
      <>
        {data.status !== 'complete' && (
          <Typography className={classes.cardUpdatesText}>
            Last updated {timeFactory(data.updated_at)}
          </Typography>
        )}
      </>
    )
  }

  const onPollCardClick = () => {
    if (data.status === 'draft') {
      const pollKey = `${data.template_id}-${pollCreationSteps.DESIGN}`
      Storage.delete(pollKey)
      const pollData = {
        pollTitle: data.title,
        pollSubTitle: data.question,
        textA: data.text_a,
        fileA: [
          {
            path: data.option_a,
            name: data.file_resource.file_a.name,
            size: data.file_resource.file_a.size,
          },
        ],
        textB: data.text_b,
        fileB: [
          {
            path: data.option_b,
            name: data.file_resource.file_b.name,
            size: data.file_resource.file_b.size,
          },
        ],
        poll_id: data.id,
        isDone: true,
        pollTemplate: data.type,
        preview_slug: data.preview_slug,
      }
      Storage.set(pollKey, pollData)
      history.push(`/poll-creation/${data.template_id}`)
    } else {
      history.push(`/results/${data.id}`)
    }
  }

  return (
    <Paper className={classes.paper}>
      <div className={classes.link} onClick={onPollCardClick} />
      <Box className={classes.cardDetails}>
        <Grid container>
          <Grid item xs={8} md={6} xl={7}>
            <Typography className={classes.title}>
              {data.title || ''}
            </Typography>
            <Typography className={classes.subTitle}>
              {data.question || ''}
            </Typography>
            <When condition={data.status !== 'draft'}>
              <Box className={classes.iconContinuer}>
                <Typography className={classes.iconText}>
                  <img src="/images/icons/Profile.png" alt="profile icon" />
                  &nbsp; {data.total_accepted_responses || 0} responses
                </Typography>
                {/* <Typography className={classes.iconText}>
                                <img
                                    src="/images/icons/TimeSquare.png"
                                    alt="clock icon"
                                />
                                &nbsp; {data.days_remain || 0} days remaining
                            </Typography> */}
              </Box>
            </When>
          </Grid>
          <Grid item xs={4} md={6} xl={5} className={classes.options}>
            <When condition={data.status !== 'draft'}>
              <Hidden mdDown>
                <Percentage result={data} />
              </Hidden>
            </When>
            <ButtonsContainer />
          </Grid>
        </Grid>
      </Box>
      <When condition={data.status !== 'draft'}>
        <Hidden smUp>
          <UpdatedAt data={data} />
        </Hidden>
      </When>
      <Box className={classes.cardUpdates}>
        <Typography
          className={classes.cardUpdatesStatus}
          style={{
            backgroundColor: statusColor.filter(
              (stat) => stat.status === data.status
            )[0].color,
          }}
        >
          {data.status.charAt(0).toUpperCase() +
            data.status.slice(1).replaceAll('_', ' ')}
        </Typography>
        <When condition={data.status !== 'draft'}>
          <Hidden xsDown>
            <UpdatedAt data={data} />
          </Hidden>
          <Hidden lgUp>
            <Percentage result={data} />
          </Hidden>
        </When>
      </Box>
    </Paper>
  )
}

export default PollCard
