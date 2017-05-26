import React, {Component} from 'react'
import './style.styl'
import {Link} from 'react-router-dom'
import SearchInput from '../SearchInput'
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()

class HomeHeader extends Component {
  handleEnter(value) {
    hashHistory.push('/search/all/' + encodeURIComponent(value))
  }

  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <SearchInput 
              value="请输入关键字"
              handleEnter={this.handleEnter.bind(this)}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader