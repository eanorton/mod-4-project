import React, { Component } from 'react';

class SavedListItems extends Component {

  render() {

    let allImages = this.props.savedImages.map(image=><div className="list-group-item"><h4>{image.data[0].title}</h4><h6>{image.data[0].media_type}</h6></div>)



    return (
      <div>
        {allImages}
      </div>
    )
  }
}

export default SavedListItems
