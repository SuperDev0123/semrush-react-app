import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@material-ui/core'
import { When, SkeletonLoader, Toaster } from '@src/common/components'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { getInvoices, downloadInvoice } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { formatDate } from '../utils'
import useStyles from '../style/Invoices.style'
import DownloadInvoiceIcon from '@src/common/assets/images/download_invoice.png'

const Invoices = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [invoices, setInvoices] = useState([])

  const getInvoicesMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_GET_INVOICES,
    mutationFn: getInvoices,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      setInvoices(data.invoices)
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
    },
  })

  const downloadInvoiceMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_DOWNLOAD_INVOICE,
    mutationFn: downloadInvoice,
    onSuccess: (response) => {
      dispatch(fetchSuccess())
      let fileName =
        response.headers['content-disposition'].match(/"[\w\d_.]+"/g)[0]
      fileName = fileName.slice(1, fileName.length - 1)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.style.display = 'none'
      link.setAttribute('download', fileName)
      link.setAttribute('target', '_blank')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
    },
  })

  const isAnyRequestLoading = useMemo(() => {
    return getInvoicesMutation.isLoading || downloadInvoiceMutation.isLoading
  }, [getInvoicesMutation.isLoading, downloadInvoiceMutation.isLoading])

  useEffect(() => {
    getInvoicesMutation.mutate(null)
  }, [])

  return (
    <Box className={classes.parentBox}>
      <Box className={classes.blockheaderBox}>
        <Typography variant="h3" className={classes.blockHeader}>
          Transaction History
        </Typography>
        {/* <LoadingIndicator isLoading={isAnyRequestLoading} /> */}
        <When condition={isAnyRequestLoading}>
          <SkeletonLoader
            width={'100%'}
            height={50}
            variant="rect"
            className={classes.skeletonHead}
          />
          <SkeletonLoader
            width={'100%'}
            height={45}
            variant="rect"
            className={classes.skeletonRow}
          />
          <SkeletonLoader
            width={'100%'}
            height={45}
            variant="rect"
            className={classes.skeletonRow}
          />
          <SkeletonLoader
            width={'100%'}
            height={45}
            variant="rect"
            className={classes.skeletonRow}
          />
          <SkeletonLoader
            width={'100%'}
            height={45}
            variant="rect"
            className={classes.skeletonRow}
          />
        </When>
      </Box>
      <When condition={getInvoicesMutation.isSuccess && !isAnyRequestLoading}>
        <Box>
          <TableContainer>
            <Table>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell className={classes.tableHeaderCell}>
                    Date
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Invoice
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Currency
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <When condition={invoices}>
                <TableBody>
                  {invoices.map((invoice, index) => (
                    <TableRow key={index}>
                      <TableCell
                        className={`${classes.tableBodyCell} ${classes.tableBodyCellColor}`}
                      >
                        {formatDate(invoice.created)}
                      </TableCell>
                      <TableCell className={classes.tableBodyCell}>
                        <Button
                          size="small"
                          onClick={() =>
                            downloadInvoiceMutation.mutate({
                              invoiceId: invoice.id,
                            })
                          }
                          disableElevation
                          disableRipple
                        >
                          <img
                            src={DownloadInvoiceIcon}
                            alt="Download invoice"
                            className={classes.downloadInvoiceImage}
                          />
                        </Button>
                      </TableCell>
                      <TableCell
                        className={`${classes.tableBodyCell} ${classes.tableBodyCellColor}`}
                      >
                        {invoice.currency.toUpperCase()}
                      </TableCell>
                      <TableCell
                        className={`${classes.tableBodyCell} ${classes.tableBodyCellColor}`}
                      >
                        {(invoice.amount_paid / 100).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </When>
            </Table>
          </TableContainer>
        </Box>
      </When>
    </Box>
  )
}

export default Invoices
