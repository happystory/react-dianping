import React, { Component } from 'react'

import { getAdData } from '../../../fetch/home/home'
import HomeAd from '../../../components/HomeAd'

class Ad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getAdData()
      .then((res) => res.json())
      .then((json) => {
        const data = json
        if (data.length) {
          this.setState({data})
        }
      })
  }

  render() {
    return (
      <div>
        {
          this.state.data.length 
          ? <HomeAd data={this.state.data} />
          : <div>加载中...</div>
        }
      </div>
    )
  }
}

export default Ad