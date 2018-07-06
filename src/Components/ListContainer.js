import React, { Component } from 'react';
import ListItem from './ListItem';
import Details from './Details';

class ListContainer extends Component {

  render() {

  console.log("props in the list container comp", this.props.imagesSearch.href)

  let displaySearchQuery = this.props.imagesSearch.href

    return (
      <div>

        {displaySearchQuery ? <h1>Results for {displaySearchQuery.slice(37)}</h1> : <h1>"Loading..."</h1>}

        {this.props.imagesSearch.items ? this.props.imagesSearch.items.map(obj=><ListItem links={obj.links} data={obj.data}/> ) : <ListItem />}

      </div>
    )
  }
}

export default ListContainer;
