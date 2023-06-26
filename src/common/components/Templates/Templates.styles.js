import { makeStyles } from '@material-ui/core'

/* TEMPLATES LIST */
export const useTemplatesStyles = makeStyles((theme) => ({
  dialogPaper: {
    maxWidth: '80vw !important',
  },
  templateSection: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minWidth: 'calc(100vw - 100px)',
    },
  },
  templates: {
    width: 'calc(80vw - 550px)',
    // height: '866px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '13px',
    alignContent: 'flex-start',
    overflowY: 'auto',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100vw - 550px)',
      height: '91vh',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '78vh',
    },
  },
  sideBar: {
    width: '294px',
    height: '866px',
    padding: '26px',
    borderRight: '1px solid #E5E5E5',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: 'fit-content',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '15px',
  },
  headerTitle: {
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    margin: '0 auto',
    color: theme.palette.common.black,
  },
  dialogContent: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    '&:first-child': {
      paddingTop: 0,
    },
    '.MuiDialog-paperWidthLg': {
      background: 'red',
    },
  },
  sideBarCategoriesList: {
    padding: 0,
  },
  sideBarCategoryListItem: {
    width: '240px',
    height: '41px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',

    '&.active': {
      fontWeight: 600,
      background: '#016AE9',
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  filter: {
    border: '1px solid #E5E5E5',
    width: '100%',
    borderRadius: '5px',
  },
}))

/* SINGLE TEMPLATE */
export const useTemplateStyles = makeStyles((theme) => ({
  template: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    maxWidth: '282px',
    // height: '316px',
    background: '#FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '5px',
    margin: '13px',
    cursor: 'pointer',
    flex: 'auto',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '95%',
    },
    [theme.breakpoints.only('sm')]: {
      maxWidth: '27%',
      maxHeight: '240px',
    },
    [theme.breakpoints.only('md')]: {
      maxWidth: '42%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '27%',
    },
  },
  header: {},
  body: {},
  thumbnail: {
    display: 'block',
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: '5px 5px 0 0',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.only('sm')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.only('md')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '100%',
    },
  },
  bookmark: {
    width: '16px',
    height: '20px',
    position: 'absolute',
    right: '5px',
    top: '5px',
  },
  templateDetails: {
    padding: '9px',
    height: 'auto',
  },
  name: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    color: theme.palette.common.black,
  },
  description: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    color: '#929292',
  },
}))
