import React from 'react'
import {
  alpha,
  Fade,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  styled,
} from '@material-ui/core'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { makeStyles } from '@material-ui/styles'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    disableScrollLock
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(14),
    minWidth: 180,
    overflow: 'visible',
    color: theme.palette.common.white,
    fontFamily: 'Poppins Regular',
    fontSize: '10px',
    backgroundColor: '#016AE9',
    '&::after': {
      content: '" "',
      position: 'absolute',
      transform: 'rotate(180deg)',
      top: '-1.8rem',
      right: '10.9px',
      backgroundColor: 'transparent',
      width: '0',
      height: '0',
      borderTop: '15px solid #016AE9',
      borderRight: '15px solid transparent',
      borderBottom: '15px solid transparent',
      borderLeft: '15px solid transparent',
    },
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
      fontSize: '10px',
    },
    '& .MuiMenuItem-root': {
      display: 'flex',
      justifyContent: 'space-between',
      '& .MuiSvgIcon-root': {
        fontSize: '10px',
        color: theme.palette.text.white,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))

const createStyle = makeStyles(() => ({
  icons: {
    justifyContent: 'end',
    '& img': {
      height: '18px',
    },
  },
}))
const CustomPopoverMenu = ({ children, options }) => {
  const classes = createStyle()
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <>
          <div {...bindTrigger(popupState)}>{children}</div>
          <StyledMenu TransitionComponent={Fade} {...bindMenu(popupState)}>
            {options.map((items, index) => (
              <MenuItem
                key={index}
                onClick={(e) => {
                  popupState.close()
                  items.handleClick(e)
                }}
              >
                <ListItemText>{items.name}</ListItemText>
                <ListItemIcon className={classes.icons}>
                  {items.icon}
                </ListItemIcon>
              </MenuItem>
            ))}
          </StyledMenu>
        </>
      )}
    </PopupState>
  )
}

export default CustomPopoverMenu
