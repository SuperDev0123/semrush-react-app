import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Home from './Home'
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader'

const Dashboards = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '')
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/home`} />
        <Route exact path={`${requestedUrl}/home`} component={Home} />
        <Route exact component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  )
}

export default Dashboards
