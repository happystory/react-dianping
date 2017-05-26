import React, { Component } from 'react'

import './style.styl'

class Header extends Component {
  handleClick() {
    window.history.back()
  }
  
  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={this.handleClick}>
          <i className="icon-chevron-left"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header