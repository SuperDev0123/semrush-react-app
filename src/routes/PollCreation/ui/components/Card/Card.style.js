import { makeStyles } from '@material-ui/core'

const useCardStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    borderRadius: '5px',
    boxShadow: 'none',
  },
  cardContent: {
    width: '100%',
    overflow: 'visible',
    padding: '19px 25px 30px',
    paddingTop: '19px',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
}))

export default useCardStyles
