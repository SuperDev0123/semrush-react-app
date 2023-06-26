import { makeStyles } from '@material-ui/core'

const usePollEndedStyles = makeStyles({
  containerBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: '3rem auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: '5px',
  },
  imageContainer: {
    margin: '3rem auto',
    textAlign: 'center',
  },
  image: {
    width: '50%',
  },
  headerTextContainer: {
    margin: '1rem 4rem',
    textAlign: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '36px',
  },
  textDescriptionContainer: {
    margin: '1rem 5rem',
    textAlign: 'center',
  },
  textDescription: {
    color: '#000',
    fontSize: '14px',
    lineHeight: '21px',
  },
  actionTextContainer: {
    margin: '2rem 5rem 1rem',
    textAlign: 'center',
  },
  actionText: {
    color: '#000',
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: '700',
  },
  actionContainer: {
    margin: '1rem auto 4rem',
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    color: '#fff',
    lineHeight: '27px',
    fontSize: '18px',
    fontWeight: '700',
    padding: '1rem 2rem',
    '&:hover': {
      backgroundColor: '#0660cd',
    },
  },
})

export default usePollEndedStyles
