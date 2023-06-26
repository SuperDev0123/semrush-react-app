import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from '@material-ui/core'
import { When } from '@src/common/components'

const CriteriasList = ({ classes, audience, costInformation, totalprice, couponInfo }) => {
  const fullSelectedCriterias = audience.selectedCriteriaList.filter(
    (item) => !!item.price
  )

  const discountAmount = () => {
    if (!couponInfo) return ''
    if (couponInfo.percent_off) {
      const discount = ((totalprice * couponInfo.percent_off) / 100).toFixed(2)
      return parseFloat(discount) > parseFloat(totalprice)
        ? totalprice
        : discount
    } else {
      const discount = (couponInfo.amount_off / 100).toFixed(2)
      return parseFloat(discount) > parseFloat(totalprice)
        ? totalprice
        : discount
    }
  }

  return (
    <TableContainer>
      <Table>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>
              Description
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Cost per item
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Unit</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Total Cost
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableBodyCell}>
              Test Responses
            </TableCell>
            <TableCell className={classes.tableBodyCell}></TableCell>
            <TableCell className={classes.tableBodyCell}></TableCell>
            <TableCell
              className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall}`}
            >
              {'$' +
                (
                  audience.pollResponses * costInformation.costPerResponse
                ).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall} ${classes.tableBodyCellPadding}`}
            >
              {audience.pollResponses} estimated responses
            </TableCell>
            <TableCell
              className={`${classes.tableBodyCell} ${classes.tableBodyCellColor}`}
            >
              {'$' + costInformation.costPerResponse.toFixed(2)}
            </TableCell>
            <TableCell
              className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall}`}
            >
              No. of response
            </TableCell>
            <TableCell className={classes.tableBodyCell}></TableCell>
          </TableRow>
          <When condition={fullSelectedCriterias.length}>
            <TableRow>
              <TableCell className={classes.tableBodyCell}>
                Advanced Criteria
              </TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
            </TableRow>
            {fullSelectedCriterias.map((criteria, index) => {
              return (
                <TableRow key={index}>
                  <TableCell
                    className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall} ${classes.tableBodyCellPadding}`}
                  >
                    {criteria.label}
                  </TableCell>
                  <TableCell
                    className={`${classes.tableBodyCell} ${classes.tableBodyCellColor} ${classes.tableBodyCellColor}`}
                  >
                    {'$' + criteria.price}
                  </TableCell>
                  <TableCell
                    className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall}`}
                  >
                    No. of response
                  </TableCell>
                  <TableCell
                    className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall}`}
                  >
                    {'$' +
                      (audience.pollResponses * criteria.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              )
            })}
          </When>

          <When condition={Boolean(couponInfo)}>
            <TableRow>
              <TableCell colSpan={4} className={`${classes.tableBodyCell}`}>
                <Divider />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableBodyCell}>
                Sub Total
              </TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
              <TableCell
                className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall} ${classes.tableBodyCellBold}`}
              >
                {'$' +
                  totalprice}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableBodyCell}>
                Promo Code Redemption
              </TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall} ${classes.tableBodyCellPadding}`}
              >
                {couponInfo.name} (
                {couponInfo.percent_off
                  ? `${couponInfo.percent_off}%`
                  : `$${(couponInfo.amount_off / 100).toFixed(2)}`}
                )
              </TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
              <TableCell className={classes.tableBodyCell}></TableCell>
              <TableCell
                className={`${classes.tableBodyCell} ${classes.tableBodyCellSmall} ${classes.tableBodyCellBold}`}
              >
                {'-$' + discountAmount()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} className={`${classes.tableBodyCell}`}>
                <Divider />
              </TableCell>
            </TableRow>
          </When>
          <TableRow>
            <TableCell
              className={`${classes.tableBodyCell} ${classes.tableBodyCellColor} ${classes.tableBodyLastCellPadding}`}
            >
              Total Cost
            </TableCell>
            <TableCell className={classes.tableBodyCell}></TableCell>
            <TableCell className={classes.tableBodyCell}></TableCell>
            <TableCell
              className={`${classes.tableBodyCell} ${classes.tableBodyCellColor}`}
            >
              {'$' + (totalprice - discountAmount()).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CriteriasList
