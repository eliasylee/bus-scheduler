import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App/App'
import configureStore from './store'

import './index.css'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
