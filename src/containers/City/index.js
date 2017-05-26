import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import createHashHistory from 'history/createHashHistory'

import * as userInfoActionsFormOtherFile from '../../actions/userinfo'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import LocalStore from '../../utils/localStore'
import {CITYNAME} from '../../config/localStoreKey'

const hashHistory = createHashHistory()
class City extends React.Component {
  changeNewCity(newCity) {
    if (newCity == null) {
      return
    }
    const userinfo = this.props.userinfo
    userinfo.cityName = newCity
    this.props.userInfoActions.updateCityName(userinfo)

    LocalStore.setItem(CITYNAME, newCity)

    hashHistory.push('/')
  }

  render() {
    return (
      <div>
        <Header title={`选择城市`} />
        <CurrentCity cityName={this.props.userinfo.cityName} />
        <CityList changeNewCity={this.changeNewCity.bind(this)}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
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
)(City)