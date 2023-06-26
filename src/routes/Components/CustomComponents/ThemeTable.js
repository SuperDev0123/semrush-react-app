import React, { useState } from 'react'
import lodash from 'lodash'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import TableContainer from '@material-ui/core/TableContainer'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'

import { sentimentTypes } from '@src/common/constants'

import SmilingSad from '../../../common/assets/images/smiling-sad.png'
import SmilingLaught from '../../../common/assets/images/smile-laugh.png'
import SmilingNeutral from '../../../common/assets/images/smile-neutral.png'

const tableColumns = {
  assignment_id: 'assignment_id',
  worker_id: 'worker_id',
  submit_time: 'submit_time',
  assignment_status: 'assignment_status',
  answer: 'answer',
  responseText: 'responseText',
}

const sortingTypes = {
  ASC: 'asc',
  DESC: 'desc',
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontFamily: 'made_tommyregular',
  },
  body: {
    fontSize: 14,
    fontFamily: 'made_tommyregular',
    color: theme.palette.common.black,
  },
}))(TableCell)

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#D1E3EC',
    },
  },
}))(TableRow)

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: 15,
    },
  },
  table: {
    minWidth: 700,
    '& .pos': {
      color: '#13AB19',
    },
    '& .neg': {
      color: '#EE0505',
    },
  },
  answeresWrap: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    margin: '30px 0',
    '& label': {
      fontSize: 25,
      lineHeight: '31px',
      textTransform: 'capitalize',
      fontFamily: "'made_tommyregular', sans-serif",
      fontWeight: 400,
      marginBottom: '30px',
      position: 'relative',
    },
  },
  sortable: {
    cursor: 'pointer',
  },
  isSorted: {
    color: '#a0bafe',
  },
}))

export default function ThemeTable({ results }) {
  const classes = useStyles()

  const [sorting, setSorting] = useState({
    sortBy: tableColumns.submit_time,
    type: sortingTypes.DESC,
  })

  const getOppositeType = (type) =>
    type === sortingTypes.ASC ? sortingTypes.DESC : sortingTypes.ASC

  const sortingController = (sortBy) => {
    let type = sortingTypes.DESC

    if (sortBy === sorting.sortBy) {
      type = getOppositeType(sorting.type)
    }

    setSorting({ sortBy, type })
  }

  const isSorted = (field) =>
    sorting.sortBy === field && sorting.type === sortingTypes.DESC

  const getActiveClass = (field) => (isSorted(field) ? classes.isSorted : '')

  const sortedResults = lodash.orderBy(
    results,
    [sorting.sortBy],
    [sorting.type]
  )

  const sentimentFactory = (sentiment) => {
    switch (sentiment) {
      case sentimentTypes.positive:
        return SmilingLaught
      case sentimentTypes.negative:
        return SmilingSad
      case sentimentTypes.neutral:
        return SmilingNeutral
      case sentimentTypes.mixed:
        return SmilingNeutral
      default:
        return null
    }
  }

  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                className={`${classes.sortable} ${getActiveClass(
                  tableColumns.assignment_id
                )}`}
                onClick={() => sortingController(tableColumns.assignment_id)}
              >
                Response Id
              </StyledTableCell>
              <StyledTableCell
                className={`${classes.sortable} ${getActiveClass(
                  tableColumns.worker_id
                )}`}
                onClick={() => sortingController(tableColumns.worker_id)}
                align="left"
              >
                Respondent Id
              </StyledTableCell>
              <StyledTableCell
                className={`${classes.sortable} ${getActiveClass(
                  tableColumns.responseText
                )}`}
                onClick={() => sortingController(tableColumns.responseText)}
                align="left"
              >
                Response
              </StyledTableCell>
              <StyledTableCell
                className={`${classes.sortable} ${getActiveClass(
                  tableColumns.assignment_status
                )}`}
                align="left"
                onClick={() =>
                  sortingController(tableColumns.assignment_status)
                }
              >
                Response Status
              </StyledTableCell>
              <StyledTableCell
                className={`${classes.sortable} ${getActiveClass(
                  tableColumns.answer
                )}`}
                align="left"
                onClick={() => sortingController(tableColumns.answer)}
              >
                Explanation
              </StyledTableCell>
              <StyledTableCell align="left">Sentiment</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedResults.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.assignment_id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.worker_id}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.responseText}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.assignment_status}
                </StyledTableCell>
                <StyledTableCell align="left"> {row.answer}</StyledTableCell>
                <StyledTableCell align="left">
                  <img
                    width="25"
                    height="25"
                    src={sentimentFactory(JSON.parse(row.sentiment).sentiment)}
                    alt=""
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
