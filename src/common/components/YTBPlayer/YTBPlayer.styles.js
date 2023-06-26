import { makeStyles } from '@material-ui/core'

const useYTBStyles = makeStyles((theme) => ({
  invalidIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 15,
  },
  invalidIcon: {
    width: 'calc(100% - 40px)',
    borderRadius: '24px',
  },
}))

export default useYTBStyles
