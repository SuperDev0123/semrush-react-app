import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import classnames from 'classnames'
import {
  FormControl, OutlinedInput, InputAdornment, FormHelperText, Box, Typography, Button, Grid, Icon, useMediaQuery, useTheme, Dialog, DialogContent, DialogTitle, Backdrop
} from '@material-ui/core'
import { Done, NotInterested, Close } from '@material-ui/icons'
import { When, Toaster, Loader } from '@src/common/components'
import queryKeys from '@src/common/queryKeys'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { checkCoupon } from '@src/common/api'

import useStyles from '../../style/CouponInput.style'

let couponInfoTemp = null;

const CouponInput = ({ couponInfo, setCouponInfo, hideUpdateCoupon, couponDescription }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [couponCode, setCouponCode] = useState("")
  const [verifyCoupon, setVerifyCoupon] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [isSuccessMode, setIsSuccessMode] = useState(false)
  const theme = useTheme()
  const fullscreenDialog = useMediaQuery(theme.breakpoints.down('sm'))
  const checkCouponMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_CHECK_COUPON,
    mutationFn: checkCoupon,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      if (data.couponInfo) {
        couponInfoTemp = { type: 'Coupon', ...data.couponInfo }
        setVerifyCoupon(1)
      }
      else if (data.promotionInfo) {
        couponInfoTemp = { type: 'Promotion Code', ...data.promotionInfo.coupon, name: data.promotionInfo.code, promotionID: data.promotionInfo.id }
        setVerifyCoupon(1)
      }
      else {
        setVerifyCoupon(-1)
      }
    },
    onError: (error) => {
      console.log(error)
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
    },
  })

  const isAnyRequestLoading = useMemo(() => {
    return checkCouponMutation.isLoading
  }, [checkCouponMutation.isLoading])

  const applyCoupon = () => {
    setCouponInfo(couponInfo ? null : couponInfoTemp)
    setIsSuccessMode(true)
  }

  const cancelCoupon = () => {
    couponInfoTemp = null
    setCouponInfo(null)
    hideUpdateCoupon()
  }

  const changeCouponCode = (value) => {
    setVerifyCoupon(0)
    setCouponCode(value)
  }

  const onDialogClose = () => {
    if (isAnyRequestLoading) {
      return
    }
    if(isSuccessMode) {
      setIsSuccessMode(false)
    }
    hideUpdateCoupon()
  }

  const validateCoupon = () => {
    checkCouponMutation.mutate({ couponCode })
  }

  useEffect(() => {
    console.log('sagesg')
  }, [])

  return (
    <Dialog
      disableEscapeKeyDown={isAnyRequestLoading}
      open={isModalOpen}
      scroll="paper"
      fullScreen={fullscreenDialog}
      onClose={onDialogClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={`${classes.modalBox}`}
      BackdropProps={{
        classes: {
          root: classes.modalBack
        }
      }
      }
    >
      <Box className={classes.modalHeaderBox}>
        <DialogTitle id="modal-title" className={classes.modalHeaderTitle}>
          <When condition={!Boolean(couponInfo)}>Enter Coupon or Promo Code</When>
          <When condition={isSuccessMode && Boolean(couponInfo)}>Promo Code Applied!</When>
          <When condition={!isSuccessMode && Boolean(couponInfo)}>Confirmation</When>
        </DialogTitle>
        <Button
          className={classes.modalHeaderClose}
        >
          <Close onClick={onDialogClose} />
        </Button>
      </Box>
      <DialogContent className={classes.modalBodyBox}>
        <When condition={!isSuccessMode && Boolean(couponInfo)}>
          <Typography className={classes.successText}>
            Are you sure want to cancel the promo?
          </Typography>
          <Box className={classes.couponModalFooter}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Button className={`${classes.cancelBtn} ${classes.couponButton}`} onClick={onDialogClose}>
                  Cancel
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Button variant="contained" className={classes.couponButtonBlue} onClick={(cancelCoupon)}>
                  Yes, I’m sure
                </Button>
              </Grid>
            </Grid>
          </Box>
        </When>
        <When condition={isSuccessMode && Boolean(couponInfo)}>
          <Typography className={classes.successText}>
            Congratulations! Your promo has been successfully applied to your billing. You can continue proceed your payment.
          </Typography>
          <Box className={classes.couponModalFooter}>
            <Button variant="contained" className={classes.couponButtonBlue} onClick={onDialogClose}>
              Go to Payment
            </Button>
          </Box>
        </When>
        <When condition={!Boolean(couponInfo)}>
          <Typography className={classes.infoText}>
            Enter your coupon or promo code in the box below to redeem.
          </Typography>
          <Box>
            <Typography className={classes.promoInputTitle}>
              Promo Code
            </Typography>
            <Grid container>
              <Grid item className={classes.couponInputItem}>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  className={classes.multiInputBase}
                  value={couponCode}
                  onChange={(e) => changeCouponCode(e.target.value)}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" className={`${classes.validateBtn} ${couponCode.length > 0 ? classes.couponButtonBlue : classes.couponButton}`} disabled={couponCode.length == 0 || isAnyRequestLoading} onClick={validateCoupon}>
                  <When condition={isAnyRequestLoading}>
                    <Loader size={25} color="white" />
                  </When>
                  Validate
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.couponInfoBox}>
            <Typography className={verifyCoupon < 0 ? classes.warningText : ''}>
              {verifyCoupon > 0 && couponInfoTemp.name + '.'}
              <br />
              {verifyCoupon > 0 && couponDescription(couponInfoTemp)}
              {verifyCoupon < 0 && 'Your promo code is invalid or expired.'}
            </Typography>
          </Box>
          <Box className={classes.couponModalFooter}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Button className={`${classes.cancelBtn} ${classes.couponButton}`} onClick={onDialogClose}>
                  Cancel
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Button variant="contained" className={verifyCoupon < 1 ? classes.couponButton : classes.couponButtonBlue} disabled={verifyCoupon < 1} onClick={applyCoupon}>
                  Apply Promo
                </Button>
              </Grid>
            </Grid>
          </Box>
        </When>
      </DialogContent>
    </Dialog>
  )
}

export default CouponInput