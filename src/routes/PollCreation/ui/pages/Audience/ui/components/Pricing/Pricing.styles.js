import { makeStyles } from '@material-ui/core'

const usePricingStyles = makeStyles((theme) => ({
  pricingListWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  pricingList: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  pricingListItem: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '15px',
    padding: 0,
  },
  pricingListItemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  pricingListItemHeaderText: {
    fontFamily: 'Poppins Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '12.5px',
    lineHeight: '22px',
    color: '#000000',
  },
  pricingListItemMiddle: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  pricingListItemMiddleText: {
    maxWidth: '116px',
    fontFamily: 'Poppins Italic',
    fontWeight: 400,
    fontSize: '10.5px',
    lineHeight: '15px',
    color: '#000000',
  },
  pricingFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricingFooterText: {
    fontFamily: 'Poppins Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '12.5px',
    lineHeight: '15px',
    color: '#19519D',
  },
}))

export default usePricingStyles
