import React, {Component} from 'react'

import Item from './Item'
import './style.styl'


class List extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="list-container">
      {data.map((item, index) => (
        <Item key={index} data={item}/>
      ))}
      </div>
    )
  }
}

export default List