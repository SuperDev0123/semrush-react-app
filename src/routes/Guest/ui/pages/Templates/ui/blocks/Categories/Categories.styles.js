import { makeStyles } from '@material-ui/core'

const useCategoriesStyles = makeStyles((theme) => ({
  categories: {
    display: 'flex',
    flexDirection: 'column',
    width: '295px',
    background: '#FFFFFF',
    border: '1px solid #FFFFFF',
    borderRadius: '5px',
    padding: '2px',
    marginRight: '12px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '5px auto',
      minHeight: 'fit-content',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '62px',
    paddingLeft: '27px',
    paddingRight: '27px',
    borderBottom: '1px solid #E5E5E5',
  },
  headerText: {
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#000000',
  },
  body: {
    padding: '24px 27px',
  },
  filter: {
    border: '1px solid #E5E5E5',
    width: '100%',
    borderRadius: '5px',
  },
}))

export default useCategoriesStyles
