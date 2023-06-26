import { makeStyles } from '@material-ui/core'

const imageVideoCommonStyle = (theme) => {
  return {
    maxWidth: '785px',
    margin: '18px auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
    '& .option-box': {
      [theme.breakpoints.down('sm')]: {
        width: '330px',
        margin: '0 auto',
      },
    },
  }
}

const textAudioCommonStyle = (theme) => {
  return {
    width: '804px',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
    '& .poll-wrap': {
      marginBottom: 30,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 0,
      },
    },
  }
}

export const useImagePollStyles = makeStyles((theme) => ({
  optionRoot: imageVideoCommonStyle(theme),
}))

export const useVidioPollStyles = makeStyles((theme) => ({
  optionRoot: imageVideoCommonStyle(theme),
}))

export const useAudioPollStyles = makeStyles((theme) => ({
  optionRoot: {
    ...textAudioCommonStyle(theme),
    '& .option-box': {
      '& .input-label': {
        padding: '8px 15px 8px 45px',
        fontWeight: 400,
      },
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        margin: '0 auto',
      },
    },
    [theme.breakpoints.down('sm')]: {
      ...textAudioCommonStyle(theme),
      margin: 0,
    },
  },
}))

export const useTextPollStyles = makeStyles((theme) => ({
  optionRoot: {
    ...textAudioCommonStyle(theme),
    '& .option-box': {
      '& .input-label': {
        backgroundColor: 'transparent',
        fontWeight: 400,
        padding: 10,
      },
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        margin: '0 auto',
      },
    },
    [theme.breakpoints.down('sm')]: {
      ...textAudioCommonStyle(theme),
      margin: 0,
    },
  },
}))
