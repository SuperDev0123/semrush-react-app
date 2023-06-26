import * as React from 'react'
import { Box, Typography, Button } from '@material-ui/core'

import { Card } from '../../components'

import usePTPAudienceCreateLinkBlockStyles from './PTPAudienceCreateLinkBlock.styles'

const PTPAudienceCreateLinkBlock = ({ onCreateLink }) => {
  const classes = usePTPAudienceCreateLinkBlockStyles()

  return (
    <Card.Wrapper>
      <Card.Header
        className={classes.header}
        title="Want to use your own audience?"
        color="#000"
      />
      <Box className={classes.body}>
        <Box className={classes.ownAudienceParent}>
          <Typography className={classes.ownAudienceText} component="p">
            Recruit with a Poll the People
            <br />
            link. This links allows you to
            <br />
            invite users via any channel
            <br />
            you'd like.
          </Typography>
        </Box>
        <Box className={classes.createLinkParent}>
          <Button className={classes.createLinkButton} onClick={onCreateLink}>
            Create Link
          </Button>
        </Box>
      </Box>
    </Card.Wrapper>
  )
}

export default PTPAudienceCreateLinkBlock
