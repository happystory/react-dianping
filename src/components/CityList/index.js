import React, {Component} from 'react'

import './style.styl'

class CityList extends Component {
  handleClick(event) {
    const newCity = event.target.innerText;
    this.props.changeNewCity(newCity)
  }

  render() {
    return (
      <div className="city-list-container">
        <h3>城市列表</h3>
        <ul className="clear-fix" onClick={this.handleClick.bind(this)}>
          <li>北京</li>
          <li>上海</li>
          <li>广州</li>
          <li>深圳</li>
          <li>杭州</li>
          <li>南京</li>
          <li>天津</li>
          <li>重庆</li>
          <li>苏州</li>
          <li>厦门</li>
          <li>西安</li>
          <li>武汉</li>
        </ul>
      </div>
    )
  }
}

export default CityList