import React from 'react'
import { Route, IndexRoute} from 'react-router'
import App from './containers/App'
import Journal from './components/Journal'
import Kategory from './components/Kategory'
import Currency from './components/Currency'
import Home from './components/Home'


export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/journal' component={Journal}/>
            <Route path='/kategory' component={Kategory}/>
            <Route path='/currency' component={Currency}/>
        </Route>
    </div>);