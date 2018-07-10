import React, { Component } from 'react';
import Form from './Form';

class Details extends Component {

  state = {
    videoUrl: "",
    formButton: false
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  componentDidUpdate() {
    window.scrollTo(0,0)
    console.log('in the did update', this.props)
  }

  fetchVideo = (link) => {
    fetch(link)
    .then(response=>response.json())
    .then(array=>{
      this.setState({videoUrl: array[0]}, ()=>{console.log("in the state", this.state.videoUrl)})
    })
  }

  renderForm = (event) => {
    if (event.target.name === "form" && this.state.formButton === false){
      this.setState({formButton: true})
    } else if (event.target.name === "form" && this.state.formButton === true){
      this.setState({formButton: false})
    }
  }

  render() {
    if (this.props.selectedImage.data[0].media_type === "video" && this.state.videoUrl === ""){
      this.fetchVideo(this.props.selectedImage.href)
    }

    return (

      <div className="details">

        <h1>{this.props.selectedImage.data[0].title}</h1>

        {this.props.selectedImage.data[0].media_type === "image" ? <img src={this.props.selectedImage.links[0].href} /> : <iframe src={this.state.videoUrl}></iframe> }

        <p>{this.props.selectedImage.data[0].description}</p>

        <button className="button">SAVE</button>

        <div>
          <button className="button" name="form" onClick={this.renderForm}>CREATE A NEW GALAXY</button>

          <div>{this.state.formButton === true ? <Form {...this.props}/> : null }</div>

        </div>

      </div>


    )
  }
}

export default Details;
