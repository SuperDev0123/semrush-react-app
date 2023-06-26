import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const AnswerBox = ({ bgColor, title, optionGood, optionBad }) => {
  const commonStyle = {
    width: 150,
    margin: '0 auto',
    color: '#ffffff',
    textAlign: 'left',
    position: 'absolute',
    left: 'calc(50% - 40px)',
    '& label': {
      fontSize: 18,
      lineHeight: '22px',
      color: '#ffffff',
      marginBottom: 5,
    },
    '& ul': {
      margin: 0,
      padding: 0,
      fontSize: 14,
      lineHeight: '18px',
      listStyle: 'none',
      textTransform: 'capitalize',
    },
  }
  const useStyles = makeStyles(() => ({
    root: {
      textAlign: 'center',
      '& .action-btn': {
        cursor: 'pointer',
      },
    },
    reviewContainer: {
      width: '90%',
      height: 450,
      backgroundColor: bgColor,
      clipPath: 'polygon(0 0, 100% 0, 50% 50%, 100% 100%, 0 100%, 50% 50%)',
      position: 'relative',
    },
    answeresWrap: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
      '& label': {
        fontSize: 25,
        lineHeight: '31px',
        textTransform: 'uppercase',
        fontFamily: "'made_tommyregular', sans-serif",
        fontWeight: 400,
        color: '#232521',
        marginBottom: '30px',
        position: 'relative',
        '&::before': {
          content: '""',
          width: '25px',
          height: '25px',
          backgroundColor: bgColor,
          position: 'absolute',
          left: -40,
          top: 2,
        },
      },
    },
    negetivesRoot: {
      ...commonStyle,
      top: 10,
    },
    positivesRoot: {
      ...commonStyle,
      bottom: 10,
    },
  }))

  const classes = useStyles()

  return (
    <Box className={classes.answeresWrap}>
      <label>{title}</label>
      <Box className={classes.reviewContainer}>
        <Box className={classes.negetivesRoot}>
          <label>Negative</label>
          <ul>
            {/* {map(answers.negetives, (ans,index) => <li key={`pos_${index}`}>{ans}</li>)

                        } */}
            <li>BAD {optionBad}</li>
          </ul>
        </Box>
        <Box className={classes.positivesRoot}>
          <label>Positive</label>
          <ul>
            {/* {map(answers.positives, (ans,index) => <li key={`neg_${index}`}>{ans}</li>)} */}
            <li>GOOD {optionGood} </li>
          </ul>
        </Box>
      </Box>
    </Box>
  )
}

export default AnswerBox
