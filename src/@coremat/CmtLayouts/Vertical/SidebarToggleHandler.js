import React, { useContext } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import LayoutContext from './LayoutContext/LayoutContext'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#535353',
  },
}))
const SidebarToggleHandler = ({ children, ...restProps }) => {
  const classes = useStyles()
  const { isOpen, setOpen } = useContext(LayoutContext)

  return (
    <IconButton
      className={classes.root}
      onClick={() => setOpen(!isOpen)}
      {...restProps}
    >
      {children || <MenuIcon />}
    </IconButton>
  )
}

export default SidebarToggleHandler
