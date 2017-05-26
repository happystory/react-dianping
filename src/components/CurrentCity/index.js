import React, {Component} from 'react'

import './style.styl'

class CurrentCity extends Component {
  render() {
    return (
      <div className="current-city">
        <h2>{this.props.cityName}</h2>
      </div>
    )
  }
}

export default CurrentCity