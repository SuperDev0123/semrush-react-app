import React, { useCallback, useEffect, useState } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'

import { When } from '@src/common/components'
import { getPollList } from '@src/common/redux/actions/Poll'
import PollTemplatesStyle from './PollTemplates.style'
import CreatePollCard from './card/CreatePollCard'
import CustomInput from '../Input'
import PollCard from './card/PollCard'
import CreatePollCardSkeleton from './card/CreatePollCardSkeleton'

const AllPollsTab = ({}) => {
  const dispatch = useDispatch()
  const classes = PollTemplatesStyle()
  const [search, setSearch] = useState('')
  const [limit, setLimit] = useState(10)
  const {
    pollLoading,
    pollList,
    listTotal,
    currentPage,
    lastPage,
  } = useSelector(state => ({
    pollLoading: state.poll.pollList.loading,
    pollList: state.poll.pollList.data,
    listTotal: state.poll.pollList.total,
    currentPage: state.poll.pollList.current_page,
    lastPage: state.poll.pollList.last_page,
  }))
  const [page, setPage] = useState(1)
  const [filterPoll, setFilterPoll] = useState(pollList)

  const delayedQuery = useCallback(
    debounce(newValue => {
      dispatch(
        getPollList({
          limit: newValue.limit,
          page,
          query: newValue.str,
        })
      )
    }, 1000),
    []
  )
  const handleFilter = e => {
    delayedQuery({ str: e.target.value, limit })
    setSearch(e.target.value)
  }

  useEffect(() => {
    dispatch(getPollList({ limit, page, query: search }))
  }, [page, limit])

  useEffect(() => {
    setFilterPoll(pollList)
  }, [pollList])

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <Paper className={classes.paper}>
          <CustomInput
            value={search}
            onChange={handleFilter}
            placeholder="Type to search your test"
          />
        </Paper> */}
      </Grid>
      <Grid item xs={12}>
        {/* <When condition={pollLoading}>
                    <CreatePollCardSkeleton />
                    <CreatePollCardSkeleton />
                    <CreatePollCardSkeleton />
                </When> */}
        <When condition={filterPoll && filterPoll.length >= 0}>
          {(!filterPoll || filterPoll.length <= 0) && <CreatePollCard />}
          {filterPoll &&
            filterPoll.map((item, index) => {
              return <PollCard data={item} key={index} />
            })}

          {currentPage !== lastPage && (
            <Button
              className={classes.loadMoreBtn}
              onClick={() => {
                setPage(old => old + 1)
              }}
            >
              Load More
            </Button>
          )}
        </When>
      </Grid>
    </Grid>
  )
}

export default AllPollsTab
