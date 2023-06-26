import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiStepper-horizontal': {
      display: 'flex',
      padding: '24px 0',
      marginLeft: 20,
      // [theme.breakpoints.up('lg')]: {
      //   marginLeft: '248px',
      // },
    },
    '& .MuiStep-horizontal': {
      margin: 0,
      padding: 0,
      position: 'relative',
      '&:first-child': {
        '& .MuiStepLabel-label': {
          borderRadius: '4px 0 0 6px',
        },
      },
      '& .MuiStepButton-root': {
        margin: 0,
        padding: 0,
        '& .MuiStepLabel-label': {
          color: '#ffffff',
          fontFamily: "'made_tommyregular', sans-serif",
          fontSize: 16,
          lineHeight: '20px',
          backgroundColor: '#98AECA',
          margin: '-8px 0',
          padding: '10px 10px 10px 30px',
          '&:after': {
            content: "''",
            width: 0,
            height: 0,
            borderTop: '20px solid transparent',
            borderBottom: '20px solid transparent',
            borderLeft: '20px solid #98AECA',
            position: 'absolute',
            top: -8,
            right: -20,
            zIndex: 2,
          },
          '&.MuiStepLabel-active': {
            backgroundColor: theme.palette.primary.dark,
            '&:after': {
              borderLeft: `20px solid ${theme.palette.primary.dark}`,
            },
          },
          [theme.breakpoints.down('md')]: {
            fontSize: 13,
            padding: '10px 5px 10px 25px',
          },
        },
      },
    },
    '& .MuiStepLabel-iconContainer': {
      display: 'none',
    },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

function getSteps() {
  return ['Design Your Poll', 'Select AudienceUnsafe', 'Preview & Checkout']
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Design Your Poll'
    case 1:
      return 'Step 2: Select AudienceUnsafe'
    case 2:
      return 'Step 3: Preview & Checkout'
    default:
      return 'Unknown step'
  }
}

export default function HorizontalNonLinearStepper({ presState }) {
  const history = useHistory()
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(presState)
  const [completed, setCompleted] = React.useState({})
  const steps = getSteps()

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    if (Number(step) === 0) history.push('/create-poll/image')
    if (Number(step) === 1) history.push('/select-audience')
    if (Number(step) === 2) history.push('/preview-poll')
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
