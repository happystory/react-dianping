import React, {Component} from 'react'
import './style.styl'


class SearchInput extends Component {
  constructor() {
    super()
    this.state = {
      kwd: ''
    }
  }

  handleChange(e) {
    this.setState({
      kwd: e.target.value
    })
  }

  handleKeyup(e) {
    if (e.keyCode !== 13) {
      return;
    }
    this.props.handleEnter(this.state.kwd)
  }

  render() {
    return (
      <input
        type="text"
        className="search-input"
        placeholder={this.props.value} 
        value={this.state.kwd}
        onChange={this.handleChange.bind(this)}
        onKeyUp={this.handleKeyup.bind(this)}
         />
    )
  }
}

export default SearchInput