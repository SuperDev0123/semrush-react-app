import React, { useState } from 'react'
import { Box, Menu, MenuItem } from '@material-ui/core'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CmtDropdownMenu = ({ TriggerComponent, items, onItemClick }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuItems, setMenuItems] = useState(items)
  const open = Boolean(anchorEl)

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = (item, selectedIndex) => {
    let updatedItem = { ...item }
    if (item.onClick && typeof item.onClick === 'function') {
      updatedItem = item.onClick(item)
    } else if (onItemClick && typeof onItemClick === 'function') {
      updatedItem = onItemClick(item)
    }

    setMenuItems(
      menuItems.map((item, index) => {
        if (updatedItem && selectedIndex === index) {
          item = updatedItem
        }
        return item
      })
    )

    closeMenu()
  }

  const StyledMenu = styled((props) => <Menu {...props} />)(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: '1rem',
      minWidth: 180,
      overflow: 'visible',
      color: '#000',
      fontFamily: 'Poppins Regular',
      fontSize: '10px',
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
        fontSize: '10px',
      },
    },
  }))
  return (
    <React.Fragment>
      <Box className="pointer">
        <TriggerComponent.type {...TriggerComponent.props} onClick={openMenu} />
      </Box>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        disableScrollLock
      >
        {menuItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              disabled={item.disabled}
              onClick={() => handleMenuItemClick({ ...item }, index)}
            >
              {item.icon}
              <Box ml={2}>{item.label}</Box>
            </MenuItem>
          )
        })}
      </StyledMenu>
    </React.Fragment>
  )
}

CmtDropdownMenu.propTypes = {
  items: PropTypes.array.isRequired,
  TriggerComponent: PropTypes.element.isRequired,
  onItemClick: PropTypes.func,
}

export default CmtDropdownMenu
