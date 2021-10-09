import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './store/Store'

<<<<<<< HEAD
import './sass/_all.scss'
=======
import 'antd/dist/antd.css'
import App from './views/App'
>>>>>>> dfl

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root-app')
)
