import React, { useState, useContext } from 'react'
import {
  Box,
  useMediaQuery,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  useTheme,
} from '@material-ui/core'
import { AccessControlContext } from '@src/common/context/AccessControl'
import { When } from '@src/common/components'
import SubscriptionItems from './common/components/SubscriptionItems'
import useStyles from './common/style/index.style'
import { Close } from '@material-ui/icons'

const Subscription = (props) => {
  const { title } = props
  const classes = useStyles()
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [paymentCancelled, setPaymentCancelled] = useState(false)
  const { isLoading, setIsSubmitLoading, isSubmitLoading } =
    useContext(AccessControlContext)
  const theme = useTheme()
  const fullscreenDialog = useMediaQuery(theme.breakpoints.down('sm'))

  const paymentComplete = () => {
    !props.noModal && setIsModalOpen(false)
    setIsSubmitLoading(false)
    props.paymentComplete()
  }

  const paymentFail = () => {
    !props.noModal && setIsModalOpen(false)
    setIsSubmitLoading(false)
    props.paymentFail()
  }

  const SubscriptionItemsContainer = (
    <SubscriptionItems
      job={props.job}
      hidePlans={props.hidePlans === true}
      currentPlan={props.currentPlan}
      paymentComplete={paymentComplete}
      paymentFail={paymentFail}
      paymentCancelled={paymentCancelled}
    />
  )

  const onDialogClose = () => {
    if (isSubmitLoading) {
      return
    }

    setPaymentCancelled(true)
  }

  return (
    <React.Fragment>
      <When condition={!props.noModal}>
        <Dialog
          disableEscapeKeyDown={isSubmitLoading}
          open={isModalOpen}
          scroll="paper"
          fullScreen={fullscreenDialog}
          onClose={onDialogClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className={`${classes.modalBox} ${isLoading && classes.modalBoxHide}`}
        >
          <Box className={classes.modalHeaderBox}>
            <DialogTitle id="modal-title" className={classes.modalHeaderTitle}>
              <When condition={Boolean(title)}>{title}</When>
              <When condition={Boolean(!title)}>
                {props.job === 'update'
                  ? 'Update Payment Information'
                  : 'Subscribe'}
              </When>
            </DialogTitle>
            <Button
              className={classes.modalHeaderClose}
              // disabled={isSubmitLoading}
              onClick={() => setPaymentCancelled(true)}
            >
              <Close />
            </Button>
          </Box>
          <DialogContent className={classes.modalBodyBox}>
            {SubscriptionItemsContainer}
          </DialogContent>
        </Dialog>
      </When>
      <When condition={props.noModal}>{SubscriptionItemsContainer}</When>
    </React.Fragment>
  )
}

export default Subscription
