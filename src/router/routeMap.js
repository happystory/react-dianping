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
        <Switch>
          <Route exact path="/" component={App(Home)} />
          <Route path="/city" component={App(City)} />
          <Route path="/user" component={App(User)} />
          <Route path="/search/:category/:keyword" component={App(Search)} />
          <Route path="/search/:category" component={App(Search)} />
          <Route path="/detail/:id" component={App(Detail)} />
          <Route component={App(NotFound)} />
        </Switch>
      </Router>
    )
  }
}
export default RouterMap