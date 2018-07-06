import React, { Component } from 'react';
import ListContainer from './ListContainer';


class ListItem extends Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    if (this.state.clicked === false){
      this.setState({clicked:true})
    } else if (this.state.clicked === true){
      this.setState({clicked:false})
    }
  }

  render() {

    console.log("inside the listItem comp", this.props)

    return (
      <div className="list-group-item" onClick={this.handleClick}>
        {this.props.data ? this.props.data.map(obj=><h4>{obj.title}</h4>) : null}
        {this.props.links && this.state.clicked === true ? this.props.links.map(obj=><img src={obj.href}/>) : null}
        {this.props.data && this.state.clicked === true ? this.props.data.map(obj=><p>{obj.description}</p>) : null}
      </div>
    )
  }
}

export default ListItem;
