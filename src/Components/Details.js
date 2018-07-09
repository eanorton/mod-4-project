import React, { Component } from 'react';

class Details extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  componentDidUpdate() {
    window.scrollTo(0,0)  
  }

  render() {
    return (

      <div className="details">
        {this.props.selectedImage.data ? this.props.selectedImage.data.map(obj=><h1 key={obj.nasa_id} id={obj.nasa_id}>{obj.title}</h1>) : null}
        {this.props.selectedImage.links ? this.props.selectedImage.links.map(obj=><img src={obj.href}/>) : null}
        {this.props.selectedImage.data ? this.props.selectedImage.data.map(obj=><p>{obj.description}</p>) : null}
      </div>
    )
  }
}

export default Details;
