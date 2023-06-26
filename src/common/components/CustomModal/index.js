import React from 'react'
import {
  styled,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  Box,
  Button,
  CircularProgress,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'

import { When } from '@src/common/components'

import useStyles from './style'

const CustomModal = ({
  children,
  title,
  variant,
  open,
  handleClose,
  footer,
  onCancel,
  onOk,
  loading,
  ...rest
}) => {
  const classes = useStyles()

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuDialogActions-root': {
      padding: theme.spacing(1),
    },
    '& .MuiPaper-elevation24': {
      boxShadow: theme.shadows[1],
    },
  }))

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props

    return (
      <DialogTitle {...other}>
        {children}
        {onClose && (
          <IconButton
            aria-label="close"
            onClick={onClose}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
    )
  }
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="preview-title"
        open={open}
        fullWidth={true}
        maxWidth={'sm'}
        {...rest}
      >
        <BootstrapDialogTitle
          id="preview-title"
          className={classes.header}
          onClose={handleClose}
        >
          {title || 'Title'}
        </BootstrapDialogTitle>
        <DialogContent className={classes.dialogContent}>
          {children}
        </DialogContent>
        {variant === 'confirm' && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ margin: '1rem 1.5rem' }}
          >
            <Button
              className={clsx(classes.cancelBtn, classes.button)}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={clsx(classes.flatBtn, classes.button)}
              onClick={onOk}
            >
              <When condition={loading}>
                <Box sx={{ mr: 2 }}>
                  <CircularProgress classes={classes.progress} size={20} />
                </Box>
              </When>{' '}
              Yes, I&apos;m sure
            </Button>
          </Box>
        )}
        {footer && footer}
      </BootstrapDialog>
    </>
  )
}
export default CustomModal
