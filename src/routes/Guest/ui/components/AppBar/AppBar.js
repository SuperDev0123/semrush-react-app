import * as React from 'react'
import classnames from 'classnames'
import pt from 'prop-types'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
} from '@material-ui/core'

import useAppBarStyles from './AppBar.styles'

const ElevationScroll = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: pt.element.isRequired,
  window: pt.func,
}

const ElevateAppBar = ({ wrapperClassName, children, ...rest }) => {
  const classes = useAppBarStyles()

  const mergedClassName = classnames(classes.appBar, {
    [wrapperClassName]: !!wrapperClassName,
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...rest}>
        <AppBar className={mergedClassName}>
          <Toolbar className={classes.toolbar}>{children}</Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  )
}

ElevateAppBar.propTypes = {
  wrapperClassName: pt.string,
}

export default ElevateAppBar
