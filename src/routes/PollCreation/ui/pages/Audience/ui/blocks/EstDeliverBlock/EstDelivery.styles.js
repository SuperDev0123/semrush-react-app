import { makeStyles } from '@material-ui/core'

const useEstDeliveryStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '19px',
    paddingRight: '19px',
    paddingTop: '13px',
    paddingBottom: '13px',
  },
  header: {
    paddingLeft: '19px',
    paddingRight: '19px',
  },
  bodyText: {
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12.5px',
    lineHeight: '16px',
    color: '#535353',
  },
  bodyEstDate: {
    fontFamily: 'Poppins Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '12.5px',
    lineHeight: '16px',
    color: '#0A3C81',
    marginTop: '2px',
  },
}))

export default useEstDeliveryStyles
