import React, { useEffect, useContext } from 'react'
import { map } from 'lodash'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import AppContext from '@src/@jumbo/components/contextProvider/AppContextProvider/AppContext'
import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import PollItem from './Components/CustomComponents/PollTemplates/PollItem'
import GridContainer from '@src/@jumbo/components/GridContainer'
import { pollTypes } from '@src/common/constants'

const { IMAGE, SHORTTEXT, WEB_PLATFORM } = pollTypes

const useStyles = makeStyles((theme) => ({
  pollsRoot: {
    '& .MuiGrid-grid-md-6': {
      maxWidth: '40%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        width: '100%',
      },
    },
    '& .template-item': {
      minHeight: 367,
      padding: '23px 25px',
      marginBottom: 45,
      '&>label': {
        fontSize: 18,
        lineHeight: '22px',
        marginBottom: 30,
      },
      '& .footerBgType': {
        padding: '24px 23px',
        fontSize: 18,
        lineHeight: '22px',
      },
    },
  },
  pollItemsContainer: {
    display: 'block',
    marginTop: '23px',
    paddingLeft: '6px',
    paddingRight: '6px',
  },
  gridItem: {
    padding: '12px !important',
  },
}))

const pollItems = [
  {
    id: 1,
    srcs: ['/images/poll-item/ad-1.png', '/images/poll-item/ad-2.png'],
    type: IMAGE,
    question: 'Which ad is more unique?',
    category: 'creative_testing',
    boxed: true,
    footerText: 'Ad Testing',
  },
  {
    id: 2,
    srcs: ['/images/poll-item/logo-1.png', '/images/poll-item/logo-2.png'],
    type: IMAGE,
    question: 'Which logo design do you prefer for a pet store?',
    category: 'logo_concept',
    boxed: true,
    footerText: 'Logo Design',
  },
  {
    id: 3,
    srcs: [],
    type: SHORTTEXT,
    question: 'Which of these two vaccines do you prefer?',
    category: 'recommended',
    footerText: 'Performance test',
  },
  {
    id: 4,
    srcs: [],
    type: WEB_PLATFORM,
    question: 'Which page would you trust to buy car insurance?',
    category: 'recommended',
    footerText: 'Landing Page',
  },
]

const ChooseTemplate = () => {
  const { setLayout, setHasSideBarFilter, setHasHeaderStepper } =
    useContext(AppContext)

  useEffect(() => {
    setLayout('vertical-paged')
    setHasSideBarFilter(false)
    setHasHeaderStepper(false)
  }, [])

  const classes = useStyles()
  return (
    <PageContainer>
      <GridContainer>
        <Grid item md={12}>
          <h1>Choose A Template</h1>
        </Grid>
      </GridContainer>
      <GridContainer className={classes.pollsRoot}>
        {map(pollItems, (content) => (
          <Grid item md={6} key={content.id} className={classes.gridItem}>
            <PollItem content={content} templateClass="template-item" />
          </Grid>
        ))}
      </GridContainer>
    </PageContainer>
  )
}

export default ChooseTemplate
