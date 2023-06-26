import React, { useContext, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import TuneIcon from '@material-ui/icons/Tune'
import Box from '@material-ui/core/Box'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import CmtBackDrop from '@src/@coremat/CmtBackDrop'
import { intranet } from '@src/@fake-db'

import Notifications from './components/Notifications'
import FilterForm from './components/FilterForm'

const useStyles = makeStyles(() => ({
  scrollbarRoot: {
    height: 368,
  },
}))

const defaultTitle = 'Latest Notifications'
const BackDropView = () => {
  const classes = useStyles()
  const { showConcealedIcon, showExtrasContainer, showSubHeader } =
    useContext(CorematContext)
  const [title, setTitle] = useState(defaultTitle)
  const [listsToShow, setListsToShow] = useState([])

  const onRevealedAction = (status) => {
    setTitle(status ? 'Filter By' : defaultTitle)
  }

  return (
    <CmtBackDrop
      concealedIcon={showConcealedIcon ? <TuneIcon /> : ''}
      backLayerConcealed={title}
      onRevealed={onRevealedAction}
      subHeader={showSubHeader ? <Typography>Sub Headers</Typography> : ''}
      extrasContainer={
        showExtrasContainer ? <MoreHorizIcon className="pointer" /> : null
      }
      backLayerRevealed={
        <FilterForm listsToShow={listsToShow} setListsToShow={setListsToShow} />
      }
    >
      <Box pb={4}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <Notifications
            listsToShow={listsToShow}
            notifications={intranet.latestNotifications}
          />
        </PerfectScrollbar>
      </Box>
    </CmtBackDrop>
  )
}

export default BackDropView
