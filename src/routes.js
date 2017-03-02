import React from 'react'
import { Route, IndexRoute} from 'react-router'
import App from './containers/App'
import Journal from './components/Journal'
import Home from './components/Home'


export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/journal' component={Journal}/>
        </Route>
    </div>);