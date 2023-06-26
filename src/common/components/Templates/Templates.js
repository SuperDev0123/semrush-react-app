import * as React from 'react'
import pt from 'prop-types'
import { useQuery } from 'react-query'
import { Box, Dialog, DialogContent } from '@material-ui/core'

import queryKeys from '@src/common/queryKeys'
import { fetchTemplates } from '@src/common/api'

import TemplatesList from './TemplatesList'
import TemplateCategories from './TemplateCategories'
import { useTemplatesStyles } from './Templates.styles'

const TemplatesContent = ({ onClose }) => {
  const classes = useTemplatesStyles()
  const [activeCategory, setActiveCategory] = React.useState(null)

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
  // )
  // const templatesList = templates.filter(
  //   (template) => template.category === activeCategory
  // )
  const templatesList = templates.filter((template) =>
    template.category.includes(activeCategory)
  )

  React.useEffect(() => {
    setActiveCategory(categoriesList[0])
  }, [templates])

  return (
    <Box className={classes.templateSection}>
      <TemplateCategories
        isLoading={fetchTemplatesQuery.isLoading}
        categories={categoriesList}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <TemplatesList
        templates={templatesList}
        onClose={onClose}
        isLoading={fetchTemplatesQuery.isLoading}
      />
    </Box>
  )
}

const Templates = ({ open, onClose }) => {
  const classes = useTemplatesStyles()

  return (
    <Dialog
      scroll="body"
      open={open}
      onClose={onClose}
      maxWidth="lg"
      PaperProps={{
        className: classes.dialogPaper,
      }}
    >
      <DialogContent className={classes.dialogContent}>
        <TemplatesContent onClose={onClose} />
      </DialogContent>
    </Dialog>
  )
}

Templates.defaultProps = {
  open: false,
}

Templates.propTypes = {
  open: pt.bool.isRequired,
  onClose: pt.func.isRequired,
}

export default Templates
