import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import fetchMovieData from "../utils/fetchMovieData.js";
import Header from './Header';
import Movies from './Movies';

class App extends Component {
  state = {
    movieData: []
  }

  componentDidMount() {
    fetchMovieData('star war')
    .then(res => {
      this.setState({movieData: res.results});
    })
  }

  handleUpdatMovieData = (value) => {
    fetchMovieData(value)
    .then(res => {
      this.setState({movieData: res.results});
    })
  }

  render() {
    const { movieData } = this.state;

    return (
      <BrowserRouter>
        <Header handleUpdatMovieData={this.handleUpdatMovieData}/>
        <div className="titleList">
          <div className="title">
            <h1>Movies</h1>
            <div className="titles-wrapper">
              <Movies movieData={movieData}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
