import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HomeHeader from '../../components/HomeHeader'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
      </div>
    )
  }
}

// 绑定redux
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
