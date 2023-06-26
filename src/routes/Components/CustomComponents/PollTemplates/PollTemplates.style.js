import { makeStyles } from '@material-ui/styles'

const PollTemplatesStyle = makeStyles(() => ({
  paper: {
    padding: '0.5rem',
    margin: '0.2rem 0',
    border: 'none',
    boxShadow: 'none',
    borderRadius: '0.5rem',
  },
  mainContain: {
    minHeight: '425px',
    height: 'auto',
    // overflow: "hidden auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadMoreBtn: {
    fontFamily: 'Poppins SemiBold',
    fontSize: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0 auto',
    marginTop: '3px',
    transition: 'all 0.3s',
    textTransform: 'none',
    color: '#016AE9',
  },
}))
export default PollTemplatesStyle
