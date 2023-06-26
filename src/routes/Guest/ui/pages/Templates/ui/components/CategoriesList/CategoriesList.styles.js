import { makeStyles } from '@material-ui/core'

const useCategoriesListStyles = makeStyles((theme) => ({
  categoriesList: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    height: '41px',
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',
    cursor: 'pointer',
    paddingLeft: '18px',
    paddingRight: '18px',

    '&.active': {
      color: '#FFFFFF',
      fontWeight: '600',
      backgroundColor: '#016AE9',
      borderRadius: '5px',
    },
  },
}))

export default useCategoriesListStyles
