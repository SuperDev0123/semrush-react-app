import React from 'react'
import clsx from 'clsx'
import { Box } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    boxShadow: '0px 14px 16px rgba(0, 0, 0, 0.30)',
    padding: '10px 25px',
    display: 'none',
    transition: '.2s all ease-in-out',
    opacity: 0,
    '&::before': {
      content: '""',
      width: 0,
      height: 0,
      position: 'absolute',
      top: '-15px',
      left: 'calc(50% - 5px)',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '15px solid white',
    },
    '&.dd-active': {
      display: 'flex',
      left: 'calc(50% - 110px)',
      top: 68,
      opacity: 1,
      transition: '.2s all ease-in-out',
      [theme.breakpoints.down('sm')]: {
        left: 'calc(50% - 117px)',
      },
    },
  },
  pollBtn: {
    margin: 5,
    '& .create-link': {
      width: 70,
      textAlign: 'center',
      lineHeight: 1.1,
      color: '#3C3F3B',
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: "'made_tommyregular',sans-serif",
      '&:hover': {
        fontWeight: 500,
        '& img': {
          transform: 'scale(1.05)',
          transition: '.2s all ease-in',
        },
      },
      '& img': {
        width: '100%',
        marginBottom: 10,
      },
    },
  },
}))

const CreatePollDropdown = ({ isActive }) => {
  const classes = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="row"
      className={clsx(classes.root, `${isActive ? 'dd-active' : ''}`)}
    >
      <Box
        p={1}
        display="flex"
        flexDirection="column"
        className={classes.pollBtn}
      >
        <NavLink to="/start-from-scratch" className="create-link">
          <img src="/images/plus-icon.png" />
          <span>Start from scratch</span>
        </NavLink>
      </Box>
      <Box
        p={1}
        display="flex"
        flexDirection="column"
        className={classes.pollBtn}
      >
        <NavLink to="/choose-template" className="create-link">
          <img src="/images/template-icon.png" />
          <span>Choose template</span>
        </NavLink>
      </Box>
    </Box>
  )
}

export default CreatePollDropdown
