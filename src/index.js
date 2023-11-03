import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'
import { relevanceFilterReducer } from './reducers/relevanceFilterReducer'
import { stopsFilterReducer } from './reducers/stopsFilterReducer'
import { fetchDataReducer } from './reducers/fetchDataReducer'

const store = configureStore({
  reducer: {
    relevanceFilter: relevanceFilterReducer,
    stopsFilter: stopsFilterReducer,
    fetchData: fetchDataReducer,
  },
  middleware: [thunkMiddleware],
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
