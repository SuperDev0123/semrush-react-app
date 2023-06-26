import { makeStyles } from '@material-ui/core'

const useTooltipStyles = makeStyles((theme) => ({
  customWidth: {
    maxWidth: 500,
    overflowWrap: 'break-word',
    color: theme.palette.common.black,
    fontFamily: 'Poppins Regular',
    fontSize: '12px',
    lineHeight: '13.5px',
  },
}))

export default useTooltipStyles
