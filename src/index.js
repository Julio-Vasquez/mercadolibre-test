import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './views/App'

import Store from './store/Store'

import './sass/_all.scss'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root-app')
)
