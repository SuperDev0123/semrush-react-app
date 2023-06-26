import React from 'react'
import { List } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  navMenuItem: {
    padding: '0 0 0 0',
    position: 'relative',
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      paddingLeft: 16,
    },
  },
  navMenuLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '18px 16px 18px 24px',
    borderLeft: '4px solid transparent',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    textDecoration: 'none',
    color: theme.palette.sidebar.textColor,
    '& i': {
      marginRight: 15,
      fontSize: 18,
      lineHeight: '19px',
    },
    '& .Cmt-nav-text, & .Cmt-icon-root': {
      fontSize: '15px',
      lineHeight: '18px',
      fontWeight: 400,
    },
    '&:hover, &:focus': {
      color: theme.palette.sidebar.textDarkColor,
      backgroundColor: theme.palette.sidebar.navHoverBgColor,
      borderColor: '#fff',
      '& .Cmt-icon-root, & .Cmt-nav-text': {
        color: theme.palette.sidebar.textDarkColor,
      },
    },
    '&.active': {
      color: theme.palette.sidebar.textActiveColor,
      backgroundColor: theme.palette.sidebar.navActiveBgColor,
      borderColor: '#fff',
      '& .Cmt-icon-root, & .Cmt-nav-text': {
        color: theme.palette.sidebar.textActiveColor,
      },
      '&:hover, &:focus': {
        '& .Cmt-nav-text, & .Cmt-icon-root': {
          color: theme.palette.sidebar.textActiveColor,
        },
      },
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      justifyContent: 'center',
      width: 'calc(100% + 15px)',
      height: 55,
      padding: 0,
      marginLeft: -15,
      marginRight: 0,
      paddingLeft: 11,
    },
  },
  navText: {
    flex: 1,
    fontSize: 14,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
  iconRoot: {
    marginRight: 16,
    fontSize: 20,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      marginRight: 0,
    },
  },
}))

const NavMenuItem = (props) => {
  const { name, icon, link, onClick } = props
  const classes = useStyles()

  //   const renderIcon = () => {
  //     if (icon && isValidElement(icon)) {
  //       return cloneElement(icon, {
  //         className: clsx(classes.iconRoot, 'Cmt-icon-root'),
  //       })
  //     }

  //     return null
  //   }

  const renderFaIcon = () => {
    return icon
  }

  return (
    <List
      component="div"
      className={clsx(classes.navMenuItem, 'Cmt-nav-menu-item')}
    >
      {onClick ? (
        <Box
          className={clsx(classes.navMenuLink, 'Cmt-nav-menu-link')}
          onClick={onClick}
        >
          {renderFaIcon()}
          <Box
            component="span"
            className={clsx(classes.navText, 'Cmt-nav-text')}
          >
            {name}
          </Box>
        </Box>
      ) : (
        <NavLink
          className={clsx(classes.navMenuLink, 'Cmt-nav-menu-link')}
          to={link}
        >
          {/* Display an icon if any */}
          {renderFaIcon()}
          <Box
            component="span"
            className={clsx(classes.navText, 'Cmt-nav-text')}
          >
            {name}
          </Box>
        </NavLink>
      )}
    </List>
  )
}

export default NavMenuItem
