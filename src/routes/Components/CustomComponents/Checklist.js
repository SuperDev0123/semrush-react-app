import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Checkbox, Box } from '@material-ui/core'
import clsx from 'clsx'
import { map, keys } from 'lodash'

import InputContext from '@src/common/context/InputContext'

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    display: 'flex',
    justifyContent: 'left',
    '& .MuiFormControlLabel-root': {
      marginLeft: -9,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 5,
      },
    },
    '& .MuiFormControlLabel-label': {
      fontWeight: 400,
      fontSize: 21,
      lineHeight: '24px',
      fontFamily: "'made_tommyregular', sans-serif",
      color: theme.palette.primary.dark,
      textAlign: 'left',
    },
    '& .MuiFormGroup-root': {
      marginTop: 5,
    },
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: '#DEEBF1',
    border: `1px solid ${theme.palette.primary.dark}`,
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    position: 'relative',
    '&:before': {
      display: 'block',
      width: 17,
      height: 13,
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='17' height='13' viewBox='0 0 17 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 7.04241L5.82155 12.8751L17 1.70766L15.3952 0.125L5.82155 9.68749L1.58263 5.4486L0 7.04241Z' fill='%230A3D80'/%3E%3C/svg%3E%0A\")",
      content: '""',
      position: 'absolute',
      left: 'calc(50% - 8.5px)',
      top: 'calc(50% - 6.4px)',
    },
  },
  listTitle: {
    fontSize: 32,
    lineHeight: '42px',
    fontFamily: "'made_tommyregular', sans-serif",
    fontWeight: 600,
    color: theme.palette.primary.dark,
    textAlign: 'left',
  },
  listPriceTitle: {
    fontSize: 18,
    lineHeight: '29px',
    fontFamily: "'made_tommyregular', sans-serif",
    fontWeight: 500,
    color: theme.palette.primary.dark,
    textAlign: 'left',
  },
}))

const StyledCheckbox = (props) => {
  const classes = useStyles()

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={
        <Box
          component="span"
          className={clsx(
            classes.icon,
            classes.checkedIcon,
            'check-box checked'
          )}
        />
      }
      icon={
        <Box component="span" className={clsx(classes.icon, 'check-box')} />
      }
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  )
}

const CheckList = ({ listItems, title, price, name }) => {
  const { selectedCriterias, setSelectedCriterias } = useContext(InputContext)
  const currency = '$'
  const priceTitle = price
    ? `${currency}${parseFloat(price).toFixed(2)} add.`
    : ''
  const classes = useStyles()

  const [state, setState] = useState({})

  useEffect(() => {
    const stateItem = {}
    map(listItems, (item, idx) => (stateItem[`${name}_${idx}`] = item.checked))
    setState(stateItem)
  }, [listItems])

  const handleChange = (event) => {
    if (keys(selectedCriterias).length > 4) {
      event.target.checked = false
      alert(
        'You can select up to five advanced criteria. Please remove another criterion in order to proceed with this one'
      )
      return
    }
    setState({ ...state, [event.target.name]: event.target.checked })
    let slectedOptions = []
    if (selectedCriterias !== null && selectedCriterias[name] !== undefined) {
      slectedOptions = selectedCriterias[name].options
    }
    if (event.target.checked) {
      slectedOptions.push({
        value: event.target.value,
        label: event.target.value,
        checked: true,
      })
    } else {
      const index = slectedOptions.indexOf(event.target.value)
      slectedOptions.splice(index, 1)
    }
    if (slectedOptions.length > 0) {
      setSelectedCriterias({
        ...selectedCriterias,
        [name]: { price, options: slectedOptions },
      })
    } else {
      delete selectedCriterias[name]
      setSelectedCriterias({ ...selectedCriterias })
    }
  }

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend" className={classes.listTitle}>
        {title}
      </FormLabel>
      <p className={classes.listPriceTitle}>{priceTitle}</p>
      <FormGroup>
        {keys(state).length > 0 &&
          map(listItems, (item, key) => (
            <FormControlLabel
              key={`${name}_${key}`}
              checked={state[`${name}_${key}`]}
              control={
                <StyledCheckbox
                  value={item.value}
                  onChange={handleChange}
                  name={`${name}_${key}`}
                />
              }
              label={item.label}
            />
          ))}
      </FormGroup>
    </FormControl>
  )
}

export default CheckList
