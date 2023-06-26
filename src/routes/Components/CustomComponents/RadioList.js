import React, { useContext, useState, useEffect } from 'react'
import { map, find } from 'lodash'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import InputContext from '@src/common/context/InputContext'

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  formControl: {
    display: 'flex',
    justifyContent: 'left',
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
    width: 28,
    height: 28,
    borderRadius: '50%',
    border: '1px solid #0A3D80',
    background: '#DEEBF1',
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
    '&:before': {
      width: '20px',
      height: '20px',
      backgroundColor: '#0A3D80',
      borderRadius: '100%',
      display: 'block',
      position: 'absolute',
      left: 'calc(50% - 10px)',
      top: 'calc(50% - 10px)',
      content: '""',
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
    minHeight: 29,
  },
}))
const StyledRadio = (props) => {
  const { prevalue, setValue, ...rest } = props
  const { selectedCriterias, setSelectedCriterias } = useContext(InputContext)
  const classes = useStyles()
  const handleOnclick = (event) => {
    if (event.target.checked && prevalue === props.value) {
      delete selectedCriterias[props.name]
      setSelectedCriterias({ ...selectedCriterias })
      setValue('')
    }
  }

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      onClick={handleOnclick}
      {...rest}
    />
  )
}

const RadioList = ({ listItems, title, price, name }) => {
  let { selectedCriterias, setSelectedCriterias } = useContext(InputContext)
  const currency = '$'
  const priceTitle = price
    ? `${currency}${parseFloat(price).toFixed(2)} add.`
    : ''
  const classes = useStyles()

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    if (Object.keys(selectedCriterias).length > 4) {
      alert(
        'You can select up to five advanced criteria. Please remove another criterion in order to proceed with this one'
      )
      return
    }
    setValue(event.target.value)
    const newOptions = listItems
      .map((option) => ({
        ...option,
        checked: option.value === event.target.value,
      }))
      .filter((option) => option.value === event.target.value)
    selectedCriterias = {
      ...selectedCriterias,
      [name]: { price, options: newOptions },
    }

    setSelectedCriterias(selectedCriterias)
  }

  useEffect(() => {
    const defaultObj = find(listItems, (item) => item.checked)
    if (defaultObj !== undefined) {
      setValue(defaultObj.value)
    }
  }, [])

  return (
    <FormControl
      component="fieldset"
      value={value}
      className={classes.formControl}
    >
      <FormLabel component="legend" className={classes.listTitle}>
        {title}
      </FormLabel>
      <p className={classes.listPriceTitle}>{priceTitle}</p>
      {
        <RadioGroup
          aria-label={name}
          name={name}
          value={value}
          onChange={handleChange}
        >
          {map(listItems, (item, key) => (
            <FormControlLabel
              value={item.value}
              key={`${name}_${key}`}
              control={
                <StyledRadio name={name} prevalue={value} setValue={setValue} />
              }
              label={item.label}
            />
          ))}
        </RadioGroup>
      }
    </FormControl>
  )
}

export default RadioList
