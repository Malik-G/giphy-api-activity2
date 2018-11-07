import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import axios from 'axios'

class App extends Component {
  
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
          <img src={image.downsized_medium.url} alt="Random Giphy Pic"/>
        ))}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return ({reduxState})
}

export default connect(mapReduxStateToProps)(App);
