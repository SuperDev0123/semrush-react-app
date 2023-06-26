/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { Typography, Box, Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import clsx from 'clsx'

import { statusColor } from '@src/common/data'
import { Templates, SkeletonLoader } from '@src/common/components'
import { winnerResultStatus } from '@src/common/constants'
import { browserRoutes } from '@src/common/browserRoutes'

import useStyles from './WinnerCard.style'

const WinnerCard = ({ winner, isSharedResult, lead, pollData, loading }) => {
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const classes = useStyles()
  const [status, setStatus] = useState(false)
  const [relStatus, setRelStatus] = useState(statusColor[0])

  useEffect(() => {
    setStatus(lead.poll_lead_status)
    const value = statusColor.filter((sta) => sta.status === lead.status)
    if (value && value.length > 0) {
      setRelStatus(value[0])
    }
  }, [lead.poll_lead_status])

  return (
    <>
      {loading ? (
        <SkeletonLoader
          animation="wave"
          variant="rect"
          width={'100%'}
          height={120}
        />
      ) : (
        <>
          <Box
            className={
              status === winnerResultStatus.tied ||
              status === winnerResultStatus.winner
                ? classes.root
                : clsx(classes.root, classes.justifyCenter)
            }
          >
            {status === winnerResultStatus.tied ||
            status === winnerResultStatus.winner ? (
              status === winnerResultStatus.tied ? (
                <Box
                  className={classes.imageContainer}
                  style={{
                    background: relStatus.gradient,
                  }}
                >
                  <img
                    src={`/images/icons/${relStatus.icon}-2.svg`}
                    className={classes.trophy}
                  />
                  <Box className={classes.imageTextContent}>
                    <Typography className={classes.title}>
                      {pollData.textA} & {pollData.textB}
                    </Typography>
                    <Typography className={classes.subTitle}>
                      is tied. No winner is selected.
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box
                  className={classes.imageContainer}
                  style={{
                    background: relStatus.gradient,
                  }}
                >
                  <img
                    src={`/images/icons/${relStatus.icon}-2.svg`}
                    className={classes.trophy}
                  />

                  <Box className={classes.imageTextContent}>
                    <Typography className={classes.title}>
                      {winner.name}
                    </Typography>
                    <Typography className={classes.subTitle}>
                      is the clear Winner!
                    </Typography>
                  </Box>
                </Box>
              )
            ) : (
              <>
                {lead.status !== 'started' && (
                  <Box
                    className={classes.imageContainer}
                    style={{
                      background: relStatus.gradient,
                    }}
                  >
                    <img
                      src={`/images/icons/${relStatus.icon}-2.svg`}
                      className={classes.trophy}
                    />

                    <Box className={classes.imageTextContent}>
                      <Typography className={classes.title}>
                        {winner.name}
                      </Typography>
                      <Typography className={classes.subTitle}>
                        is the Leading!
                      </Typography>
                    </Box>
                  </Box>
                )}
              </>
            )}
            <Box
              className={clsx(classes.descriptionContainer, classes.textCenter)}
            >
              <Typography className={classes.winnerText}>
                {status === winnerResultStatus.tied ||
                status === winnerResultStatus.winner
                  ? status === winnerResultStatus.tied
                    ? 'Want to make your test?'
                    : 'The winner has been decided'
                  : 'The winner has not been decided'}
              </Typography>
              <Typography className={classes.winnerDescription}>
                Want to make another test like this? Click on the button below.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.flatBtn}
                onClick={() => {
                  if (!isSharedResult) {
                    history.push(
                      browserRoutes.POLL_CREATION(
                        pollData.pollTemplateId,
                        pollData
                      )
                    )
                  } else {
                    history.push(browserRoutes.SIGN_IN())
                  }
                }}
                style={{
                  margin: '0 auto',
                }}
              >
                <span>Duplicate Test</span>
              </Button>
              <Templates open={open} onClose={() => setOpen(false)} />
            </Box>
          </Box>
          <Box className={classes.divider}></Box>
        </>
      )}
    </>
  )
}

export default WinnerCard
