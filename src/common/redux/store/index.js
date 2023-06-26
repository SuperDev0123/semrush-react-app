import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import reducers from '../reducers'

const history = createBrowserHistory()
const routeMiddleware = routerMiddleware(history)
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const storage = require('redux-persist/lib/storage').default
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['poll'],
  blacklist: ['errorHandler'],
}

function configureStore(initialState = {}) {
  const persistedReducer = persistReducer(persistConfig, reducers(history))

  const store = createStore(
    persistedReducer,
    initialState,
    bindMiddleware([routeMiddleware, thunk])
  )
  store.__persistor = persistStore(store)
  return store
}

export default configureStore
export { history }
