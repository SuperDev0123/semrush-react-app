import * as React from 'react'
import pt from 'prop-types'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const ITEM_HEIGHT = 48

const DropdownMenu = ({ options, onChange, ...rest }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    onChange(null)
  }

  return (
    <div>
      <IconButton
        {...rest}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => onChange(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

DropdownMenu.defaultProps = {
  options: [],
}

DropdownMenu.propTypes = {
  options: pt.array.isRequired,
  onChange: pt.func.isRequired,
}

export default DropdownMenu
