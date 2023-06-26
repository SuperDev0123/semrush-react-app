import React, { useContext, useEffect } from 'react'
import { map, filter } from 'lodash'
import { Box, makeStyles } from '@material-ui/core'

import PollContext from '@src/common/context/PollContext'

import CheckList from './FilterChecklist'

const filters = {
  status: [
    { value: 'Completed', label: 'Completed', checked: true },
    { value: 'In progress', label: 'In progress', checked: true },
    { value: 'Not finished', label: 'Not finished', checked: true },
  ],
  responses: [
    { value: '<100', label: '<100', checked: false },
    { value: '100 - 500', label: '100 - 500', checked: true },
    { value: '500 - 1000', label: '500 - 1000', checked: false },
    { value: '1000 - 5000', label: '1000 - 5000', checked: true },
    { value: '>5000', label: '>5000', checked: false },
  ],
  pollTypes: [
    { value: 'image', label: 'Image', checked: true },
    { value: 'text', label: 'Text', checked: true },
    { value: 'audio', label: 'Audio', checked: false },
    { value: 'video', label: 'Video', checked: true },
  ],
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    position: 'fixed',
    width: 215,
    background: '#25a5ff',
    padding: '15px 20px',
    height: '100%',
    top: 74,
    left: 80,
    zIndex: 5,
    [theme.breakpoints.down('sm')]: {
      left: -295,
      top: 68,
    },
    '& .MuiFormLabel-root': {
      fontSize: 15,
      lineHeight: '20px',
      fontFamily: "'made_tommyregular', sans-serif",
      fontWeight: 400,
      color: '#fff',
    },
    '& .MuiFormControl-root': {
      marginTop: 8,
    },
    '& .MuiCheckbox-root': {
      padding: '5px 9px',
    },
    '& .check-box': {
      width: 20,
      height: 20,
      borderColor: 'rgb(255 255 255 / 36%)',
      background: 'transparent',
      borderRadius: '2px',
      '&.checked': {
        '&:before': {
          filter: 'brightness(0) invert(1)',
          backgroundSize: 13,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        },
      },
    },
    '& .MuiFormControlLabel-label': {
      fontSize: 13,
      lineHeight: '21px',
      color: 'rgb(255 255 255 / 62%)',
      fontFamily: "'made_tommylight', sans-serif",
    },
    '& .Mui-checked': {
      '& ~ .MuiFormControlLabel-label': {
        color: '#fff',
      },
      '& .check-box': {
        borderColor: '#fff',
      },
    },
    '& input': {
      '&:hover': {
        '&  ~ .check-box': {
          background: 'rgba(255,255,255,.2)',
        },
      },
    },
  },
  title: {
    fontSize: 17,
    lineHeight: '17px',
    fontFamily: "'made_tommybold', sans-serif",
    fontWeight: 600,
    textTransform: 'uppercase',
  },
}))

const Filters = () => {
  const classes = useStyles()
  const { setSelectedFilters } = useContext(PollContext)
  const { status, responses, pollTypes } = filters

  useEffect(() => {
    const selected = {}
    map(filters, (filterItems, key) => {
      selected[key] = map(
        filter(filterItems, (item) => item.checked),
        (mItem) => mItem.value.toLowerCase()
      )
    })
    setSelectedFilters(selected)
  }, [])

  return (
    <Box className={`${classes.root} filterRoot`}>
      <h3 className={classes.title}>Filter</h3>
      <CheckList listItems={status} title="Status" name="status" />
      <CheckList listItems={responses} title="Responses" name="responses" />
      <CheckList listItems={pollTypes} title="Poll Type" name="pollTypes" />
    </Box>
  )
}

export default Filters
