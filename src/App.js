import React, { Component } from 'react';
import './App.css';

const URL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  
  constructor(props) {
		super(props);
		this.state = {names: null};
    
    this.setNames = this.setNames.bind(this);
	}
  
  setNames(result) {
    this.setState({names : result});
  }
  
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(result => this.setNames(result))
      .catch(e => e);
  }
  
  render() {
    const { names } = this.state;
    if(!names) { return null; }
    
    var rows = [];
    for (var i = 0; i < names.length; i++) {
      rows.push(<Contact>{names[i].name}</Contact>);
    }
    
    return (
      <div className="App">
        {rows}
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    const { children } = this.props;
    const divStyle = {
      color : 'blue'
    }
    return(
       <div class="row-style">
        <input type="checkbox" id="contactBox" name="contactName" />
        <label for="contactBox">{ children }</label>
       </div>
    );
  }
}

export default App;
