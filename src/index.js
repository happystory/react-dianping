import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Hello from './containers/Hello'
import configureStore from './store/configureStore'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')
)
