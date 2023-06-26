import { makeStyles } from '@material-ui/core'

const useCriteriaBlockStyles = makeStyles((theme) => ({
  criteriaBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerCancelButton: {
    marginRight: '-10px',
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#19519D',
    textTransform: 'capitalize',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '18px',
    paddingBottom: '31px',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  bodyText: {
    fontFamily: "'Poppins'",
    letterSpacing: 0,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    marginBottom: '12px',
    color: '#000000',
  },
  criteriaList: {
    display: 'flex',
  },
  notification: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '44px',
    marginBottom: '18px',
    paddingLeft: '20px',
    paddingRight: '20px',
    background: 'rgba(255, 7, 0, 0.1)',
  },
  notificationText: {
    marginLeft: '12px',
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',
  },
}))

export default useCriteriaBlockStyles
