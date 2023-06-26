import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core'
import { GoSearch } from 'react-icons/go'
import clsx from 'clsx'
import md5 from 'md5'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'

// import CmtSearch from '@src/@coremat/CmtSearch'
import ProfileIcon from '@src/common/assets/images/properties/128_3 1.png'
import useStyles from './CommentSection.style'
import CommentCard from '../cards/CommentCard'
import CommentCardSkeleton from '../cards/CommentCardSkeleton'
import { useInfiniteQuery } from 'react-query'
import queryKeys from '@src/common/queryKeys'
import apiRoutes from '@src/common/apiRoutes'
import { instanceAxios } from '@src/common/config/axios'

const CommentSection = ({ pollId, propertyTabCategories, loading, slug }) => {
  const getPollResultResponses = ({ pageParam = 1 }) => {
    const params = { page: pageParam, limit: 10 }
    if (slug) {
      params.shareable_slug = slug
    }
    return instanceAxios
      .get(apiRoutes.POLL_RESULT_RESPONSE(pollId), {
        params,
      })
      .then((res) => res.data)
  }
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState('all')
  const [comments, setComments] = useState({ commentsA: [], commentsB: [] })
  const [searchText, setSearchText] = useState('')
  const [isHoverSearch, setIsHoverSearch] = useState(false)
  const [isRejectedRes, setIsRejectedRes] = useState(false)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    refetch: updateCommentList,
  } = useInfiniteQuery(
    [queryKeys.POLL_RESULT_RESPONSE],
    getPollResultResponses,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.current_page === lastPage.total) {
          return null
        }
        return lastPage.current_page + 1
      },
      staleTime: 0,
      cacheTime: 0,
    }
  )

  const options = [
    {
      title: 'Show rejected response',
      value: 'show_rejected_res',
      icon: <CheckBoxOutlineBlank className={classes.menuIcon} />,
      activeIcon: <CheckBox className={classes.menuIcon} />,
    },
  ]
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const filterComments = (tab, isRejected) => {
    const commentsData = []
    data.pages.map((page) => commentsData.push(...page.data))
    let comments = []
    if (tab === 'all') {
      if (searchText) {
        comments = commentsData.filter((item) => {
          if (!isRejected) {
            return (
              item.answer.toLowerCase().includes(searchText.toLowerCase()) &&
              item.assignment_status !== 'Rejected'
            )
          } else {
            return item.answer.toLowerCase().includes(searchText.toLowerCase())
          }
        })
      } else {
        if (!isRejected) {
          comments = commentsData.filter(
            (item) => item.assignment_status !== 'Rejected'
          )
        } else {
          comments = commentsData
        }
      }
    } else {
      if (searchText) {
        comments = commentsData.filter((com) => {
          if (!isRejected) {
            return (
              com.option === tab &&
              com.answer.toLowerCase().includes(searchText.toLowerCase()) &&
              com.assignment_status !== 'Rejected'
            )
          } else {
            return (
              com.option === tab &&
              com.answer.toLowerCase().includes(searchText.toLowerCase())
            )
          }
        })
      } else {
        if (!isRejected) {
          comments = commentsData.filter((com) => {
            return com.option === tab && com.assignment_status !== 'Rejected'
          })
        } else {
          comments = commentsData.filter((com) => com.option === tab)
        }
      }
    }
    setComments(comments || [])
  }

  const handleClose = (option) => {
    setAnchorEl(null)
    if (option.value === 'show_rejected_res') {
      setIsRejectedRes(!isRejectedRes)
      filterComments(activeTab, !isRejectedRes)
    }
  }
  const handleTabChange = (tab) => {
    filterComments(tab, isRejectedRes)
    setActiveTab(tab)
  }
  const getAvatar = (item) => {
    try {
      const hashedWorkerID = md5(item).toUpperCase()
      return require(`@src/common/assets/images/properties/icons/avatar-${hashedWorkerID.slice(
        0,
        2
      )}.png`)
    } catch (err) {
      return ProfileIcon
    }
  }
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    filterComments(activeTab, isRejectedRes)
  }

  useEffect(() => {
    filterComments('all', isRejectedRes)
  }, [data])

  useEffect(() => {
    updateCommentList()
  }, [loading])

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.headerSection}>
          <Typography className={classes.title}>
            Why did you choose this answer?
          </Typography>
          <Box className={classes.togglerSection}>
            <Button
              className={clsx({
                [classes.tabButton]: true,
                [classes.activeButton]: activeTab === 'all',
              })}
              onClick={() => {
                handleTabChange('all')
              }}
            >
              All
            </Button>
            <Button
              className={clsx({
                [classes.tabButton]: true,
                [classes.activeButton]: activeTab === 'optionA',
              })}
              onClick={() => {
                handleTabChange('optionA')
              }}
            >
              {
                propertyTabCategories.filter(
                  (opt) => opt.option === 'optionA'
                )[0].name
              }
            </Button>
            <Button
              className={clsx({
                [classes.tabButton]: true,
                [classes.activeButton]: activeTab === 'optionB',
              })}
              onClick={() => {
                handleTabChange('optionB')
              }}
            >
              {
                propertyTabCategories.filter(
                  (opt) => opt.option === 'optionB'
                )[0].name
              }
            </Button>
            <div className={classes.searchBox}>
              <input
                className={clsx({
                  [classes.searchText]: true,
                  [classes.hoverSearchText]: isHoverSearch,
                })}
                type="text"
                name=""
                value={searchText}
                placeholder="Type to Search"
                onChange={handleSearchTextChange}
                onBlur={() => {
                  if (!searchText) {
                    setIsHoverSearch(false)
                  }
                }}
              />
              <span
                className={clsx({
                  [classes.searchBtn]: true,
                  [classes.hoverSearchBtn]: isHoverSearch,
                })}
                onClick={() => {
                  setIsHoverSearch(!isHoverSearch)
                }}
              >
                <GoSearch />
              </span>
            </div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {options.map((option) => (
                <MenuItem key={option} onClick={() => handleClose(option)}>
                  <Box className={classes.menuOption}>
                    {isRejectedRes ? option.activeIcon : option.icon}
                    <Typography className={classes.menuOptionText}>
                      {option.title}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box>
          {loading ? (
            <>
              <CommentCardSkeleton />
              <CommentCardSkeleton />
            </>
          ) : (
            <Box className={clsx(classes.fullHeight, 'custom-scrollbar')}>
              {comments && comments.length > 0 ? (
                <>
                  {comments.map((comment, index) => (
                    <CommentCard
                      key={index}
                      title={comment.worker_id}
                      duration={`${comment.time_to_complete} second`}
                      submitTime={comment.submit_time}
                      sentimen={comment.sentiment || ''}
                      id={comment.assignment_id}
                      comment={comment.answer}
                      commentId={comment.id}
                      src={getAvatar(comment.worker_id)}
                      assignStatus={comment.assignment_status}
                      responseText={
                        propertyTabCategories.filter(
                          (opt) => opt.option === comment.option
                        )[0].name
                      }
                      option={comment.option}
                      getList={updateCommentList}
                      responseJson={comment.test_result}
                      testType={comment.test_type}
                    />
                  ))}
                  {hasNextPage && (
                    <Button
                      className={classes.loadMoreBtn}
                      onClick={fetchNextPage}
                    >
                      Load More
                    </Button>
                  )}
                </>
              ) : (
                <Box className={classes.notData}>
                  <Typography className={classes.title}>
                    No data recorded
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}

export default CommentSection
