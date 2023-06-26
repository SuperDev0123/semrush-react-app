import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  parentBox: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    border: '1px solid #E5E5E5',
    borderRadius: '5px',
    width: '100%',
  },
  blockheaderBox: {
    padding: '2rem',
  },
  blockHeader: {
    color: '#19519D',
    lineHeight: '21px',
    fontFamily: 'Poppins SemiBold',
    fontSize: '16px',
  },
  tableHeader: {
    backgroundColor: '#016AE9',
  },
  tableHeaderCell: {
    color: '#fff',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: 'Poppins Bold',
  },
  tableBody: {
    backgroundColor: '#fff',
  },
  tableBodyCell: {
    fontSize: '14px',
    lineHeight: '21px',
    border: 'none',
  },
  tableBodyCellColor: {
    color: '#000',
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
  },
  downloadInvoiceImage: {
    maxWidth: '30%',
  },
  skeletonHead: {
    margin: '8px 0',
  },
  skeletonRow: {
    margin: '40px 0',
  },
})

export default useStyles
