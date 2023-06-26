import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Box } from '@material-ui/core'

import useBodyStyles from './Body.styles'
import Templates from '../../pages/Templates'

const Body = () => {
  const classes = useBodyStyles()

    return (
        <Box className={classes.body}>
            <Switch>
                <Route path="/" component={Templates}/>
            </Switch>
        </Box>
    )
};

export default Body
