import React, { Component } from 'react';
import ListContainer from './ListContainer';


class ListItem extends Component {

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

    return (
      <div className="list-group-item" id={this.props.data[0].nasa_id} key={this.props.data[0].nasa_id} onClick={(event)=>{this.handleClick(event)}}>

        {this.props.data ? this.props.data.map(obj=><h4 key={obj.nasa_id} id={obj.nasa_id}>{obj.title}</h4>) : null}

        {this.props.data ? this.props.data.map(obj=><h6 key={obj.nasa_id} id={obj.nasa_id}>{obj.media_type}</h6>) : null}

      </div>
    )
  }
}

export default ListItem;
