import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import { useQuery } from 'react-query'

import { AccessControlContext } from '@src/common/context/AccessControl'
import { checkClientSubscription } from '@src/common/api'
import { Toaster } from '@src/common/components'
import queryKeys from '@src/common/queryKeys'

import {
  privateRoutes,
  publicRoutes,
  browserRoutes,
} from '../common/browserRoutes'
import { PRIVATE_ROUTE_KEY, PUBLIC_ROUTE_KEY } from '../common/constants'
import { prepareAccessControlObj } from '../common/functions/helpers'
import { removeAttemptURL, setAttemptURL, setCouponCode } from '../common/functions/tools'
import Error404 from './Error404'

const RouteCore = (props) => {
  const { setAccessControl } = useContext(AccessControlContext)
  const { authUser } = useSelector(({ auth }) => auth)

  removeAttemptURL()
  const planSubscriptionQuery = useQuery({
    queryKey: queryKeys.CHECK_USER_SUBSCRIPTION,
    queryFn: checkClientSubscription,
    staleTime: 0,
    cacheTime: 0,
    enabled: !!authUser,
    onSuccess: (res) => {
      setAccessControl((prevState) =>
        prepareAccessControlObj(prevState, res.data)
      )
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText
      )
    },
  })

  if (planSubscriptionQuery.isLoading) return null

  if (authUser) return <props.Component {...props} />

  setAttemptURL()
  return (
    <Redirect
      to={{
        pathname: browserRoutes.SIGN_IN(),
        state: { from: props.location },
      }}
    />
  )
}

const RestrictedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => <RouteCore {...props} Component={Component} />}
    />
  )
}

const Routes = () => {
  const location = useLocation()

  const pathName = location.pathname
  setCouponCode()

  if (pathName === '' || pathName === browserRoutes.HOME()) {
    return <Redirect to={browserRoutes.GUEST_SUGGESTIONS()} />
  }

  return (
    <React.Fragment>
      <Switch>
        {privateRoutes.map((privateRoute) => (
          <RestrictedRoute
            key={`${PRIVATE_ROUTE_KEY}-${privateRoute.id}`}
            exact={privateRoute.exact}
            path={privateRoute.path}
            component={privateRoute.component}
          />
        ))}
        {publicRoutes.map((route) => (
          <Route
            key={`${PUBLIC_ROUTE_KEY}-${route.id}`}
            path={route.path}
            component={route.component}
          />
        ))}
        <Route path="*" component={Error404} />
      </Switch>
    </React.Fragment>
  )
}

export default Routes
