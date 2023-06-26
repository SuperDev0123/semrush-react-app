import { makeStyles } from '@material-ui/core'

const useSearchBoxListStyles = makeStyles((theme) => ({
  searchboxlist: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
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
  textbox: {
    width: '99%',
    backgroundColor: '#fff',
    '& .MuiInputBase-root': {
      paddingLeft: '1rem',
      color: '#000',
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: '400',
      '&:not(.Mui-error)': {
        borderRadius: '5px',
        border: '2px solid #016AE9',
      },
    },
  },
  headlinesTextBox: {
    width: '80%',
    marginLeft: '-16px',
    justifyContent: 'center',
    '& .MuiInputBase-root': {
      color: '#000',
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: '400',
      letterSpacing: '0.5px',
      '&:not(.Mui-error)': {
        border: 'none',
      },
      '&.MuiInput-underline': {
        '&:before': {
          borderBottom: 'none !important',
        },
        '&:after': {
          borderBottom: 'none !important',
        },
        '& .MuiInputBase-input': {
          paddingBottom: '6px',
        },
      },
    },
  },
  upgradeButton: {
    color: '#016AE9',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '400',
    padding: '0 0.3rem',
    textTransform: 'none',
  },
  boldText: {
    fontWeight: '600',
  },
  headlinesList: {
    marginBottom: '7rem',
  },
  searchbutton: {
    width: '100%',
    height: '100%',
    backgroundColor: '#016AE9',
    color: '#FFFFFF',
    borderRadius: '5px',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '36px',
    textAlign: 'center',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      lineHeight: '28px',
      padding: '0',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '18px',
    },
  },
  headlinesuggestionfor: {
    margin: '1rem 1rem 1rem 0',
    color: '#000',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '30px',
  },
  youareusingfreeversioncard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  youareusingfreeversion: {
    display: 'inline-block',
    color: '#000',
  },
  youareusingfreeversionicon: {
    color: '#000',
    marginInlineEnd: '.1rem',
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
  checkbox: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    marginTop: '1.3rem',
    padding: '1rem',
    color: '#000',
    borderRadius: '5px',
    border: '1px solid transparent',
    transition: 'all .1s ease-in-out',
  },
  checkBoxChecked: {
    backgroundColor: '#fff',
    boxShadow: '0 0 11px rgba(1, 106, 233, 0.3)',
    borderColor: '#016AE9',
  },
  blurCheckbox: {
    filter: 'blur(15px)',
  },
  upgradeAndSignupButton: {
    // top: '-70px',
    // left: '40%',
    top: '35px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '2rem 3rem',
    backgroundColor: '#016AE9',
    color: '#FFFFFF',
    borderRadius: '5px',
    border: '1px solid 016AE9',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '36px',
  },
  noResultBox: {
    backgroundColor: '#f7f7f7',
    marginTop: '30px',
    padding: '30px',
    color: '#000',
    borderRadius: '5px',
  },
  searchButtonError: {
    height: '69.5px',
  },
  packageNameBold: {
    fontWeight: 'bold',
  },
  titleHeadline: {
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#000',
  },
  formControlLabel: {
    '& .MuiTypography-body1': {
      fontSize: '20px',
      lineHeight: '30px',
      color: '#000',
    },
  },
  formControlLabelUnchecked: {
    color: '#000 !important',
  },
  formControlLabelChecked: {
    color: '#016AE9 !important',
  },
  noResultContentTitle: {
    color: '#000',
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '30px',
    marginBottom: '1rem',
  },
  noResultContentSubtitle: {
    color: '#000',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '30px',
  },
  moreHeadlineBox: {
    position: 'relative',
    minHeight: '180px',
    width: '100%',
  },
  mimicHeadlinesBox: {
    position: 'absolute',
  },
}))

export default useSearchBoxListStyles
