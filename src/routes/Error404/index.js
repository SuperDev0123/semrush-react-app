import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import { MetaProvider } from '@src/common/components'
import useStyles from './style'

const Error404 = () => {
  const classes = useStyles()

  return (
    <MetaProvider title="404 Not Found">
      <PageContainer>
        <Box className={classes.containerBox}>
          <Box className={classes.wrapperBox}>
            <Box className={classes.statusBox}>
              <img src="images/404Error.svg" alt="404 page error" />
            </Box>
            <Box className={classes.statusTextBox}>
              <Typography className={classes.statusText} component="h2">
                Opps! I’m sorry, the page could not be found.
              </Typography>
            </Box>
            <Box className={classes.statusParagraphBox}>
              <Typography className={classes.statusParagraph} component="p">
                It is probably because of the link you use was disabled. Please
                contact the owner for more information. Thank you.
              </Typography>
            </Box>
            <Button
              className={classes.button}
              size="small"
              // onClick={() => {}}
            >
              Refresh
            </Button>
          </Box>
        </Box>
      </PageContainer>
    </MetaProvider>
  )
}

export default Error404
