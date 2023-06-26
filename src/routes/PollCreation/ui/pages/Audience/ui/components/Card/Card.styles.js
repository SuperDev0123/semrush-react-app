import { makeStyles } from '@material-ui/core'

const useCardStyles = makeStyles((theme) => ({
  card: {
    background: '#FFFFFF',
    border: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    borderRadius: '5px',
    marginBottom: '12px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '52px',
    paddingLeft: '25px',
    paddingRight: '25px',
    borderBottom: '1px solid #E5E5E5',
  },
  cardHeaderText: {
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
  },
}))

export default useCardStyles
