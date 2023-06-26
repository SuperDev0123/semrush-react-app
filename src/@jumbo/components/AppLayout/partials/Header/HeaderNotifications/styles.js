import { alpha, makeStyles } from '@material-ui/core'

export const useHeaderNotificationsStyles = makeStyles((theme) => ({
  cardRoot: {
    '& .Cmt-header-root': {
      paddingTop: 4,
      paddingBottom: 4,
    },
    '& .Cmt-card-content': {
      padding: '0 0 16px !important',
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
  iconRoot: {
    position: 'relative',
    marginRight: 15,
    color: alpha(theme.palette.common.white, 0.38),
    '&:hover, &.active': {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
    },
  },
  counterRoot: {
    color: theme.palette.common.white,
    border: `solid 1px ${theme.palette.common.white}`,
    backgroundColor: '#FF0700',
    minWidth: '22px',
    height: '22px',
    fontFamily: 'Poppins Bold',
    fontSize: '11px',
    marginTop: '2px',
    marginRight: '2px',
    padding: 0,
  },
  scrollbarRoot: {
    height: 400,
    padding: 16,
  },
  popoverRoot: {
    '& .MuiPopover-paper': {
      width: 420,
    },
    '& .MuiPaper-elevation8': {
      boxShadow: '0px 2px 8px -2px rgba(0,0,0,0.75)',
    },
  },
  cardHeader: {
    fontSize: '18px',
    color: '#000',
    fontFamily: 'Poppins Bold',
  },
}))

export const useNotificationItemStyles = makeStyles((theme) => ({
  feedItemRoot: {
    padding: '10px 0',
    position: 'relative',
    // borderBottom: `1px solid ${alpha(theme.palette.common.dark, 0.035)}`,
    '& .Cmt-media-object': {
      alignItems: 'start',
    },
    '& .Cmt-media-image': {
      alignSelf: 'flex-start',
      width: 56,
    },
    '& .Cmt-media-body': {
      width: 'calc(100% - 56px)',
      flex: 'inherit',
    },
  },
  titleRoot: {
    marginBottom: 6,
    fontSize: '14px',
    cursor: 'pointer',
    color: '#000',
    lineHeight: '16.5px',
    borderBottom: '1px solid #e8e8e8',
    paddingBottom: '11px',
  },
  postTitle: {
    fontSize: '14px',
    color: '#000',
    fontFamily: 'Poppins Regular',
    lineHeight: '16.5px',
  },
  date: {
    fontSize: '0.7rem',
    color: '#7e7c7c',
    fontFamily: 'Poppins Regular',
    marginTop: '4px',
  },
}))
