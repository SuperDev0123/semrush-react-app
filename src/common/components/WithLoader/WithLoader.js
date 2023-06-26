import * as React from 'react'
import pt from 'prop-types'
import { Skeleton } from '@material-ui/lab'

const WithLoader = ({ children, isLoading, skeletonCount, skeletonProps }) => {
  if (isLoading) {
    return (
      <>
        {Array(skeletonCount)
          .fill(1)
          .map((item, idx) => (
            <Skeleton {...skeletonProps} key={idx} />
          ))}
      </>
    )
  }
  return children
}

WithLoader.defaultProps = {
  skeletonCount: 10,
  isLoading: false,
  skeletonProps: {},
}

WithLoader.propTypes = {
  skeletonCount: pt.number.isRequired,
  isLoading: pt.bool,
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  skeletonProps: pt.object,
}

export default WithLoader
