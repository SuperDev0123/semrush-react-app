import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 107px rgb(0 0 0 /10%)',
    width: '100%',
    borderRadius: '5px',
    position: 'relative',
    minHeight: '30rem',
    height: '100%',
  },
  parentBoxBorder: {
    border: '1px solid #016AE9',
  },
  planTitleBox: {
    paddingTop: '5rem',
    marginBottom: '2rem',
  },
  planTitle: {
    textAlign: 'center',
    color: '#000',
    fontSize: '18px',
    lineHeight: '27px',
    fontFamily: 'Poppins SemiBold',
  },
  planTrialInformation: {
    color: '#3c3c3c',
    fontSize: '14px',
    fontFamily: 'Poppins Regular',
  },
  planPriceBox: {
    marginBottom: '1rem',
  },
  planPriceInfo: {
    color: '#000',
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
  },
  planPrice: {
    fontSize: '22px',
    color: '#000',
    fontFamily: 'Poppins SemiBold',
  },
  featuresList: {
    backgroundColor: '#F7F7F7',
    borderRadius: '5px',
    margin: 'auto 2rem 2rem',
  },
  featuresListItem: {
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '20px',
    color: '#000',
  },
  featureListItemIcon: {
    color: '#016AE9',
  },
  recommendedTextBox: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#016AE9',
    padding: '1rem 2rem',
    border: '1px solid #016AE9',
    borderRadius: '0 0 5px 5px',
  },
  recommendedText: {
    color: '#fff',
    lineHeight: '21px',
    fontSize: '14px',
    fontFamily: 'Poppins SemiBold',
  },
  listText: {
    '& span': {
      fontFamily: 'Poppins Regular',
      fontSize: '13.5px',
      color: '#000',
      lineHeight: '19.5px',
    },
  },
}))

export default useStyles
