import React, { useEffect, useLayoutEffect } from 'react'
import { Switch, Router } from 'react-router-dom'
import { useLocation } from 'react-router'
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router'
import { Toaster } from 'react-hot-toast'

import AppContextProvider from '@src/@jumbo/components/contextProvider/AppContextProvider'
import { AccessControlProvider } from '@src/common/context/AccessControl'
import { NotificationsProvider } from '@src/common/context/Notifications'
import { initializeTagManager } from '@src/common/functions/tools'
import configureStore, { history } from '@src/common/redux/store'
import queryClient from '@src/common/config/query-client'
import { XHRErrorHandler } from '@src/common/components'
import Routes from '@src/routes'

import 'react-perfect-scrollbar/dist/css/styles.css'
// import { initializePusher } from './common/functions/tools'
import { AppWrapper } from './common/components'

export const store = configureStore()

initializeTagManager()


const LocationWatcher = ({ children }) => {
  // Location is an immutable representation of native history object. It changes at the same time as path, state, hash, etc. changes
  const location = useLocation()

  // You could use useEffect if you want to. useLayoutEffect is just a bit faster and gives us a chance to perform changes within 1-2 screen frames, which makes the transition barely noticeable 
  useLayoutEffect(
    () => {
      // This will handle the case when SplitSignal is not yet ready to consume events, so it could run immediately
      window.SM_SPLITSIGNAL_READY = true

      window.dispatchEvent(new Event('splitsignal.initialized'))
      
    },
    [location]
  )
  return <>{children}</>
}


const App = () => {
  window.dataLayer.push({
    event: 'pageview',
  })

  // useEffect(() => {
  //   initializePusher()
  // }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <NotificationsProvider>
        <Provider store={store}>
          <AccessControlProvider>
            <AppContextProvider>
              <PersistGate loading={null} persistor={store.__persistor}>
                <ConnectedRouter history={history}>
                  <LocationWatcher>
                    <AppWrapper>
                      <XHRErrorHandler>
                        <Switch>
                          <Routes />
                        </Switch>
                      </XHRErrorHandler>
                    </AppWrapper>
                  </LocationWatcher>
                </ConnectedRouter>
              </PersistGate>
            </AppContextProvider>
          </AccessControlProvider>
        </Provider>
      </NotificationsProvider>
    </QueryClientProvider>
  )
}

export default App
