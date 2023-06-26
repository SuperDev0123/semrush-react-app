import * as React from 'react'
import pt from 'prop-types'
import { useDropzone } from 'react-dropzone'
import AudioPlayer from 'material-ui-audio-player'
import { Box, Typography } from '@material-ui/core'

import { When, Loader } from '@src/common/components'
import { useAudioStyles } from '@src/common/components/PollPreview/PollPreview.style'
import { isImage, isVideo } from '@src/routes/PollCreation/common/utils'

import useFileFieldStyles from './FileField.styles'
import { DefaultPlaceholderElement, fileFieldStyles } from './constants'

const FileRenderer = ({ file, value }) => {
  /* TODO: need refactoring!!! */
  if (!file) return null

  const fileInfo = value[0] ? value[0] : {}

  if (isImage(fileInfo.name)) {
    return (
      <img
        src={fileInfo.path}
        width="100%"
        height="193px"
        style={{ objectFit: 'contain' }}
      />
    )
  } else if (isVideo(fileInfo.name)) {
    return (
      <div style={{ width: '100%' }} onClick={(e) => e.stopPropagation()}>
        <AudioPlayer
          elevation={1}
          width="100%"
          useStyles={useAudioStyles}
          variation="default"
          spacing={3}
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={false}
          src={fileInfo.path}
        />
      </div>
    )
  } else {
    return null
  }
}

FileRenderer.propTypes = {
  fileURL: pt.string.isRequired,
}

const FileFieldCore = ({
  placeholder,
  validationDescription,
  options,
  innerRef,
  error,
  multiple,
  helperText,
  label,
  file,
  value,
  isUploading,
  ...rest
}) => {
  const classes = useFileFieldStyles()
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone(options)

  const style = React.useMemo(
    () => ({
      ...fileFieldStyles.baseStyle,
      ...(isFocused ? fileFieldStyles.focusedStyle : {}),
      ...(isDragAccept ? fileFieldStyles.acceptStyle : {}),
      ...(isDragReject ? fileFieldStyles.rejectStyle : {}),
      ...(error ? fileFieldStyles.errorStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, error]
  )

  /* TODO: should be considered the multiple mode image upload process */
  const acceptedFileOBJ = acceptedFiles.length > 0 ? acceptedFiles[0] : null
  const fileObject = file && file.length > 0 ? file[0] : null

  return (
    <Box className={classes.fileFieldWrapper}>
      <When condition={!!label}>
        <Typography className={classes.fileFieldLabel}>{label}</Typography>
      </When>
      <div className={classes.fileField} ref={innerRef}>
        <div {...getRootProps({ style })}>
          <input {...getInputProps({ ...rest, multiple })} />
          <div className={classes.placeholderBox}>
            <When condition={!!error && !!helperText}>
              <Typography className={classes.helperText}>
                {helperText}
              </Typography>
            </When>
            <When condition={!acceptedFileOBJ && !fileObject}>
              <DefaultPlaceholderElement
                validationDescription={validationDescription}
                placeholder={placeholder}
              />
            </When>
          </div>
          <When condition={!!(acceptedFileOBJ || fileObject) && !error}>
            <When condition={isUploading}>
              <Loader />
            </When>
            <When condition={!isUploading}>
              <FileRenderer
                file={acceptedFileOBJ || fileObject}
                fieldName={rest.name}
                value={value}
              />
            </When>
          </When>
        </div>
      </div>
    </Box>
  )
}

FileFieldCore.defaultProps = {
  multiple: false,
}

FileFieldCore.propTypes = {
  placeholder: pt.string,
  error: pt.bool,
  helperText: pt.string,
  options: pt.object,
  multiple: pt.bool,
  label: pt.string,
  validationDescription: pt.string,
  innerRef: pt.oneOfType([
    pt.func,
    pt.shape({ current: pt.instanceOf(Element) }),
  ]),
}

const FileField = React.forwardRef((props, ref) => (
  <FileFieldCore innerRef={ref} {...props} />
))

export default FileField
