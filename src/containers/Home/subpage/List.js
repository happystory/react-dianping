import React, {Component} from 'react'
import './style.styl'
import {getListData} from '../../../fetch/home/home'

import ListComponent from '../../../components/List'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      hasMore: false
    }
  }

  componentDidMount() {
    this.loadfirstPageData()
  }

  // 获取首屏数据
  loadfirstPageData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    this.resultHandle(result)
  }

  resultHandle(result) {
    result
      .then((res) => res.json())
      .then((json) => {
        const {data, hasMore} = json

        this.setState({
          data,
          hasMore
        })
      })
  }

  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.data.length
          ? <ListComponent data={this.state.data} />
          : <div>加载中...</div>
        }
      </div>
    )
  }
}

export default List