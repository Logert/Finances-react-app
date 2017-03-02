import React from 'react'
import { Route} from 'react-router'
import App from './containers/App'
import Journal from './components/Journal'


export const routes = (
    <div>
        <Route path='/' component={App}>
            {/*<IndexRoute component={Journal}/>*/}
            <Route path='/journal' component={Journal}/>
        </Route>
    </div>);