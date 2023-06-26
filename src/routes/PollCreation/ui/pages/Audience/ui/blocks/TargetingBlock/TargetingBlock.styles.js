import { makeStyles } from '@material-ui/core'

const useTargetingBlockStyles = makeStyles((theme) => ({
  body: {
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  header: {
    paddingRight: '5px',
  },
  participant: {
    display: 'flex',
    flexDirection: 'column',
  },
  participantTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '76px',
  },
  participantMiddle: {
    display: 'flex',
    alignItems: 'center',
  },
  participantTitle: {
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',
  },
  participantField: {
    width: '82px',
    height: '41px',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.35)',
    boxSizing: 'border-box',
    borderRadius: '5px',
    margin: 0,
    '& .MuiInputBase-input': {
      fontFamily: "'Poppins'",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '21px',
      color: '#000000',
      textAlign: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  participantSlider: {},
  information: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '17px',
    marginBottom: '17px',
    '& > img': {
      marginTop: '5px',
    },
  },
  informationText: {
    maxWidth: '671px',
    minHeight: '79px',
    marginLeft: '12px',
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',
    letterSpacing: 0,
    '& a': {
      fontFamily: "'Poppins'",
      marginLeft: '5px',
      color: '#016AE9',
      fontSize: '14px',
      maxWidth: '382px',
      fontStyle: 'normal',
      minHeight: '79px',
      fontWeight: 400,
      lineHeight: '21px',
    },
  },
}))

export default useTargetingBlockStyles
