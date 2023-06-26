import * as React from 'react'
import pt from 'prop-types'
import { Tooltip as MUITooltip, withStyles } from '@material-ui/core'

import { tooltipStyles } from './constants'
import useTooltipStyles from './Tooltip.styles'

const TooltipCore = ({ children, title, ...rest }) => {
  const classes = useTooltipStyles()
  return (
    <MUITooltip
      {...rest}
      disableFocusListener
      disableTouchListener
      title={title}
      classes={{ tooltip: classes.customWidth }}
    >
      <button>{children}</button>
    </MUITooltip>
  )
}

TooltipCore.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  title: pt.string.isRequired,
}

const Tooltip = withStyles({
  tooltip: tooltipStyles.tooltip,
})(TooltipCore)

export default Tooltip
