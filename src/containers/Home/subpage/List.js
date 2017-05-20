import React, {Component} from 'react'
import './style.styl'
import {getListData} from '../../../fetch/home/home'

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      // 下一页页码
      page: 1
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

  loadMoreData() {
    this.setState({
      isLoadingMore: true
    })
    const cityName = this.props.cityName
    const page = this.state.page
    const result = getListData(cityName, page)
    this.resultHandle(result)

    this.setState({
      page: page + 1,
      isLoadingMore: false
    })
  }

  resultHandle(result) {
    result
      .then((res) => res.json())
      .then((json) => {
        const {data, hasMore} = json

        this.setState((prevState) => ({
          data: prevState.data.concat(data),
          hasMore
        }))
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
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
          : null
        }
      </div>
    )
  }
}

export default List