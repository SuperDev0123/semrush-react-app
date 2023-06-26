import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { Check } from '@material-ui/icons'

import CustomModal from '../Components/CustomComponents/Modal'
import { closeSetupModal } from '@src/common/redux/actions/Dashboard'

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '52px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#19519D',
  },
  subTitle: {
    fontSize: '14px',
    marginTop: '1rem',
    fontWeight: 'bold',
    lineHeight: '21px',
    color: '#000',
    textAlign: 'center',
    width: '80%',
  },
  iconContent: {
    height: '9rem',
    width: '9rem',
    borderRadius: '100%',
    border: '5px solid #19519D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    fontSize: '6.5rem',
    color: '#19519D',
  },
  createButton: {
    marginTop: '2rem',
    backgroundColor: '#016AE9',
    width: '100%',
    padding: '0.9rem',
  },
}))
const SetupModal = () => {
  const { setupModal } = useSelector((state) => ({
    setupModal: state.dashboard.setupModal,
  }))
  const dispatch = useDispatch()
  const classes = useStyles()
  return (
    <Box>
      <CustomModal
        open={setupModal}
        size={'450px'}
        handleClose={() => {
          dispatch(closeSetupModal())
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '1rem',
          }}
        >
          <Box className={classes.iconContent}>
            <Check className={classes.checkIcon} />
          </Box>
          <Typography className={classes.title}>You are all set up!</Typography>
          <Typography className={classes.subTitle}>
            Congratulation, it’s time for yout to create your first poll.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.createButton}
            onClick={() => {
              dispatch(closeSetupModal())
            }}
          >
            Create Poll
          </Button>
        </Box>
      </CustomModal>
    </Box>
  )
}
export default SetupModal
