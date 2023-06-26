import * as React from 'react'
import pt from 'prop-types'
import { Box, List, ListItem } from '@material-ui/core'

import { When } from '@src/common/components'
import Icons from '@src/common/assets/icons'

import useStepperStyles from './Stepper.styles'

const Stepper = ({ steps, activeStep, onStepChange, wrapperClassName }) => {
  const classes = useStepperStyles()

  const stepsLengthCb = React.useCallback(() => steps.length - 1, [steps])

  return (
    <Box className={`${classes.stepper} ${wrapperClassName || ''}`}>
      <List className={classes.stepperList}>
        {steps.map((step, idx) => {
          const mergedClassName = `${classes.stepperListItem} ${
            activeStep === step ? 'active' : ''
          }`
          return (
            <ListItem
              key={`${idx}-${step}`}
              onClick={() => onStepChange(step)}
              className={mergedClassName}
            >
              {step}
              <When condition={stepsLengthCb() !== idx}>
                <Icons.ArrowRightIcon
                  width="8px"
                  height="14px"
                  className={classes.stepperListItemIcon}
                />
              </When>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

Stepper.defaultProps = {
  steps: [],
  activeStep: null,
}

Stepper.propTypes = {
  activeStep: pt.string.isRequired,
  steps: pt.arrayOf(pt.string).isRequired,
  onStepChange: pt.func.isRequired,
  wrapperClassName: pt.string,
}

export default Stepper
