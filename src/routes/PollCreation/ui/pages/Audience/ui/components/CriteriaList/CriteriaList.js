import * as React from 'react'
import { Box, Hidden, IconButton } from '@material-ui/core'

import { When } from '@src/common/components'
import { criterias as criteriaList } from '@src/@fake-db/criterias'
import { Autocomplete } from '@src/routes/PollCreation/ui/components'
import { AddCriteriaButton } from '@src/routes/PollCreation/ui/pages/Audience/ui/components'
import {
  getCriteriaCategory,
  isNullOrUndefined,
} from '@src/routes/PollCreation/ui/pages/Audience/common/utils'
import { criteriaListStateCreator } from '@src/routes/PollCreation/ui/pages/Audience/common/stateCreator'
import {
  criteriaFormFields,
  criteriaTypes,
} from '@src/routes/PollCreation/ui/pages/Audience/common/constants'
import { PollCreationContext } from '@src/routes/PollCreation/common/context/PollCreationContext'
import { pollCreationSteps } from '@src/routes/PollCreation/common/constants'

import useCriteriaListStyles from './CriteriaListStyles'

const TrashImagePath = '/images/icons/trash.svg'

const MAX_ITEM = 2

const CriteriaList = () => {
  const classes = useCriteriaListStyles()
  const { setAudienceStepFlow, ...state } =
    React.useContext(PollCreationContext)
  const { selectedCriteriaList } = state[pollCreationSteps.AUDIENCE]

  const options = criteriaList.options.map((option) => ({
    category: getCriteriaCategory(option.typeID),
    ...option,
  }))

  const setSelectedCriteriaList = (data) => {
    setAudienceStepFlow({ selectedCriteriaList: data })
  }

  const addCriteriaIsDisabled = () => {
    if (selectedCriteriaList.length === 0) return false

    return !selectedCriteriaList.every((item) => {
      if (item.typeID === criteriaTypes.SYSTEM) {
        return (
          !isNullOrUndefined(item[criteriaFormFields.COMPARISON]) &&
          !isNullOrUndefined(item[criteriaFormFields.COUNTRY])
        )
      }

      if (item.typeID === criteriaTypes.PREMIUM) {
        return !isNullOrUndefined(item[criteriaFormFields.TRUE_FALSE])
      }
      return false
    })
  }

  const addCriteriaBtnIsDisabled = addCriteriaIsDisabled()

  const addEmptyCriteria = () => {
    if (addCriteriaBtnIsDisabled) return

    const emptyCriteria = criteriaListStateCreator.createEmptyCriteria()
    setSelectedCriteriaList([...selectedCriteriaList, emptyCriteria])
  }

  const changeAutocompleteHandler = (selectedCriteria, autocompleteIDX) => {
    if (!selectedCriteria) {
      return setSelectedCriteriaList(
        selectedCriteriaList.filter(
          (filteredItem, idx) => idx !== autocompleteIDX
        )
      )
    }

    return setSelectedCriteriaList(
      selectedCriteriaList.map((mappedItem, idx) => {
        if (idx !== autocompleteIDX) return mappedItem
        return selectedCriteria
      })
    )
  }

  const extendSelectedCriteria = (name, selectedParam, autocompleteIDX) => {
    setSelectedCriteriaList(
      selectedCriteriaList.map((mappedItem, idx) => {
        if (idx !== autocompleteIDX) return mappedItem
        return { ...mappedItem, [name]: selectedParam }
      })
    )
  }

  const removeCriteria = (autocompleteIDX) => {
    setSelectedCriteriaList(
      selectedCriteriaList.filter((item, idx) => idx !== autocompleteIDX)
    )
  }
  const TrashButton = ({ autocompleteIDX }) => {
    return (
      <Box className={classes.trashIconWrapper}>
        <IconButton
          className={classes.trashIconButton}
          onClick={() => removeCriteria(autocompleteIDX)}
        >
          <img
            className={classes.trashIcon}
            src={TrashImagePath}
            alt="trash icon"
          />
        </IconButton>
      </Box>
    )
  }

  return (
    <Box className={classes.criteriaList}>
      <When condition={selectedCriteriaList.length > 0}>
        {selectedCriteriaList.map((criteria, autocompleteIDX) => (
          <React.Fragment key={autocompleteIDX}>
            <Box className={classes.criteriaListItem}>
              <Hidden mdUp>
                <Box mb={2}>
                  <TrashButton autocompleteIDX={autocompleteIDX} />
                </Box>
              </Hidden>
              <Box className={classes.autocompleteWrapper}>
                <Autocomplete
                  value={criteria}
                  onChange={(_e, T) =>
                    changeAutocompleteHandler(T, autocompleteIDX)
                  }
                  options={options}
                  groupBy={(option) => option.category}
                  getOptionLabel={(option) => option.label}
                />
              </Box>
              <When condition={criteria.hasComp === false}>
                <Box className={classes.autocompleteWrapper}>
                  <Autocomplete
                    name={criteriaFormFields.TRUE_FALSE}
                    value={criteria[criteriaFormFields.TRUE_FALSE] || null}
                    options={criteriaList.turefalse}
                    getOptionLabel={(option) => option.label}
                    onChange={(_e, T) =>
                      extendSelectedCriteria(
                        criteriaFormFields.TRUE_FALSE,
                        T,
                        autocompleteIDX
                      )
                    }
                  />
                </Box>
              </When>
              <When condition={criteria.hasComp === true}>
                <Box className={classes.autocompleteWrapper}>
                  <Autocomplete
                    name={criteriaFormFields.COMPARISON}
                    value={criteria[criteriaFormFields.COMPARISON] || null}
                    options={criteriaList.comparisions}
                    getOptionLabel={(option) => option.label}
                    onChange={(_e, T) =>
                      extendSelectedCriteria(
                        criteriaFormFields.COMPARISON,
                        T,
                        autocompleteIDX
                      )
                    }
                  />
                </Box>
              </When>
              <When condition={criteria.typeID === criteriaTypes.SYSTEM}>
                <Box className={classes.autocompleteWrapper}>
                  <Autocomplete
                    name={criteriaFormFields.COUNTRY}
                    value={criteria[criteriaFormFields.COUNTRY] || null}
                    options={criteriaList.countries}
                    getOptionLabel={(option) => option.label}
                    onChange={(_e, T) =>
                      extendSelectedCriteria(
                        criteriaFormFields.COUNTRY,
                        T,
                        autocompleteIDX
                      )
                    }
                  />
                </Box>
              </When>
              <Hidden smDown>
                <TrashButton autocompleteIDX={autocompleteIDX} />
              </Hidden>
            </Box>
            <When
              condition={
                autocompleteIDX < selectedCriteriaList.length - 1 &&
                selectedCriteriaList.length !== 0
              }
            >
              <hr className={classes.divider} />
            </When>
          </React.Fragment>
        ))}
      </When>
      <When condition={selectedCriteriaList.length < MAX_ITEM}>
        <AddCriteriaButton
          disabled={addCriteriaBtnIsDisabled}
          onClick={addEmptyCriteria}
          label="Add Criterion"
        />
      </When>
    </Box>
  )
}

export default CriteriaList
