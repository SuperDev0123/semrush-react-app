import { makeStyles } from '@material-ui/core'

const usePricingBlockStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 19px 25px 19px',
  },
  header: {
    paddingLeft: '19px',
    paddingRight: '19px',
  },
}))

export default usePricingBlockStyles
