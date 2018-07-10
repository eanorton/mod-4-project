import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: "",
    description: "",
    imageUrl: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {

    return (
      <form className="form" onSubmit={this.handleSubmit}>

        <div>
          <h3>Create New Galaxy</h3>
        </div>

        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
        </label>
        <br></br>
        <label className="label">
          Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            />
        </label>
        <br></br>
        <label className="label">
          Image Url:
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
            />
        </label>
        <br></br>
        <button className="button" type="submit" value="Submit">SUBMIT</button>

      </form>
    )
  }
}

export default Form;
