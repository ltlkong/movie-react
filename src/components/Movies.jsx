import React, { Component } from 'react';

export default class Movies extends Component {
  state={
    likedMovie: []
  }

  handleToggle = (movie,ifMovieLiked) => {
    this.setState(prevState => {
      //finding movie in likedMovie array if not exist then add the movie in the array otherwise remove the movie in the likedMovie Array
      return {likedMovie: ifMovieLiked ? prevState.likedMovie.concat(movie.title) : prevState.likedMovie.filter(currentTitle => movie.title !== currentTitle)}
    });
  }

  render() {
    const { movieData } = this.props;
    const { likedMovie } = this.state;

    return movieData.map((movie, index) => {
      const ifMovieLiked = likedMovie.indexOf(movie.title) === -1;

      return (
        <div className="movie" key={index}>
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/images/image-not-available.jpg'}
            alt="Movie poster"
          />
          <div className="overlay">
            <div className="title">{movie.title}</div>
            <div className="rating">{`${movie.vote_average}/10`}</div>
            <div className="plot">{movie.overview}</div>
            <div data-toggled={ifMovieLiked ? false : true} className="listToggle" onClick={() => this.handleToggle(movie, ifMovieLiked)}>
              <div>
                <i className="far fa-heart"></i>
                <i className="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>)
    })
  }
}