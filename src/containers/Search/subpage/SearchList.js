import React, {Component} from 'react'
import './style.styl'
import {getListData} from '../../../fetch/home/home'

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

// 初始化一个组件的 state
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
}

class List extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  componentDidMount() {
    this.loadFirstPageData()
  }

  componentDidUpdate(prevProps, prevState) {
    const keyword = this.props.keyword
      const category = this.props.category

      // 搜索条件完全相等时，忽略。重要！！！
      if (keyword === prevProps.keyword && category === prevProps.category) {
          return
      }

      // 重置 state
      this.setState(initialState)

      // 重新加载数据
      this.loadFirstPageData()
  }

  // 获取首屏数据
  loadFirstPageData() {
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