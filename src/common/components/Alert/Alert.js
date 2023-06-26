import * as React from 'react'
import { Alert as MUIAlert } from '@material-ui/lab'

const Alert = (props) => {
  const [open, setOpen] = React.useState(true)

  if (!open) return null

  return <MUIAlert {...props} onClose={() => setOpen(false)} />
}

export default Alert
