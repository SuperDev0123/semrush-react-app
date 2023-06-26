import React, { useEffect, useContext } from 'react'
import { Grid } from '@material-ui/core'

import { MetaProvider } from '@src/common/components'
import AppContext from '../../@jumbo/components/contextProvider/AppContextProvider/AppContext'
import PageContainer from '../../@jumbo/components/PageComponents/layouts/PageContainer'
import GridContainer from '../../@jumbo/components/GridContainer'
import ScratchBox from '../Components/CustomComponents/ScratchBox'
import { map } from 'lodash'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    '& .MuiGrid-grid-md-6': {
      maxWidth: '40%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
  },
}))

const scratchItems = [
  {
    id: 1,
    srcs: ['/images/poll-item/image-box.png'],
    type: 'image',
    footerText: 'Images',
  },
  {
    id: 2,
    srcs: ['/images/poll-item/text-opt.png'],
    type: 'short-text',
    footerText: 'Short Text',
  },
  {
    id: 3,
    srcs: ['/images/poll-item/audio-opt.png'],
    type: 'audio',
    footerText: 'Audio',
  },
  {
    id: 4,
    srcs: ['/images/poll-item/video-box.png'],
    type: 'video',
    footerText: 'Videos',
  },
  {
    id: 5,
    srcs: ['/images/poll-item/web-platform.jpg'],
    type: 'web-platform',
    footerText: 'Landing Page',
  },
]

const StartFromScratch = () => {
  const { setHasSideBarFilter, setLayout, setHasHeaderStepper } =
    useContext(AppContext)
  const classes = useStyles()

  useEffect(() => {
    setLayout('vertical-paged')
    setHasSideBarFilter(false)
    setHasHeaderStepper(false)
  }, [])

  return (
    <MetaProvider title="Start From Scratch">
      <PageContainer>
        <GridContainer>
          <Grid item md={12}>
            <h1>Start From Scratch</h1>
          </Grid>
        </GridContainer>
        <GridContainer className={classes.root}>
          {map(scratchItems, (content) => (
            <Grid item md={6} key={content.id}>
              <ScratchBox content={content} />
            </Grid>
          ))}
        </GridContainer>
      </PageContainer>
    </MetaProvider>
  )
}

export default StartFromScratch
