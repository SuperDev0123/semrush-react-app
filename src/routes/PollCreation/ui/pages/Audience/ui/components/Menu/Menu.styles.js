import { makeStyles } from '@material-ui/core'

const useMenuStyles = makeStyles((theme) => ({
  menuOption: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  menuOptionText: {
    marginLeft: '12px',
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#000000',
  },
}))

export default useMenuStyles
