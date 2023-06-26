import React, { useEffect, useState } from 'react'
import { map, find } from 'lodash'
import { Grid } from '@material-ui/core'

import { When } from '@src/common/components'

import SelectNative from './SelectNative'

const selectNativeStyle = {
  margin: 0,
}

const CriteriaItem = ({
  systemCriterias,
  premiumCriterias,
  criterias,
  criteria,
  onCriteriaChange,
  index,
}) => {
  const { types, comparisions, options, countries, turefalse } = criterias

  const { qualification, comparision, value } = criteria

  const [values, setValues] = useState([])
  const [valueOptions, setValueOptions] = useState([])

  const [hasComp, setHasComp] = useState(false)

  const onHandleChange = (data, key) => {
    const newCriteria = { ...criteria }
    newCriteria[key] = data
    onCriteriaChange(newCriteria, index)
  }

  useEffect(() => {
    const optionObj = find(
      options,
      (option) => option.id === parseInt(qualification)
    )
    if (optionObj) {
      const { hasComp, price, valueType, id, typeID, label } = optionObj
      const newValues = valueType === 2 ? countries : turefalse
      setHasComp(hasComp)
      setValues(newValues)
      onCriteriaChange(
        {
          ...criteria,
          comparision: hasComp ? comparisions[0].value : '',
          value: newValues[0].value,
          price,
          id,
          label,
          typeID,
          parentIndex: index,
        },
        index
      )
      setValueOptions(
        map(newValues, (option) => (
          <option value={option.value} key={`vls${option.id}`}>
            {option.label}
          </option>
        ))
      )
    } else {
      setValues([])
      setHasComp(false)
      setValueOptions([])
      onCriteriaChange(
        { ...criteria, comparision: '', value: '', price: 0 },
        index
      )
    }
  }, [qualification])

  const comparisionOptions = map(comparisions, (option) => (
    <option value={option.value} key={`cmp_${option.id}`}>
      {option.label}
    </option>
  ))

  return (
    <>
      <Grid item sm={5} xs={5}>
        <SelectNative
          formControlStyles={selectNativeStyle}
          value={qualification}
          indx={'qualification'}
          emptyOption={true}
          setValue={onHandleChange}
        >
          {map(types, (type) => (
            <optgroup label={type.label} key={`tps_${type.id}`}>
              {map(
                type.id === 1 ? systemCriterias : premiumCriterias,
                (criteria) => (
                  <option value={criteria.id} key={`sc_${criteria.id}`}>
                    {criteria.label}
                  </option>
                )
              )}
            </optgroup>
          ))}
        </SelectNative>
      </Grid>
      <When condition={hasComp}>
        <Grid item xs={2}>
          <SelectNative
            formControlStyles={selectNativeStyle}
            indx={'comparision'}
            value={comparision}
            setValue={onHandleChange}
          >
            {comparisionOptions}
          </SelectNative>
        </Grid>
      </When>
      <When condition={values.length}>
        <Grid item xs={4}>
          <SelectNative
            formControlStyles={selectNativeStyle}
            indx={'value'}
            value={value}
            setValue={onHandleChange}
          >
            {valueOptions}
          </SelectNative>
        </Grid>
      </When>
    </>
  )
}

export default CriteriaItem
