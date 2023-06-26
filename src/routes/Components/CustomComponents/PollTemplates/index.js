import React from 'react'
import clsx from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AllPollsTab from './AllPollsTab'
import ActiveTab from './ActiveTab'
import CompletedTab from './CompletedTab'

const useStyles = makeStyles(() => ({
  pollItemsContainer: {
    display: 'block',
    marginTop: '5px',
  },
  gridItem: {
    padding: '6px !important',
    marginBottom: 60,
  },
}))

const PollTemplates = ({ category }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.pollItemsContainer)}>
      {category === 'all_polls' && <AllPollsTab />}
      {category === 'active' && <ActiveTab />}
      {category === 'completed' && <CompletedTab />}
    </div>
  )
}

export default PollTemplates
