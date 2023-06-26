import { makeStyles } from '@material-ui/core'

const useChooseAudienceTypeBlockStyles = makeStyles((theme) => ({
  modalRoot: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '35%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '96%',
    },
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: '2rem 2rem 0',
  },
  modalClose: {
    color: '#200E32',
    padding: '0',
    minWidth: 'auto',
  },
  modalBody: {
    margin: '.56rem 2rem 2rem',
  },
  successImage: {
    display: 'block',
    margin: '0 auto',
  },
  modalPtpAudience: {
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: '700',
    fontSize: '13px',
    textAlign: 'center',
    lineHeight: '20px',
    padding: '1rem',
    marginTop: '1rem',
    width: '100%',
    marginLeft: '.5rem',
    marginRight: '.5rem',
    '&:hover': {
      backgroundColor: 'rgb(4, 95, 205)',
    },
  },
  modalMyAudienceButton: {
    backgroundColor: '#fff',
    border: '1px solid #016AE9',
    color: '#016AE9',
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
  },
  modalFeaturesHeader: {
    color: '#000',
    fontSize: '18px',
    lineHeight: '27px',
    fontWeight: '600',
    marginTop: '2rem',
  },
  modalFeaturesList: {
    listStyle: 'initial',
    paddingInline: '1.7rem',
  },
  modalFeature: {
    display: 'list-item',
    paddingBlock: '0.1rem',
  },
  modalFeatureText: {
    margin: '0',
    color: '#000',
    lineHeight: '21px',
    fontSize: '14px',
    fontWeight: '400',
  },
  modalActionsBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))

export default useChooseAudienceTypeBlockStyles
