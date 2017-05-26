import React from 'react'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/SearchList'

class Search extends React.Component {
  render() {
    const {keyword, category} = this.props.match.params
    return (
      <div>
        <SearchHeader keyword={keyword}/>
        <SearchList keyword={keyword} category={category}/>
      </div>
    )
  }
}

export default Search