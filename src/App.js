
import React, { Component } from 'react'
import Person from './component/Person';
import './App.css';



 class App extends Component {
  
  constructor (props) {
    super(props) 
    this.state = {
      shows : false

    }
  }

  componentDidMount(){
    console.log("App.js componentDidMount")
  }

  switch =()=>this.setState({shows: !this.state.shows})





  render() {
    return (
      <div className='App'>
       <button onClick={this.switch}>Show</button>
        {this.state.shows ? <Person /> : null} 
      </div>
    )
  }
}


export default App;
