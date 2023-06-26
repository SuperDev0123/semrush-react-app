import React, { useState } from 'react'
import { Box, Grid, Paper, Tooltip, Typography } from '@material-ui/core'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { useLocation } from 'react-router'

import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import TwoLevelPieChart from '@src/@jumbo/components/Common/Charts/PieChart'
import {
  MetaProvider,
  When,
  SkeletonLoader,
  VideoPlayer,
} from '@src/common/components'
import {
  CommentSection,
  ShareModal,
  ShareTest,
  PollCard,
  StatusBar,
  WinnerCard,
} from '../ui/components'
import { WithLoader } from '@src/routes/PollCreation/ui/components'

import { QuickCard } from '../../Dashboards/cards'
import { isPublicURL } from '@src/common/functions/tools'

import useStyles from './Result.style'

const getPreview = (classes, template, field, alt, variant) => {
  switch (template) {
    case 'video':
      return (
        <VideoPlayer
          slug={variant}
          variant="video"
          url={field}
          className={
            variant === 'winner' ? classes.winnerVideo : classes.resultVideo
          }
        />
      )
    case 'audio':
      return <VideoPlayer slug={variant} variant="audio" url={field} />
    case 'web-platform':
      return (
        <Tooltip title={field}>
          <a href={field} target={'_blank'} rel="noreferrer">
            <HiOutlineExternalLink className={classes.previewIcon} />
          </a>
        </Tooltip>
      )
    case 'image':
      return <img src={field} height="100%" width="100%" alt={alt} />
    case 'short-text':
      return field
    default:
      break
  }
}

