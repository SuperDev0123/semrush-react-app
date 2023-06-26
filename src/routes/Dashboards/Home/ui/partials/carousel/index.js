import React, { useRef } from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import Carousel from 'react-multi-carousel'
import { useQuery } from 'react-query'

import CarouselCard from '../carouselCard'
import queryKeys from '@src/common/queryKeys'
import { fetchTemplates } from '@src/common/api'
import { SkeletonLoader } from '@src/common/components'

import 'react-multi-carousel/lib/styles.css'
import { useStyle } from './Carousel.style'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

const RCarousel = () => {
  const crRef = useRef(null)
  const classes = useStyle()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1300, min: 464 },
      items: 2.5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1.5,
      slidesToSlide: 1,
    },
  }
  const fetchTemplatesQuery = useQuery({
    queryKey: queryKeys.FETCH_TEMPLATES,
    queryFn: fetchTemplates,
  })

  const templateList =
    !fetchTemplatesQuery.isLoading &&
    fetchTemplatesQuery.data &&
    fetchTemplatesQuery.data.data &&
    fetchTemplatesQuery.data.data.length
      ? fetchTemplatesQuery.data.data
      : []

  const recommendedList = templateList.length
    ? templateList.filter((temp) => temp.category.includes('Recommended'))
    : []

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title}>Recommended for you</Typography>
      <Box
        className={classes.leftArrow}
        onClick={() => {
          crRef.current.previous()
        }}
      >
        <ArrowBackIos fontSize="small" />
      </Box>
      <Carousel
        swipeable={true}
        keyBoardControl={false}
        partialVisible={false}
        responsive={responsive}
        infinite={true}
        rewind={true}
        rewindWithAnimation={true}
        autoPlay={false}
        arrows={false}
        itemClass={classes.carouselItem}
        containerClass={classes.carouselContainer}
        ref={crRef}
        shouldResetAutoplay={false}
      >
        {recommendedList.length > 0 &&
          recommendedList.map((template, index) => (
            <Box key={index} className={classes.card}>
              <CarouselCard
                templateId={template.id}
                title={template.name}
                description={template.description}
                image={template.thumbnail}
              />
            </Box>
          ))}
        {(fetchTemplatesQuery.isLoading ||
          !fetchTemplatesQuery.data.data.length > 0) &&
          [1, 2, 3, 4, 5].map((_item, index) => (
            <Box key={index} className={classes.card}>
              <SkeletonLoader
                animation="wave"
                variant="rect"
                width={'100%'}
                height={180}
              />
            </Box>
          ))}
      </Carousel>
      <Box
        className={classes.rightArrow}
        onClick={() => {
          crRef.current.next()
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </Box>
    </Paper>
  )
}

export default RCarousel
