import { makeStyles } from '@material-ui/core'

const useAutocompleteStyles = makeStyles((theme) => ({
  autocomplete: {
    width: '100%',
    '& .MuiInputBase-input': {
      padding: '0 15px !important',
    },
    '& .MuiAutocomplete-inputRoot': {
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)',
    },
    '& .MuiSvgIcon-root': {
      color: '#000000',
    },
  },
}))

export const useAutocompletePopperStyles = makeStyles((theme) => ({
  root: {
    zIndex: 5,
    '& .MuiListSubheader-root': {
      fontSize: '14px',
      fontWeight: 700,
      fontFamily: 'made_tommybold, sans-serif',
      lineHeight: '28px',
    },
    '& .MuiAutocomplete-option': {
      fontSize: '14px',
      fontWeight: '400',
      fontFamily: 'made_tommyregular, sans-serif',
      color: '#016AE9',
    },
  },
}))

export default useAutocompleteStyles
