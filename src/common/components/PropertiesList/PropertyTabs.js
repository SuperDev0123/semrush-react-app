import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  tabsRoot: {
    position: 'relative',
    minHeight: 66,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'center',
      },
    },
    '& .MuiTabs-indicator': {
      background: 'rgba(0, 153, 221, 1)',
    },
    '& .MuiTab-root': {
      fontFamily: 'made_tommylight, sans-serif',
      maxWidth: 'none',
      minWidth: 10,
      minHeight: 66,
      color: 'rgba(0, 0, 0, 1)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 300,
      letterSpacing: '0em',
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 14,
      },
      '&.MuiTab-textColorPrimary.Mui-selected': {
        color: 'rgba(0, 153, 221, 1)',
        fontWeight: 400,
        fontFamily: 'made_tommymedium, sans-serif',
      },
    },
  },
}))

const PropertyTabs = ({ tabValue, onChangeTab, propertyTabCategories }) => {
  const classes = useStyles()
  const a11yProps = (index) => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    }
  }

  return (
    <Tabs
      value={tabValue}
      onChange={(e, newValue) => onChangeTab(newValue)}
      indicatorColor="primary"
      textColor="primary"
      aria-label="scrollable auto tabs example"
      className={classes.tabsRoot}
    >
      <Tab key={0} label="All" value="" />
      {propertyTabCategories.map((tab, index) => {
        return (
          <Tab
            key={index}
            label={tab.name}
            value={tab.slug}
            {...a11yProps(index)}
          />
        )
      })}
    </Tabs>
  )
}

export default PropertyTabs
