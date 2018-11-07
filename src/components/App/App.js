import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {connect} from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM

  
  componentDidMount(){
    this.getRandom();
  }

  getRandom = () => {
    axios({
      method: 'GET',
      url: '/random'
    })
    .then((response) => {
      console.log('GET request successful', response.data);
      this.props.dispatch({
        type: 'SET_RANDOM',
        payload: response.data.images})
    })
    .catch((error) => {
      console.log('GET request unsuccessful...', error);
    })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Random Giphy API</h1>
        </header>
        {this.props.reduxState.random.map( image => (
          
        <img src={image.downsized_large.url}/>
        ))}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return ({reduxState})
}

export default connect(mapReduxStateToProps)(App);
