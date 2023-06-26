import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import IconBox from '../../@jumbo/components/Common/IconBox'

const useStyles = makeStyles((theme) => ({
  iconListRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '65px',
  },
}))

const IconList = ({ iconData }) => {
  const classes = useStyles()

  return (
    <Box className={classes.iconListRoot}>
      {iconData.map((data, key) => (
        <IconBox iconInfo={data} key={`icb_${key}`} />
      ))}
    </Box>
  )
}

export default IconList
