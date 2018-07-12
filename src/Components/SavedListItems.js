import React, { Component } from 'react';

class SavedListItems extends Component {

  state = {
    clicked: false
  }

  handleClick = (event) => {
    if (this.state.clicked === false){
      this.setState({clicked:true})
    } else if (this.state.clicked === true){
      this.setState({clicked:false})
    }
    this.props.getImageById(event)
  }

  render() {

    let allImages = this.props.savedImages.map(image=><div
      className="list-group-item"
      id={image.data[0].nasa_id}
      key={image.data[0].nasa_id}
      onClick={(event)=>{this.handleClick(event)}}> <h4 id={image.data[0].nasa_id}>{image.data[0].title}</h4><h6 id={image.data[0].nasa_id}>{image.data[0].media_type}</h6></div>)



    return (
      <div onClick={(event)=>{this.handleClick(event)}}>
        {allImages}
      </div>
    )
  }
}

export default SavedListItems
