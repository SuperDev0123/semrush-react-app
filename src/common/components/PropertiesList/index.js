import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Box from '@material-ui/core/Box'
import { alpha, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import CmtCard from '@src/@coremat/CmtCard'
import CmtCardHeader from '@src/@coremat/CmtCard/CmtCardHeader'
import CmtSearch from '@src/@coremat/CmtSearch'
import CmtCardContent from '@src/@coremat/CmtCard/CmtCardContent'

import PropertiesDataList from './PropertiesDataList'
import PropertyTabs from './PropertyTabs'
import { MoreDetailModal } from '../../../routes/Results/ui/components'
import When from '../When'

const useStyles = makeStyles((theme) => ({
  cmtCardRoot: {
    [theme.breakpoints.down('sm')]: {
      borderRadius: '10px',
    },
  },
  headerRoot: {
    paddingBottom: 0,
    paddingTop: 0,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      '&.Cmt-header-root': {
        flexDirection: 'column',
      },
      '& .Cmt-action-default-menu': {
        position: 'absolute',
        right: 24,
        top: 5,
      },
    },
  },
  cardContentRoot: {
    padding: '0 !important',
    borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    marginTop: -1,
  },
  scrollbarRoot: {
    height: 'auto',
    maxHeight: 590,
    '& .CmtList-EmptyResult': {
      backgroundColor: 'transparent',
      border: '0 none',
    },
  },
  searchAction: {
    position: 'relative',
    width: 38,
    height: 38,
  },
  searchActionBar: {
    position: 'absolute',
    right: 0,
    top: 2,
    zIndex: 1,
  },
  btnRoot: {
    backgroundColor: theme.palette.lightBtn.bgColor,
    color: theme.palette.lightBtn.textColor,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 1.25,
    padding: '3px 10px',
    '&:hover, &:focus': {
      backgroundColor: alpha(theme.palette.lightBtn.bgColor, 0.8),
      color: theme.palette.lightBtn.textColor,
    },
  },
  titleRoot: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 16,
      textAlign: 'left',
    },
    fontFamily: 'made_tommyregular, sans-serif',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0em',
    textAlign: 'center',
  },
}))

const actions = [
  {
    label: 'More Detail',
    code: 'moreDetail',
  },
]

const PropertiesList = ({
  onPropertyClick,
  tabValue,
  onChangeTab,
  data,
  searchText,
  handleSearchTextChange,
  propertyTabCategories,
  timeFactory,
}) => {
  const classes = useStyles()
  const [moreDetailIsOpen, setMoreDetailIsOpen] = useState(false)

  const propertiesActionClickHandler = (action) => {
    if (action.code === 'moreDetail') {
      setMoreDetailIsOpen(true)
    }
  }

  const closeMoreDetail = () => setMoreDetailIsOpen(false)

  return (
    <CmtCard className={classes.cmtCardRoot}>
      <CmtCardHeader
        className={classes.headerRoot}
        title={
          <Box
            display="flex"
            alignItems={{ md: 'center' }}
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <Typography
              component="div"
              variant="h4"
              className={classes.titleRoot}
            >
              Responses
            </Typography>
            <PropertyTabs
              propertyTabCategories={propertyTabCategories}
              tabValue={tabValue}
              onChangeTab={onChangeTab}
            />
          </Box>
        }
        actionsPos="top-corner"
        actions={actions}
        actionHandler={propertiesActionClickHandler}
      >
        <Box className={classes.searchAction}>
          <Box className={classes.searchActionBar}>
            <CmtSearch
              onlyIcon
              border={false}
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </Box>
        </Box>
      </CmtCardHeader>
      <CmtCardContent className={classes.cardContentRoot}>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <PropertiesDataList
            timeFactory={timeFactory}
            data={data}
            onPropertyClick={onPropertyClick}
          />
        </PerfectScrollbar>
      </CmtCardContent>
      <When condition={moreDetailIsOpen}>
        <MoreDetailModal onClose={closeMoreDetail} />
      </When>
    </CmtCard>
  )
}

export default PropertiesList
