import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import {applyMiddleware,compose,createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
const store=createStore(reducers,compose(applyMiddleware(thunk)))
// const store = configureStore({
//   reducers,
//   compose(applyMiddleware(thunk))
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   // devTools: process.env.NODE_ENV !== 'production',
//   // preloadedState,
//   // enhancers: [batchedSubscribe(debounceNotify)],
// })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
