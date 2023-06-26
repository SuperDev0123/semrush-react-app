import * as React from 'react'
import pt from 'prop-types'
import { Helmet } from 'react-helmet-async'

const MetaProvider = ({ children, title }) => {
  React.useEffect(() => {
    window.dataLayer.push({
      event: 'pageview',
      page: {
        url: window.location.href,
        title,
      },
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}

MetaProvider.propTypes = {
  children: pt.node.isRequired,
  title: pt.string.isRequired,
}

export default MetaProvider
