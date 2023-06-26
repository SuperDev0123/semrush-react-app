import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import { Templates } from '@src/common/components'

import { useHeaderCreateStyles } from './styles'
import { Hidden, IconButton } from '@material-ui/core'

const HeaderCreate = ({ handleClick, node }) => {
  const classes = useHeaderCreateStyles()
  const ShowLoaderData = useSelector((state) => state.ShowLoaderGet)
  const [templatesModelIsOpen, setTemplatesModalIsOpen] = React.useState(false)

  const requireSubscriptionOrAllowCreatePoll = () => {
    handleClick()
    setTemplatesModalIsOpen(true)
  }

  return (
    <div className={classes.root} ref={node}>
      <Hidden smDown>
        <Button
          variant="contained"
          color="primary"
          className={classes.flatBtn}
          onClick={requireSubscriptionOrAllowCreatePoll}
          disabled={!!ShowLoaderData}
        >
          <span>Create a Test</span>
        </Button>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          aria-label="add an alarm"
          size="small"
          onClick={requireSubscriptionOrAllowCreatePoll}
          disabled={!!ShowLoaderData}
        >
          <AddIcon />
        </IconButton>
      </Hidden>
      <Templates
        open={templatesModelIsOpen}
        onClose={() => setTemplatesModalIsOpen(false)}
      />
    </div>
  )
}

export default HeaderCreate
