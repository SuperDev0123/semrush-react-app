import { makeStyles } from '@material-ui/core'

const useThankYouStyles = makeStyles({
  containerBox: {
    display: 'flex',
    flexDirection: 'row',
    margin: '3rem auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: '5px',
  },
  imageContainer: {
    margin: '3rem auto',
    textAlign: 'center',
  },
  image: {
    width: '100%',
  },
  headerTextContainer: {
    margin: '1rem 4rem',
  },
  headerText: {
    color: '#000',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '48px',
    letterSpacing: '-0.01rem',
  },
  textDescriptionContainer: {
    margin: '1rem 4rem',
  },
  textDescription: {
    color: '#000',
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '-0.01rem',
  },
  actionTextContainer: {
    margin: '1rem 4rem 1rem',
  },
  actionText: {
    color: '#000',
    fontSize: '20px',
    lineHeight: '30px',
  },
  actionContainer: {
    margin: '1rem 4rem',
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
  benefitsListContainer: {
    margin: '1rem 4rem',
  },
  benefitsList: {
    listStyle: 'initial',
    marginInlineStart: '1rem',
    padding: '0',
  },
  benefitListItem: {
    display: 'list-item',
    padding: '0.2rem 0',
    color: '#000',
  },
  benefitListItemText: {
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '-0.01rem',
    fontWeight: '400',
  },
})

export default useThankYouStyles
