import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './Components/ListContainer';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesSearch: [],
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value}, ()=>{this.fetchNewSearchQuery(this.state.searchTerm)})
  }

  fetchNewSearchQuery = (term) => {
    console.log("this is the new search term", term)
    if (term) {
      fetch(`https://images-api.nasa.gov/search?q=${term}`)
      .then(response=>response.json())
      .then(objs=>this.setState({imagesSearch: objs.collection}))
    } else {
      this.componentDidMount();
    }
  }

  componentDidMount(){
    fetch('https://images-api.nasa.gov/search?q=galaxies')
    .then(response=>response.json())
    .then(objs=>this.setState({imagesSearch: objs.collection}))
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">S p a c e  G a l l e r y</h1>

        </header>

        <SearchBar
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
          />

        <ListContainer imagesSearch={this.state.imagesSearch}/>


      </div>
    );
  }
}

export default App;
