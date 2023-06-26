import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from 'material-ui-audio-player'
import { useTheme } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import {
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  useMediaQuery,
  Slide,
  Radio,
  TextareaAutosize,
  RadioGroup,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import MouseTooltip from 'react-sticky-mouse-tooltip'

import {
  When,
  YTBPLayer,
  ImagePreview,
  Blockquote,
} from '@src/common/components'
import GridContainer from '@src/@jumbo/components/GridContainer'
import { pollTypes, getPreviewInstructions } from '@src/common/constants'

import { useStyles, useAudioStyles, BootstrapDialog } from './PollPreview.style'

const { IMAGE, SHORTTEXT, AUDIO, VIDEO, WEB_PLATFORM } = pollTypes

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle style={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

const OptionType = ({ type, file, setPreviewImageURL }) => {
  const [isMouseTooltipVisible, setIsMouseTooltipVisible] =
    React.useState(false)

  const classes = useStyles()
  switch (type) {
    case IMAGE:
      return (
        <img
          onClick={() => setPreviewImageURL(file)}
          className={classes.previewImage}
          src={file}
          alt="Option Preview"
        />
      )
    case AUDIO: {
      return (
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
          src={file}
        />
      )
    }
    case SHORTTEXT: {
      return <h3 className="option-txt">{file}</h3>
    }
    case VIDEO: {
      return <YTBPLayer width="100%" videoLink={file} />
    }
    case WEB_PLATFORM: {
      return (
        <a
          href={file}
          target="_blank"
          onMouseMove={() => setIsMouseTooltipVisible(true)}
          onMouseLeave={() => setIsMouseTooltipVisible(false)}
          rel="noreferrer"
        >
          <img src="/images/resize.png" width="120" alt="" />
          <MouseTooltip
            visible={isMouseTooltipVisible}
            offsetX={15}
            offsetY={10}
          >
            <span className={classes.tooltip}>{file}</span>
          </MouseTooltip>
        </a>
      )
    }
    default:
      return <></>
  }
}

const PollOption = ({ pollObj, setPreviewImageURL }) => {
  const classes = useStyles()

  const { textA, textB, fileA, fileB, pollTemplate } = pollObj
  const styleCondition = pollTemplate === AUDIO || pollTemplate === SHORTTEXT
  const inlineStyle = styleCondition ? { height: 80 } : {}
  return (
    <GridContainer className={classes.outerContainer}>
      <Grid
        item
        xs={12}
        sm={6}
        md={pollTemplate === AUDIO ? 12 : 6}
        className={classes.left}
      >
        <h3 className={classes.pollOptionTitle}>{textA}</h3>
        {fileA && (
          <Box
            className={`${classes.previewBox} ${pollTemplate}`}
            style={inlineStyle}
          >
            <OptionType
              setPreviewImageURL={setPreviewImageURL}
              type={pollTemplate}
              file={fileA}
            />
          </Box>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={pollTemplate === AUDIO ? 12 : 6}
        className={classes.right}
      >
        <h3 className={classes.pollOptionTitle}>{textB}</h3>
        {fileB && (
          <Box
            className={`${classes.previewBox} ${pollTemplate}`}
            style={inlineStyle}
          >
            <OptionType
              setPreviewImageURL={setPreviewImageURL}
              type={pollTemplate}
              file={fileB}
            />
          </Box>
        )}
      </Grid>
    </GridContainer>
  )
}

const PollPreview = ({ open, setOpen, pollObj }) => {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [previewImageURL, setPreviewImageURL] = useState(null)

  const renderInstrunctionDOM = () => {
    const instructions = getPreviewInstructions(pollObj.pollTemplate)
    return (
      <>
        <h3 className={classes.instructionTitle}>Instructions</h3>
        <List dense={true} className={classes.list}>
          {instructions.map((instruction, indx) => (
            <ListItem key={`ins_${indx}`}>
              <ListItemText primary={instruction} />
            </ListItem>
          ))}
        </List>
      </>
    )
  }

  const body = (
    <Box className={classes.paper}>
      {!!pollObj && (
        <>
          <Box>{renderInstrunctionDOM()}</Box>

          <When condition={pollObj.pollTemplate !== pollTypes.SHORTTEXT}>
            <PollOption
              setPreviewImageURL={setPreviewImageURL}
              pollObj={pollObj}
            />
          </When>
          <When condition={pollObj.pollTemplate === pollTypes.SHORTTEXT}>
            <div className={classes.blockquoteWrapper}>
              <Blockquote title={pollObj.textA} description={pollObj.fileA} />
              <Blockquote title={pollObj.textB} description={pollObj.fileB} />
            </div>
          </When>
          <GridContainer>
            <Grid item xs={12}>
              <h3 className={classes.sectionTitle}>{pollObj.pollSubTitle}</h3>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
              >
                {!!pollObj.textA && (
                  <FormControlLabel
                    value={pollObj.textA}
                    id="option1"
                    control={<Radio color="primary" />}
                    label={pollObj.textA}
                  />
                )}
                {!!pollObj.textB && (
                  <FormControlLabel
                    value={pollObj.textB}
                    id="option2"
                    control={<Radio color="primary" />}
                    label={pollObj.textB}
                  />
                )}
              </RadioGroup>
            </Grid>
            <Grid item xs={12} mt="2">
              <h3 className={classes.sectionTitle}>
                Why did you choose this answer?
              </h3>
              <TextareaAutosize
                aria-label="explanation"
                name="explanation"
                minRows={5}
                placeholder="Explain why you chose one over the other..."
                className={classes.textarea}
              />
            </Grid>
          </GridContainer>
        </>
      )}
    </Box>
  )

  return (
    <BootstrapDialog
      onClose={() => setOpen(false)}
      aria-labelledby="preview-title"
      open={open}
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth={'md'}
    >
      <BootstrapDialogTitle
        id="preview-title"
        className={classes.header}
        onClose={() => setOpen(false)}
      >
        {pollObj.pollTitle ? pollObj.pollTitle : 'Poll Title'}
      </BootstrapDialogTitle>
      <DialogContent dividers>{body}</DialogContent>
      {!!previewImageURL && (
        <ImagePreview
          handleClose={() => setPreviewImageURL(null)}
          previewImageURL={previewImageURL}
        />
      )}
    </BootstrapDialog>
  )
}

export default PollPreview
