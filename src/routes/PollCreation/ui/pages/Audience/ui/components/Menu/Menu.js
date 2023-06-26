import * as React from 'react'
import { Menu, MenuItem, IconButton, Typography, Box } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import useMenuStyles from './Menu.styles'

const AudienceImagePath = '/images/icons/audience.svg'

const options = ['Advanced Criteria']

const ITEM_HEIGHT = 48

const LongMenu = ({ openCriteriaBlock }) => {
  const classes = useMenuStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (option) => {
    setAnchorEl(null)
    if (option === 'Advanced Criteria') {
      openCriteriaBlock()
    }
  }

  return (
    <div>
      <IconButton
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
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={() => handleClose(option)}
          >
            <Box className={classes.menuOption}>
              <img
                src={AudienceImagePath}
                alt="Audience icon"
                height="20px"
                width="25px"
              />
              <Typography className={classes.menuOptionText}>
                {option}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default LongMenu
