import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import SagaMiddleware from 'redux-saga'

import RootReducer from './Reducers'
import RootSagas from './Sagas'

import { MODE_DEV } from './../common/config'

const sagaModdleware = SagaMiddleware()

const Middleware = () => {
  let middleware = [sagaModdleware]
  return MODE_DEV ? [...middleware, logger] : middleware
}

const Store = configureStore({
  devTools: MODE_DEV,
  middleware: Middleware,
  reducer: RootReducer,
})

sagaModdleware.run(RootSagas)

export default Store
