
import React, { Component } from 'react';
import ListItem from './ListItem';
import Details from './Details';

class ListContainer extends Component {

  state = {
    selectedImage: []
  }

  render() {

  const getImageById = (event) => {
    let selectedImageId = event.target.id
    let selectedImageObj = this.props.imagesSearch.items.find(image=>image.data[0].nasa_id == selectedImageId)
    
    this.setState({selectedImage: selectedImageObj})
  }

  let displaySearchQuery = this.props.imagesSearch.href

    return (

      <div>

        <div className="list-container">
          {displaySearchQuery ? <h1>Results for {displaySearchQuery.slice(37)}</h1> : <h1>Loading...</h1>}
          {this.props.imagesSearch.items ? this.props.imagesSearch.items.map(obj=><ListItem getImageById={getImageById} links={obj.links} data={obj.data} key={obj.data[0].nasa_id}/> ) : null}
        </div>

        <Details />

      </div>
    )
  }
}

export default ListContainer;
