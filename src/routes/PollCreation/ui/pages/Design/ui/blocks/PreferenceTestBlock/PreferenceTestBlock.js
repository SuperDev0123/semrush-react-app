import * as React from 'react'
import pt from 'prop-types'
import { Box, Typography } from '@material-ui/core'

import { Container, WithLoader } from '@src/routes/PollCreation/ui/components'

import { FormActions } from '../../components'
import { HTMLFieldFactory } from '../../../common/utils'

import usePreferenceTestBlockStyles from './PreferenceTestBlock.styles'

const PreferenceTestBlock = ({
  data,
  isLoading,
  onSubmitHandler,
  onFieldValueChange,
  methods,
  actionLoading,
  formData,
  isUploading,
}) => {
  const classes = usePreferenceTestBlockStyles()
  const { label, fields } = data
  const {
    question: questionField,
    option_a: optionAField,
    value_a: valueAField,
    option_b: optionBField,
    value_b: valueBField,
  } = fields ?? {}

  return (
    <Container wrapperClass={classes.block}>
      <WithLoader
        isLoading={isLoading}
        skeletonCount={12}
        skeletonProps={{ height: 40 }}
      >
        <Typography className={classes.headerTitle}>{label || ''}</Typography>
        <HTMLFieldFactory field={questionField} />
        <Box
          className={classes.divider}
          sx={{
            marginTop: '31px',
            marginBottom: '21px',
          }}
        />
        <Box className={classes.fieldsWrapper}>
          <Box className={classes.fieldWrapperBlock} sx={{ pr: '45px' }}>
            <HTMLFieldFactory
              field={optionAField}
              props={{
                sx: { mb: '20px' },
              }}
            />
            <HTMLFieldFactory
              field={valueAField}
              props={{
                file: formData.fileA ? formData.fileA : null,
                onChange: (event, validationResult) =>
                  onFieldValueChange({
                    fileInfo: event,
                    fieldName: 'fileA',
                    field: valueAField,
                    validationResult,
                  }),
                isUploading: isUploading.fileA,
              }}
            />
          </Box>
          <Box className={classes.divider} />
          <Box className={classes.fieldWrapperBlock} sx={{ pl: '45px' }}>
            <HTMLFieldFactory
              field={optionBField}
              props={{
                sx: { mb: '20px' },
              }}
            />
            <HTMLFieldFactory
              field={valueBField}
              props={{
                file: formData.fileB ? formData.fileB : null,
                onChange: (event, validationResult) =>
                  onFieldValueChange({
                    fileInfo: event,
                    fieldName: 'fileB',
                    field: valueBField,
                    validationResult,
                  }),
                isUploading: isUploading.fileB,
              }}
            />
          </Box>
        </Box>
        <FormActions
          onSubmitHandler={onSubmitHandler}
          methods={methods}
          loading={actionLoading}
        />
      </WithLoader>
    </Container>
  )
}

PreferenceTestBlock.defaultProps = {
  data: {},
}

PreferenceTestBlock.propTypes = {
  data: pt.object.isRequired,
  isLoading: pt.bool,
}

export default PreferenceTestBlock
