import React, { Component } from 'react';
import ListItem from './ListItem';
import Details from './Details';
import Form from './Form';
import SavedListItems from './SavedListItems';

class ListContainer extends Component {

  state = {
    selectedImage: null,
    savedImages: []
  }

  handleClick = (event, imageObj) => {
    if (!this.state.savedImages.includes(imageObj)) {
      this.setState({savedImages: [imageObj, ...this.state.savedImages]})
    }
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
          {displaySearchQuery ? <h1>Results for "{displaySearchQuery.slice(37)}"</h1> : <h1>Loading...</h1>}
          {this.props.imagesSearch.items ? this.props.imagesSearch.items.map(obj=><ListItem getImageById={getImageById} links={obj.links} data={obj.data} key={obj.data[0].nasa_id}/> ) : null}
        </div>

        <div className="saved-list">
          <h1>Saved Items</h1>
          {this.state.savedImages ? <SavedListItems savedImages={this.state.savedImages} /> : null}
        </div>

        {this.state.selectedImage ? <Details handleClick={this.handleClick} selectedImage={this.state.selectedImage}/> : null }



      </div>
    )
  }
}

export default ListContainer;
