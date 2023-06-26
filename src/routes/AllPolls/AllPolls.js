import React, { useContext, useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { map } from 'lodash'
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  makeStyles,
  Button,
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

import { MetaProvider, When, Toaster } from '@src/common/components'
import AppContext from '@src/@jumbo/components/contextProvider/AppContextProvider/AppContext'
import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import CustomizedSelect from '@src/@jumbo/components/Common/CustomizeSelect'
import GridContainer from '@src/@jumbo/components/GridContainer'
import { fetchPolls } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import {
  transformFetchAllResponse,
  getSortedItems,
} from '@src/common/functions/tools'
import { pollSortOptions } from '@src/common/constants'

import PollBox from '../Components/CustomComponents/PollBox'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-grid-md-6': {
      maxWidth: '40%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        width: '100%',
      },
    },
  },
  flatBtn: {
    borderRadius: 9,
    boxShadow: 'none',
    backgroundColor: '#0A3D80',
    fontFamily: 'made_tommyregular, sans-serif',
    fontSize: 14,
    lineHeight: '17px',
    marginLeft: 35,
    marginRight: 35,
    padding: '7px 15px',
    minWidth: 135,
    '&:hover': {
      backgroundColor: '#072d5f',
    },
    '& span': {
      fontWeight: 500,
      color: '#ffffff',
      textTransform: 'initial',
    },
    '& svg': {
      fontSize: '1.4rem',
      position: 'relative',
      left: '-3px',
      [theme.breakpoints.down('sm')]: {
        left: 0,
      },
    },
    [theme.breakpoints.down('md')]: {
      padding: 6,
      marginLeft: 0,
      marginRight: 0,
      minWidth: 'unset',
      '& svg': {
        left: 0,
      },
    },
  },
  filterGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  filterContainer: {
    [theme.breakpoints.down('sm')]: {},
  },
  emptyBlock: {
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
}))

const AllPolls = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const { setHasSideBarFilter, setHasHeaderStepper } = useContext(AppContext)
  const [sortValue, setSortValue] = useState('recent')
  const classes = useStyles()

  const fetchPollsQuery = useQuery({
    queryKey: queryKeys.FETCH_POLLS,
    queryFn: fetchPolls,
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText
      )
    },
  })

  const dataFlowCallback = React.useCallback(
    () =>
      getSortedItems(
        transformFetchAllResponse(fetchPollsQuery.data),
        sortValue
      ),
    [fetchPollsQuery.data]
  )
  const dataFlow = dataFlowCallback()

  useEffect(() => {
    setHasSideBarFilter(true)
    setHasHeaderStepper(false)
  }, [])

  if (fetchPollsQuery.isFetching)
    return <h1 className="text-center mt-5">Loading...</h1>

  return (
    <>
      <When condition={dataFlow.length === 0 && !fetchPollsQuery.isFetching}>
        <Box className={classes.emptyBlock}>
          <Typography variant="h1" style={{ marginBottom: 15 }}>
            No polls found.
          </Typography>
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              className={classes.flatBtn}
            >
              <AddIcon /> <span>Create your first poll</span>
            </Button>
          </Link>
        </Box>
      </When>
      <When condition={!fetchPollsQuery.isFetching}>
        <MetaProvider title="All Polls">
          <PageContainer>
            <GridContainer
              style={{ justifyContent: matches ? 'center' : 'left' }}
              className={classes.root}
            >
              <Grid item md={6}>
                <h1>All Your Polls</h1>
              </Grid>
              <Grid item md={6} className={classes.filterGrid}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  className={classes.filterContainer}
                >
                  <Grid item xs={8} md={6}>
                    <CustomizedSelect
                      options={pollSortOptions}
                      id="sort_by"
                      label="Sort by:"
                      value={sortValue}
                      setValue={setSortValue}
                    />
                  </Grid>
                </Grid>
              </Grid>
              {map(dataFlow, (content) => (
                <Grid item md={6} key={content.id}>
                  <PollBox content={content} />
                </Grid>
              ))}
            </GridContainer>
          </PageContainer>
        </MetaProvider>
      </When>
    </>
  )
}

export default AllPolls
