import * as React from 'react'
import pt from 'prop-types'
import { Box, Hidden, List, ListItem, Typography } from '@material-ui/core'

import { WithLoader } from '@src/routes/PollCreation/ui/components'
import CustomSelect from '@src/routes/Components/CustomComponents/Select'

import { useTemplatesStyles } from './Templates.styles'

const TemplateCategories = ({
  categories = [],
  activeCategory,
  setActiveCategory,
  isLoading,
}) => {
  const classes = useTemplatesStyles()

  return (
    <Box className={classes.sideBar}>
      <Box className={classes.header}>
        <Typography className={classes.headerTitle}>Pick a Template</Typography>
      </Box>
      <Hidden smDown>
        <List className={classes.sideBarCategoriesList}>
          <WithLoader
            isLoading={isLoading}
            skeletonCount={3}
            skeletonProps={{
              height: 41,
              variant: 'rectangle',
              style: { marginBottom: '13px' },
            }}
          >
            {categories.map((category, idx) => {
              const mergedClassName = `${classes.sideBarCategoryListItem} ${
                category === activeCategory && 'active'
              }`

              return (
                <ListItem
                  key={`${category}-${idx}`}
                  className={mergedClassName}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </ListItem>
              )
            })}
          </WithLoader>
        </List>
      </Hidden>
      <Hidden mdUp>
        <Box className={classes.filter}>
          <CustomSelect
            value={activeCategory}
            handleChange={(e) => {
              setActiveCategory(e.target.value)
            }}
            optionValueField="value"
            optionLabelField="name"
            options={categories.map((item) => ({
              value: item,
              name: item,
            }))}
          />
        </Box>
      </Hidden>
    </Box>
  )
}

TemplateCategories.defaultProps = {
  categories: [],
  isLoading: false,
}

TemplateCategories.propTypes = {
  categories: pt.array.isRequired,
  isLoading: pt.bool,
  activeCategory: pt.string,
  setActiveCategory: pt.func.isRequired,
}

export default TemplateCategories
