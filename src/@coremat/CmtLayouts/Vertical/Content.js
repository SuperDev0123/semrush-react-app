import React, { useImperativeHandle } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  appMainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '16px 30px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 40,
      paddingRight: 40,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 40,
      paddingRight: 40,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 40,
      paddingRight: 40,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '16px 20px',
    },
  },
}))

const CmtContent = React.forwardRef(function LayoutContent(props, ref) {
  const { children } = props

  useImperativeHandle(ref, () => ({}))

  const contentRef = React.createRef()
  const classes = useStyles()

  return (
    <Box
      ref={contentRef}
      className={clsx(classes.appMainContent, 'Cmt-appMainContent')}
      bgcolor="background.main"
    >
      {children}
    </Box>
  )
})

export default CmtContent
CmtContent.defaultProps = {
  name: 'LayoutContent',
}
