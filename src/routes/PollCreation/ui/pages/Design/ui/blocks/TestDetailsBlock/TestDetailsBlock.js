import * as React from 'react'
import pt from 'prop-types'

import { Typography } from '@material-ui/core'

import {
  Container,
  Form,
  WithLoader,
} from '@src/routes/PollCreation/ui/components'

import useTestDetailsBlockStyles from './TestDetailsBlock.styles'

const TestDetailsBlock = ({ data, isLoading }) => {
  const classes = useTestDetailsBlockStyles()

  const { label, fields } = data
  const singleField = Object.values(fields ?? {})[0] || {}

  return (
    <Container>
      <WithLoader skeletonCount={5} isLoading={isLoading}>
        <Typography className={classes.headerTitle}>{label || ''}</Typography>
        <Form.TextField
          name={singleField.name || ''}
          label={singleField.label || ''}
          // placeholder={singleField.default || ""}
          info={singleField.description || ''}
          defaultValue={singleField.default || ''}
        />
      </WithLoader>
    </Container>
  )
}

TestDetailsBlock.defaultProps = {
  data: {},
}

TestDetailsBlock.propTypes = {
  data: pt.object.isRequired,
  isLoading: pt.bool,
}

export default TestDetailsBlock
