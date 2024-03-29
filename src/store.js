import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './App/reducers'

const configureStore = () =>
  createStore(
    reducer,
    applyMiddleware(thunk)
  )

export default configureStore
