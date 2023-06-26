import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  planBox: {
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'none',
    borderRadius: '0.5rem',
    color: theme.palette.common.black,
    marginTop: '1rem',
  },
  blockheaderBox: {
    paddingBottom: '1rem',
  },
  blockHeader: {
    color: '#19519D',
    fontWeight: '600',
    lineHeight: '21px',
    fontSize: '1rem',
  },
  blockSubHeader: {
    color: '#000',
    fontSize: '.815rem',
    fontWeight: 'bold',
    lineHeight: '21px',
    paddingTop: '1rem',
  },

  planHeaderBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    paddingBottom: '0',
  },
  planName: {
    fontSize: '1rem',
    color: '#000',
    fontFamily: 'Poppins SemiBold',
  },
  planPrice: {
    color: '#000',
    fontSize: '.9rem',
    fontFamily: 'poppins Regular',
  },
  planFeaturesBox: {
    backgroundColor: '#F7F7F7',
    margin: '1rem',
    padding: '.5rem',
  },
  planFeatureListItem: {
    color: '#000',
    fontSize: '.813rem',
    lineHeight: '20px',
  },
  planActionBox: {
    backgroundColor: '#016AE9',
    borderRadius: '0 0 5px 5px',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  planActionButton: {
    width: '100%',
    textTransform: 'none',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'Poppins SemiBold',
  },
  controlBox: {
    width: '50%',
    marginTop: '2rem',
  },
  hintText: {
    color: '#000',
    lineHeight: '18px',
    fontSize: '12px',
  },
  featureListItemIcon: {
    color: '#016AE9',
    minWidth: '45px',
  },
  planFeatureText: {
    fontFamily: 'Poppins Regular',
    fontSize: '13px',
    color: theme.palette.common.black,
  },
}))

export default useStyles
