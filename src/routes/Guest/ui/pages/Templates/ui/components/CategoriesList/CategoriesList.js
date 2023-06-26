import * as React from 'react'
import pt from 'prop-types'
import { List, ListItem } from '@material-ui/core'

import useCategoriesListStyles from './CategoriesList.styles'

const CategoriesList = ({
  categories = [],
  activeCategory,
  setActiveCategory,
}) => {
  const classes = useCategoriesListStyles()

  return (
    <List className={classes.categoriesList}>
      {categories.map((category, idx) => (
        <ListItem
          key={`${category}-${idx}`}
          className={`${classes.listItem} ${
            category === activeCategory && 'active'
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </ListItem>
      ))}
    </List>
  )
}

CategoriesList.defaultProps = {
  categories: [],
}

CategoriesList.propTypes = {
  categories: pt.array.isRequired,
  activeCategory: pt.any,
  setActiveCategory: pt.func.isRequired,
}

export default CategoriesList
