import React, {Component} from 'react'
import './style.styl'

class LoadMore extends Component {
  componentDidMount() {
    let timeoutId
    const wrapper = this.wrapper
    const loadMoreFn = this.props.loadMoreFn
    function callback() {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if (top && top < windowHeight) {
        loadMoreFn()
      }
    }

    window.addEventListener('scroll', (event) => {
      if (this.props.isLoadingMore) {
        return
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(callback, 50)
    }, false)
  }

  loadMoreHandle() {
    this.props.loadMoreFn()
  }

  render() {
    return (
      <div className="loading-more" ref={(wrapper) => this.wrapper = wrapper}>
        {
          this.props.isLoadingMore
          ? <span>加载中...</span>
          : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
}

export default LoadMore