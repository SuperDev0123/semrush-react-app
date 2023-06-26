import React, { useState } from 'react'
import { Grid, Paper } from '@material-ui/core'
import PollTemplatesStyle from './PollTemplates.style'
import CustomInput from '../Input'
import CreatePollCard from './card/CreatePollCard'

const ActiveTab = () => {
  const classes = PollTemplatesStyle()
  const [search, setSearch] = useState('')
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <CustomInput
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            placeholder="Type to search your poll"
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <CreatePollCard />
      </Grid>
    </Grid>
  )
}

export default ActiveTab
