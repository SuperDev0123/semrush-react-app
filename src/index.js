import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import App from './App'
import * as serviceWorker from './serviceWorker'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

const rootEl = document.getElementById('root')

const app = (
  <HelmetProvider>
    <App>
      <Helmet>
        <title>Dashboard || App</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </App>
  </HelmetProvider>
)

ReactDOM.hydrate(app, rootEl)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