const Result = ({
  onRefresh,
  loading,
  propertyTabCategories,
  data,
  lead,
  pollData,
  responseStatistics,
  iconUrl,
  dataList,
  winner,
  id,
  slug,
}) => {
  const classes = useStyles()
  const [isSharingPoll, setIsSharingPoll] = useState(false)
  const [isUsingUserAudience, setIsUsingUserAudience] = useState(false)

  //   const [filter, setFilter] = useState('all_time')
  const location = useLocation()
  const checkURLIsPublic = isPublicURL(location)

  const findWinnerField = () => {
    if (winner.name === pollData.textA) {
      return getPreview(
        classes,
        pollData.pollTemplate,
        pollData.fileA,
        propertyTabCategories[0].name,
        'winner'
      )
    }
    if (winner.name === pollData.textB) {
      return getPreview(
        classes,
        pollData.pollTemplate,
        pollData.fileB,
        propertyTabCategories[1].name,
        'winner'
      )
    }
  }

  return (
    <MetaProvider title="Results">
      <PageContainer>
        {loading ? (
          <SkeletonLoader
            animation="wave"
            variant="react"
            width={'100%'}
            height={60}
          />
        ) : (
          <StatusBar
            status={lead.status || 'started'}
            // message={lead.poll_lead_status_message || null}
          />
        )}
        <Grid container spacing={3}>
          <Grid item xs={12} md={!checkURLIsPublic ? 9 : 12}>
            <Paper className={classes.root}>
              {/* poll card */}
              <PollCard
                onRefresh={onRefresh}
                data={pollData}
                responseStatistics={responseStatistics}
                pollId={id}
                previewSlug={pollData.preview_slug}
                loading={loading}
              />
              {/* winner content */}
              <WinnerCard
                winner={winner}
                lead={lead}
                winnerField={findWinnerField}
                isSharedResult={checkURLIsPublic}
                pollData={pollData}
                loading={loading}
              />
              {/* chart section */}
              <Box className={classes.chartContainer}>
                <Box className={classes.headerContent}>
                  {loading ? (
                    <SkeletonLoader
                      animation="wave"
                      variant="rect"
                      width={'50%'}
                      height={20}
                    />
                  ) : (
                    <Typography className={classes.title}>
                      {pollData.pollSubTitle
                        ? pollData.pollSubTitle
                        : 'Which design do you prefer?'}
                    </Typography>
                  )}
                  {/* <Box className={classes.filter}>
                                        <CustomSelect
                                            value={filter}
                                            handleChange={(e) => {
                                                setFilter(e.target.value);
                                            }}
                                            optionValueField="value"
                                            optionLabelField="name"
                                            options={resultFilter}
                                        />
                                    </Box> */}
                </Box>
                <Box className={classes.chartResult}>
                  <Box className={classes.chartContent}>
                    <WithLoader
                      isLoading={loading}
                      skeletonCount={1}
                      skeletonProps={{
                        width: '94%',
                        height: '90%',
                        variant: 'rectangle',
                        style: {
                          margin: '13px',
                        },
                      }}
                    >
                      <TwoLevelPieChart
                        iconUrl={iconUrl}
                        data={dataList}
                        winnerName={winner.name}
                      />
                    </WithLoader>
                  </Box>
                  <Box className={classes.resultContainer}>
                    <Box className={classes.result}>
                      <WithLoader
                        isLoading={loading}
                        skeletonCount={1}
                        skeletonProps={{
                          width: '96%',
                          height: '80%',
                          variant: 'rectangle',
                          style: {
                            margin: '13px',
                          },
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          height={'100%'}
                          p={4}
                        >
                          <Grid
                            container
                            spacing={4}
                            justifyContent="space-between"
                          >
                            <Grid
                              item
                              xs={12}
                              sm={4}
                              className={classes.imagePreview}
                            >
                              {getPreview(
                                classes,
                                pollData.pollTemplate,
                                pollData.fileA,
                                propertyTabCategories[0].name
                              )}
                            </Grid>
                            <Grid
                              item
                              xs={6}
                              sm={4}
                              className={classes.optionText}
                            >
                              <Typography>
                                {propertyTabCategories[0].name}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={6}
                              sm={4}
                              className={classes.optionResult}
                            >
                              <Typography
                                variant="div"
                                className={classes.optionCount}
                              >
                                {dataList[0].value}{' '}
                                <Typography
                                  variant="span"
                                  className={classes.optionOutOfCount}
                                >
                                  /{' '}
                                  {responseStatistics.total_accepted_responses ||
                                    0}
                                </Typography>
                              </Typography>
                              <Typography
                                variant="div"
                                className={classes.percentageText}
                              >
                                Respondents
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </WithLoader>
                    </Box>
                    <Box className={classes.result}>
                      <WithLoader
                        isLoading={loading}
                        skeletonCount={1}
                        skeletonProps={{
                          width: '96%',
                          height: '80%',
                          variant: 'rectangle',
                          style: {
                            margin: '13px',
                          },
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          height={'100%'}
                          p={4}
                        >
                          <Grid
                            container
                            spacing={4}
                            justifyContent="space-between"
                          >
                            <Grid
                              item
                              xs={12}
                              sm={4}
                              className={classes.imagePreview}
                            >
                              {getPreview(
                                classes,
                                pollData.pollTemplate,
                                pollData.fileB,
                                propertyTabCategories[1].name
                              )}
                            </Grid>
                            <Grid
                              item
                              xs={6}
                              sm={4}
                              className={classes.optionText}
                            >
                              <Typography>
                                {propertyTabCategories[1].name}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={6}
                              sm={4}
                              className={classes.optionResult}
                            >
                              <Typography
                                variant="div"
                                className={classes.optionCount}
                              >
                                {dataList[1].value}{' '}
                                <Typography
                                  variant="span"
                                  className={classes.optionOutOfCount}
                                >
                                  /{' '}
                                  {responseStatistics.total_accepted_responses ||
                                    0}
                                </Typography>
                              </Typography>
                              <Typography
                                variant="div"
                                className={classes.percentageText}
                              >
                                Respondents
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </WithLoader>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.divider}></Box>
              {/* comment section */}
              <Box mt={2}>
                <CommentSection
                  pollId={id}
                  data={data}
                  loading={loading}
                  propertyTabCategories={propertyTabCategories}
                  getList={onRefresh}
                  slug={slug}
                />
              </Box>
            </Paper>
          </Grid>
          <When condition={!checkURLIsPublic}>
            <Grid item xs={12} md={3}>
              {/* <QuickCard
                            className={classes.quickCard}
                            title="Statistics"
                            footer={
                                <Box className={classes.quickCardFooter}></Box>
                            }
                            description={<>Statistics</>}
                        ></QuickCard> */}

              <QuickCard
                className={classes.quickCard}
                title="Share Result"
                footer={
                  <Box
                    className={classes.memberCardButton}
                    onClick={() => {
                      setIsSharingPoll(true)
                    }}
                  >
                    Share Result
                  </Box>
                }
                description={
                  <>
                    Let your team or client sees this result in realtime. Click
                    on the button below to share.
                  </>
                }
              />
              <When condition={pollData.isMyAudience}>
                <QuickCard
                  className={classes.quickCard}
                  title="Share Test"
                  footer={
                    <Box
                      className={classes.memberCardButton}
                      onClick={() => {
                        setIsUsingUserAudience(true)
                      }}
                    >
                      Share Test
                    </Box>
                  }
                  description={
                    <>
                      Let your team or client sees this result in realtime.
                      Click on the button below to share.
                    </>
                  }
                />
              </When>
              <ShareModal
                isSharing={pollData.isSharable}
                previousSlug={pollData.sharableSlug}
                isOwner={pollData.isPollOwner}
                id={id}
                open={isSharingPoll}
                onClose={() => setIsSharingPoll(false)}
              />
              <ShareTest
                id={id}
                open={isUsingUserAudience}
                onClose={() => setIsUsingUserAudience(false)}
              />
            </Grid>
          </When>
        </Grid>
      </PageContainer>
    </MetaProvider>
  )
}
export default Result
