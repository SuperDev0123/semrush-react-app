import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { map } from 'lodash'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Box, Stepper, Step, StepLabel, StepConnector } from '@material-ui/core'
import { getSteps } from '@src/routes/CreatePollNew/common/functions'
import PollContext from '@src/common/context/PollContext'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: 20,
    '& .MuiStepLabel-alternativeLabel': {
      fontFamily: "'made_tommyregular', sans-serif",
    },
    '& .MuiStepper-horizontal': {
      backgroundColor: 'transparent',
      padding: '0 0 25px ',
    },
    '& .MuiStep-horizontal': {
      position: 'relative',
      '&:first-child': {
        '& .MuiStepLabel-label': {},
      },
    },
    '& .MuiStepLabel-iconContainer': {},
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(2 70 243) 0%,rgb(0 141 223) 100%)',
      margin: '0 5px',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(2 70 243) 0%,rgb(0 141 223) 100%)',
      margin: '0 5px',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#BACDDE',
    borderRadius: 1,
  },
})(StepConnector)

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(10, 61, 128, 0.17)',
    zIndex: 1,
    color: 'rgba(10, 61, 128, 0.39)',
    width: 45,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'made_tommybold, sans-serif',
    fontSize: 20,
    alignItems: 'center',
    boxShadow: '0 0 0 1px rgba(10, 61, 128, 0.17)',
    border: '2px solid #deebf1',
    borderRadius: '100%',
    cursor: 'pointer',
  },
  active: {
    color: '#fff',
    backgroundImage: 'linear-gradient(90deg, #0246F3 17.08%, #008DDF 81.11%)',
    boxShadow: '0 0 0 1px #0246f3',
  },
  completed: {
    color: '#fff',
    backgroundImage: 'linear-gradient(90deg, #0246F3 17.08%, #008DDF 81.11%)',
    boxShadow: '0 0 0 1px #0246f3',
  },
})

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles()
  const { active, completed } = props

  return (
    <Box
      className={clsx(classes.root, 'xz-11', {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {/* {icons[String(props.icon)]} */}
      {props.icon}
    </Box>
  )
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
}

export default function ThemeStepper({ formik }) {
  const classes = useStyles()
  const { pollStep, setPollStep } = useContext(PollContext)
  const ShowLoaderData = useSelector((state) => state.ShowLoaderGet)

  const steps = getSteps()

  const isEmpty = (str) => !str || str.length === 0

  const activePollStepIndex = steps.findIndex(
    (stepItem) => stepItem.stepType === pollStep
  )

  const handleStep = (step) => {
    if (ShowLoaderData) return

    formik
      ? formik.submitForm().then(() => {
          const isInValid = map(formik.values, (value) => isEmpty(value)).find(
            (item) => item
          )
          !isInValid && setPollStep(step)
        })
      : setPollStep(step)
  }

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activePollStepIndex}
        connector={<ColorlibConnector />}
      >
        {steps.map((step) => (
          <Step disabled={!!ShowLoaderData} key={step.id}>
            <StepLabel
              disabled={!!ShowLoaderData}
              StepIconComponent={ColorlibStepIcon}
              onClick={() => handleStep(step.stepType)}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
