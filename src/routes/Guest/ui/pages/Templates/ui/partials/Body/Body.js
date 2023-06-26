import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Box } from '@material-ui/core'

import queryKeys from '@src/common/queryKeys'
import { fetchTemplates } from '@src/common/api'

import { Categories, Templates } from '../../blocks'

import useBodyStyles from './Body.styles'

const Body = () => {
  const classes = useBodyStyles()
  const [activeCategory, setActiveCategory] = useState(null)

  const fetchTemplatesQuery = useQuery({
    queryKey: queryKeys.FETCH_TEMPLATES,
    queryFn: fetchTemplates,
  })

  const templates = fetchTemplatesQuery.data.data ?? []
  const categoriesList = [
    'Recommended',
    'Digital Ads',
    'Landing Page Design',
    'Logos',
    'Branding',
    'Content',
    'Prototypes',
    'From-Scratch',
  ]
  // const categoriesList = Array.from(
  //   new Set(templates.map((template) => template.category))
  // ).includes('Recommended')
  // const templatesList = templates.filter(
  //   (template) => template.category === activeCategory
  // )
  const templatesList = templates.filter((template) =>
    template.category.includes(activeCategory)
  )

  useEffect(() => {
    setActiveCategory(categoriesList[0])
  }, [templates])

  return (
    <Box className={classes.body}>
      <Categories
        isLoading={fetchTemplatesQuery.isLoading}
        categoriesData={categoriesList}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Templates
        templatesData={templatesList}
        isLoading={fetchTemplatesQuery.isLoading}
      />
    </Box>
  )
}

export default Body
