import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import axios from 'axios'

class App extends Component {
  
   state = {
      one: true
   }
   
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
        this.setState({one: !this.state.one})
    })
    .catch((error) => {
      console.log('GET request unsuccessful...', error);
    })
  }

  pageRefresh = () => {
   //   this.setState({one: !this.state.one})
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 style={{textAlign: "center"}}>Random Giphy API</h1>
          <p>Click <button onClick={this.getRandom}>THIS</button> button to generate a random gif from <a href="https://giphy.com/">Giphy</a></p>
          <p>Refresh the page for a clean slate...</p>
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
