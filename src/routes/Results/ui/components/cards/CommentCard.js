import React, { useState, useRef, useEffect } from 'react'
import {
  Avatar,
  Button,
  Box,
  Typography,
  Modal,
  Tooltip,
  Grid,
} from '@material-ui/core'
import { AiOutlineClockCircle } from 'react-icons/ai'
import moment from 'moment'
import { Toaster } from '@src/common/components'

import useStyles from './Comment.style'
import clsx from 'clsx'
import useResults from '@src/common/hooks/useResults'

import useAuthUserQuery from '@src/common/hooks/useAuthUserQuery/useAuthUserQuery'

const CommentCard = ({
  title,
  name,
  src,
  duration,
  sentimen,
  id,
  commentId,
  comment,
  submitTime,
  assignStatus,
  responseText,
  option,
  getList,
  responseJson,
  testType,
}) => {
  const classes = useStyles()
  const textRef = useRef()
  const [isReadMore, setIsReadMore] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false)
  const token = localStorage.getItem('token')
  const userDetails = useAuthUserQuery(true, token)

  const cardContent = () => {
    setIsReadMore(true)
    if (textRef.current.scrollHeight && textRef.current.clientHeight) {
      setHidden(textRef.current.scrollHeight > textRef.current.clientHeight)
    }
  }

  const beforeRejectResponse = () => {
    // dispatch(showLoader(true))
    // rejectResponseMutation.mutate(null)
    if (!message) {
      Toaster.error('Please enter the reason for rejecting!')
      return
    }
    updateResult()
  }

  const { mutate: updateResult } = useResults(commentId, message, () => {
    setIsRejectModalOpen(false)
    setMessage('')
    getList()
  })

  useEffect(() => {
    cardContent()
    window.addEventListener('resize', cardContent)
    return () => {
      window.removeEventListener('resize', cardContent)
    }
  }, [])
  return (
    <div className={clsx(classes.root)}>
      <Box className={classes.avatarContainer}>
        <Avatar alt={name} src={src} className={classes.large}>
          {!src && name && name.charAt(0).toUpperCase()}
        </Avatar>
      </Box>
      <Box className={classes.commentSection}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>
            <span>{` ${title} voted for `}</span>
            <Tooltip title={responseText}>
              <Box
                variant="span"
                className={classes.bag}
                style={{
                  background: option === 'optionA' ? '#0a3c81' : '#016ae9',
                }}
              >
                {responseText}
              </Box>
            </Tooltip>
          </Typography>
          <Box
            className={classes.status}
            style={{
              backgroundColor:
                assignStatus === 'Submitted' ? '#016AE9' : '#FF0700',
            }}
          >
            {assignStatus}
          </Box>
        </Box>
        <Box className={classes.leftComment}>
          {testType !== 'my_audience' && (
            <Box className={classes.titleContainer}>
              <Typography className={classes.id}>ID: {id}</Typography>
              <Typography className={classes.id}>
                {moment(submitTime).format('MMM DD, YYYY HH:mm')}
              </Typography>
            </Box>
          )}
          <Box className={classes.commentBox}>
            <Typography
              ref={textRef}
              className={clsx({
                [classes.commentText]: true,
                [classes.overflowCommentText]: isReadMore,
              })}
            >
              {comment}
            </Typography>
            {hidden && (
              <Typography
                className={classes.readMoreText}
                onClick={() => {
                  setIsReadMore(old => !old)
                }}
              >
                {isReadMore ? 'Read More' : 'Read Less'}
              </Typography>
            )}
          </Box>
          <Box className={classes.rangeSection}>
            {testType !== 'my_audience' && (
              <Typography className={classes.range}>
                <Box sx={{ color: 'black', mr: 2 }}>
                  <AiOutlineClockCircle />
                </Box>
                {duration}
              </Typography>
            )}
            <Typography className={classes.range}>
              <Box variant="span" sx={{ fontFamily: 'Poppins Bold', mr: 2 }}>
                {' '}
                Sentiment:
              </Box>{' '}
              <Typography
                variant="span"
                style={{
                  color:
                    sentimen === 'positive'
                      ? 'green'
                      : sentimen === 'negative'
                      ? 'red'
                      : 'black',
                }}
              >
                {sentimen}
              </Typography>
            </Typography>
            <Typography className={classes.range}>
              {moment.utc(submitTime).fromNow()}
            </Typography>
          </Box>
          {/* trash button */}
          {userDetails.data.is_admin && (
            <Grid
              container
              spacing={1}
              aria-label="close"
              color="inherit"
              size="small"
              className={classes.gridIconMain}
            >
              {assignStatus === 'Submitted' && (
                <Grid item className={classes.trashButton}>
                  <img
                    src="/images/icons/trash.svg"
                    alt="trash icon"
                    width={'18px'}
                    height={'18px'}
                    onClick={() => setIsRejectModalOpen(true)}
                  />
                </Grid>
              )}
              <Grid item className={classes.trashButton}>
                <img
                  src="/images/icons/info.svg"
                  alt="trash icon"
                  width={'18px'}
                  height={'18px'}
                  onClick={() => {
                    setIsReasonModalOpen(true)
                  }}
                />
              </Grid>
            </Grid>
          )}

          <Modal
            open={isReasonModalOpen}
            onClose={() => setIsReasonModalOpen(false)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box className={classes.cancelModalBox}>
              <Typography
                id="modal-description"
                className={classes.cancelModalDescription}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: responseJson,
                  }}
                ></div>
              </Typography>
            </Box>
          </Modal>

          <Modal
            open={isRejectModalOpen}
            onClose={() => setIsRejectModalOpen(false)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box className={classes.cancelModalBox}>
              <Typography
                id="modal-title"
                variant="h6"
                component="h2"
                className={classes.cancelModalTitle}
              >
                Reject Response
              </Typography>
              <Typography
                id="modal-description"
                className={classes.cancelModalDescription}
              >
                <textarea
                  value={message}
                  onChange={e => {
                    setMessage(e.target.value)
                  }}
                  className={classes.rejectReasonModalInput}
                />
              </Typography>
              <Box className={classes.cancelModalActionsBox}>
                <Button
                  onClick={() => setIsRejectModalOpen(false)}
                  className={classes.cancelModalCancelAction}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => beforeRejectResponse()}
                  className={classes.cancelModalAcceptAction}
                >
                  {/* <When
                      condition={rejectResponseMutation.isLoading}
                    >
                      <Loader size={25} color="white" />
                    </When>{' '} */}
                  Yes, I'm sure
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </div>
  )
}

export default CommentCard
