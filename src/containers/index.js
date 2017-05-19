import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo'

import LocalStore from '../utils/localStore'
import {CITYNAME} from '../config/localStoreKey'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      initDone: false
    }
  }

  componentDidMount() {
    let cityName = LocalStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '北京'
    }
    this.props.userInfoActions.updateCityName({
      cityName: cityName
    })
    console.log(cityName)
    this.setState({
      initDone: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.initDone
          ? this.props.children
          : <div>加载中...</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function  mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)