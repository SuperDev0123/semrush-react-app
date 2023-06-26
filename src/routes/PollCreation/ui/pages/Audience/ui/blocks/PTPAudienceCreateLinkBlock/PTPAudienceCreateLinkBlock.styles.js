import { makeStyles } from '@material-ui/core'

const usePTPAudienceCreateLinkBlockStyles = makeStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 19px 25px 19px',
  },
  header: {
    paddingLeft: '19px',
    paddingRight: '19px',
  },
  ownAudienceParent: {},
  ownAudienceText: {
    color: '#000',
    fontWeight: '400',
    fontSize: '11px',
    lineHeight: '16px',
  },
  createLinkParent: {
    paddingTop: '1.5rem',
  },
  createLinkButton: {
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    fontSize: '11px',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#fff',
    padding: '1rem 2rem',
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgb(4, 95, 205)',
    },
  },
})

export default usePTPAudienceCreateLinkBlockStyles
