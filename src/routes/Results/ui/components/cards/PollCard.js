import React, { useState } from 'react'
import { Box, Grid, Hidden, Tooltip, Typography } from '@material-ui/core'
import { Cached, Visibility } from '@material-ui/icons'
import moment from 'moment'

import { SkeletonLoader } from '@src/common/components'
import CustomModal from '@src/common/components/CustomModal'
import { previewPoll } from '@src/common/functions/tools'

import useStyles from './PollCard.style'

const PollCard = ({
  onRefresh,
  data,
  responseStatistics,
  pollId,
  loading,
  previewSlug,
}) => {
  const classes = useStyles()
  const [pollDelete, setPollDelete] = useState({
    visible: false,
  })
  const Percentage = () => (
    <Box className={classes.percentageContainer}>
      <Box className={classes.percentageContain}>
        <Typography className={classes.percentage}>
          {responseStatistics.total_accepted_responses || 0} /{' '}
          {responseStatistics.total_requested_responses || 0}
        </Typography>
        <Typography className={classes.percentageText}>Respondents</Typography>
      </Box>
      <Box className={classes.percentageContain}>
        <Typography className={classes.percentage}>
          {responseStatistics.elapsed_time}
        </Typography>
        <Typography className={classes.percentageText}>Elapsed Time</Typography>
      </Box>
    </Box>
  )
  const ButtonsContainer = () => {
    // do not delete this array
    // const menuItems = [
    //   {
    //     name: 'Preview',
    //     icon: <img src="/images/icons/Upload.svg" alt="upload icon" />,
    //     handleClick: () => {
    //       console.log('Preview')
    //     },
    //   },
    //   {
    //     name: 'Edit',
    //     icon: null,
    //     handleClick: () => {
    //       console.log('Edit')
    //     },
    //   },
    //   {
    //     name: 'Archive',
    //     icon: null,
    //     handleClick: () => {
    //       console.log('Archive')
    //     },
    //   },
    //   {
    //     name: 'Delete',
    //     icon: null,
    //     handleClick: () => {
    //       setPollDelete({
    //         ...pollDelete,
    //         visible: true,
    //       })
    //     },
    //   },
    // ]
    return (
      <Box className={classes.buttonsContainer}>
        <Tooltip title={'Refresh'}>
          <Box className={classes.buttons} onClick={onRefresh}>
            <Cached className={classes.mIcons} />
          </Box>
        </Tooltip>
        <Tooltip title={'Preview'}>
          <Box
            className={classes.buttons}
            onClick={() =>
              previewPoll({ poll_id: pollId, preview_slug: previewSlug })
            }
          >
            <Visibility className={classes.mIcons} />
            {/* <MoreVert className={classes.mIcons} /> */}
          </Box>
        </Tooltip>
        {pollDelete.visible && (
          <CustomModal
            title="Confirmation"
            variant="confirm"
            open={pollDelete.visible}
            handleClose={() => {
              setPollDelete({ ...pollDelete, visible: false })
            }}
            onCancel={() => {
              console.log('cancel')
            }}
            onOk={() => {
              console.log('ok')
            }}
          >
            <Box sx={{ mt: 2, mb: 2 }}>
              <Typography className={classes.confirmText}>
                Are you sure want to delete this test? Please remember that you
                will lose al the data and statistics related to this test.
              </Typography>
            </Box>
          </CustomModal>
        )}
      </Box>
    )
  }
  return (
    <Box className={classes.root}>
      <Box className={classes.cardDetails}>
        <Grid container>
          <Grid item xs={8} md={6} xl={7}>
            {loading ? (
              <SkeletonLoader
                className={classes.skeleton}
                animation="wave"
                variant="rect"
                width={'80%'}
                height={20}
              />
            ) : (
              <Typography className={classes.title}>
                {data.pollTitle || 'Test field'}
              </Typography>
            )}

            <Box className={classes.iconContinuer}>
              {loading ? (
                <SkeletonLoader
                  className={classes.skeleton}
                  animation="wave"
                  variant="rect"
                  width={'72%'}
                  height={20}
                />
              ) : (
                <Typography className={classes.cardUpdatesText}>
                  Last updated{' '}
                  {data.lastUpdateAt
                    ? moment.utc(data.lastUpdateAt).fromNow()
                    : '0 hours a go'}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={4} md={6} xl={5} className={classes.options}>
            <Hidden mdDown>
              {loading ? (
                <Box sx={{ width: '100%' }}>
                  <SkeletonLoader
                    className={classes.skeleton}
                    animation="wave"
                    variant="rect"
                    width={'80%'}
                    height={20}
                    style={{ marginRight: '10px' }}
                  />
                  <SkeletonLoader
                    className={classes.skeleton}
                    animation="wave"
                    variant="rect"
                    width={'50%'}
                    height={20}
                    style={{ marginRight: '10px' }}
                  />
                </Box>
              ) : (
                <Percentage />
              )}
            </Hidden>
            {loading ? (
              <SkeletonLoader
                className={classes.skeleton}
                animation="wave"
                variant="rect"
                width={50}
                height={50}
              />
            ) : (
              <ButtonsContainer />
            )}
          </Grid>
        </Grid>
      </Box>
      <Hidden lgUp>
        <Box className={classes.cardUpdates}>
          {loading ? (
            <SkeletonLoader
              className={classes.skeleton}
              animation="wave"
              variant="rect"
              width={'50%'}
              height={10}
            />
          ) : (
            <Percentage />
          )}
        </Box>
      </Hidden>
    </Box>
  )
}

export default PollCard
