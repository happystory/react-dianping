import React from 'react'
import './style.styl'
import SearchInput from '../SearchInput'
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()

class Search extends React.Component {
  handleClick() {
    window.history.back()
  }

  handleEnter(value) {
    hashHistory.push('/search/all/' + encodeURIComponent(value))
  }

  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.handleClick.bind(this)}>
          <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          &nbsp;
          <SearchInput 
            value={this.props.keyword || ''}
            handleEnter={this.handleEnter.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Search