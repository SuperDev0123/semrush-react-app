import React, { useState, useContext } from 'react'
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
import { PollCreationContext } from '../../PollCreation/common/context/PollCreationContext'

import { useStyles, useAudioStyles, BootstrapDialog } from './Common.style'
import { pollCreationSteps } from '../../PollCreation/common/constants'

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
    case IMAGE: {
      const fileUrl = URL.createObjectURL(file[0])
      return (
        <img
          onClick={() => setPreviewImageURL(fileUrl)}
          className={classes.previewImage}
          src={fileUrl}
          alt="Option Preview"
        />
      )
    }
    case WEB_PLATFORM:
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
          src={URL.createObjectURL(file[0])}
        />
      )
    }
    case SHORTTEXT: {
      return <h3 className="option-txt">{file}</h3>
    }
    case VIDEO: {
      return <YTBPLayer width="100%" videoLink={file} />
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

export default function PreviewModal() {
  const classes = useStyles()
  const theme = useTheme()
  const [previewImageURL, setPreviewImageURL] = useState(null)

  const { isPreviewModalOpen, setIsPreviewModalOpen, ...pollData } =
    useContext(PollCreationContext)
  const pollObj = pollData[pollCreationSteps.DESIGN]

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const renderInstrunctionDOM = () => {
    const instructions = getPreviewInstructions(pollData.pollType)
    return (
      <>
        <h3 className={classes.instructionTitle}>Instructions</h3>
        <List dense={true} className={classes.list}>
          {instructions.map((instruction, idx) => (
            <ListItem key={`ins_${idx}`}>
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

          <When
            condition={
              !!pollData.pollType && pollData.pollType !== pollTypes.SHORTTEXT
            }
          >
            <PollOption
              setPreviewImageURL={setPreviewImageURL}
              pollObj={{ ...pollObj, pollTemplate: pollData.pollType }}
            />
          </When>
          {pollData.pollType === pollTypes.SHORTTEXT && (
            <div className={classes.blockquoteWrapper}>
              <Blockquote
                title={pollObj.textA || ''}
                description={pollObj.fileA}
              />
              <Blockquote
                title={pollObj.textB || ''}
                description={pollObj.fileB}
              />
            </div>
          )}

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
      onClose={() => setIsPreviewModalOpen(false)}
      aria-labelledby="preview-title"
      open={isPreviewModalOpen}
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth={'md'}
    >
      <BootstrapDialogTitle
        id="preview-title"
        className={classes.header}
        onClose={() => setIsPreviewModalOpen(false)}
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
