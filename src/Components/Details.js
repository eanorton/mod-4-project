import React, { Component } from 'react';
import Form from './Form';

class Details extends Component {

  state = {
    videoUrl: ""
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  componentDidUpdate() {
    window.scrollTo(0,0)
  }

  fetchVideo = (link) => {
    fetch(link)
    .then(response=>response.json())
    .then(array=>{
      this.setState({videoUrl: array[0]}, ()=>{console.log("in the state", this.state.videoUrl)})
    })
  }

  render() {
    if (this.props.selectedImage.data[0].media_type === "video" && this.state.videoUrl === ""){
      this.fetchVideo(this.props.selectedImage.href)
    }

    return (

      <div className="details">

        <div>
          <Form {...this.props}/>
        </div>


        <h1>{this.props.selectedImage.data[0].title}</h1>

        {this.props.selectedImage.data[0].media_type === "image" ? <img src={this.props.selectedImage.links[0].href} /> : <iframe src={this.state.videoUrl}></iframe> }

        <p>{this.props.selectedImage.data[0].description}</p>

      </div>


    )
  }
}

export default Details;
