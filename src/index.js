import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { routes } from './routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    ,
    document.getElementById('root')
)
