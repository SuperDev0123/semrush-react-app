import * as React from 'react'
import pt from 'prop-types'
import { Box, Hidden, Typography } from '@material-ui/core'

import { WithLoader } from '@src/common/components'
import { categoriesSkeletonConfig } from '@src/routes/Guest/ui/pages/Templates/common/constants'
import CustomSelect from '@src/routes/Components/CustomComponents/Select'

import { CategoriesList } from '../../components'

import useCategoriesStyles from './Categories.styles'

const Categories = ({
  categoriesData = [],
  activeCategory,
  setActiveCategory,
  isLoading,
}) => {
  const classes = useCategoriesStyles()

  return (
    <Box className={classes.categories}>
      <Box className={classes.header}>
        <Typography className={classes.headerText}>Pick a Template</Typography>
      </Box>
      <Box className={classes.body}>
        <WithLoader
          isLoading={isLoading}
          variant="rectangle"
          skeletonCount={3}
          skeletonProps={categoriesSkeletonConfig}
        >
          <Hidden smDown>
            <CategoriesList
              isLoading={isLoading}
              activeCategory={activeCategory}
              categories={categoriesData}
              setActiveCategory={setActiveCategory}
            />
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
                options={categoriesData.map((item) => ({
                  value: item,
                  name: item,
                }))}
              />
            </Box>
          </Hidden>
        </WithLoader>
      </Box>
    </Box>
  )
}

Categories.defaultProps = {
  categoriesData: [],
}

Categories.propTypes = {
  categoriesData: pt.array.isRequired,
  activeCategory: pt.any,
  setActiveCategory: pt.func.isRequired,
  isLoading: pt.bool,
}

export default Categories
