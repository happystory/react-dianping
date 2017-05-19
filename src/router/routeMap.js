import React, { Component } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

const history = createHashHistory();
class RouterMap extends Component {
  render() {
    return (
      <Router history={history}>
        <App>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/city" component={City} />
              <Route path="/user" component={User} />
              <Route path="/search/:type(/:keyword)" component={Search} />
              <Route path="/detail/:id" component={Detail} />
              <Route component={NotFound} />
          </Switch>
        </App>
      </Router>
    )
  }
}
export default RouterMap