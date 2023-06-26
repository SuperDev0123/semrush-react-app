import * as React from 'react'
import pt from 'prop-types'
import { Box, Typography, TextField, Grid } from '@material-ui/core'
import { useHistory } from 'react-router'

import { WithLoader } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'
import { categoriesSkeletonConfig } from '@src/routes/Guest/ui/pages/Templates/common/constants'
import Button from '@material-ui/core/Button'

import useSearchBoxStyles from './SearchBox.styles'

const SearchBox = ({ isLoading }) => {
  const classes = useSearchBoxStyles()
  const history = useHistory()
  const [searchHeadline, setSearchHeadline] = React.useState('')

  const submitHeadlineSearch = () => {
    history.push(browserRoutes.GUEST_SUGGESTIONS_SLUG(searchHeadline))
  }

  return (
    <Box className={classes.categories}>
      <Box className={classes.body}>
        <WithLoader
          isLoading={isLoading}
          variant="rectangle"
          skeletonCount={3}
          skeletonProps={categoriesSkeletonConfig}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="div"
                gutterBottom
                align="center"
                className={classes.mainHeadline}
              >
                Find powerful headlines to get more traffic
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                align="center"
                className={classes.subtitle}
              >
                Want more traffic? Poll the people enables you to write
                SEO-friendly headlines that drive traffic win the game of SEO.
                Just type in a keyword to get started
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid container spacing={2} className={classes.bottomPart}>
              <form
                onSubmit={submitHeadlineSearch}
                style={{ width: 'inherit' }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <div className={classes.preTextboxWord}>Keyword</div>
                    <TextField
                      align="center"
                      onChange={(event) => setSearchHeadline(event.target.value)}
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.textbox}
                      value={searchHeadline}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Button
                      className={classes.searchBox}
                      onClick={() => {
                        if (searchHeadline) submitHeadlineSearch()
                      }}
                      style={{ display: 'block' }}
                      variant="contained"
                      size="large"
                    >
                      SEARCH
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </WithLoader>
      </Box>
    </Box>
  )
}

SearchBox.propTypes = {
  isLoading: pt.bool,
}

export default SearchBox
