import React, { Component }from 'react';

export default class SearchMovie extends Component{
  state = {
    searchInput:''
  }

  handleUpdateSearchInput = (event) => {
    const value =event.target.value;

    this.setState({searchInput: value})
  }

  render() {
    const { handleUpdatMovieData } =this.props;
    const { searchInput } =this.state;

    return (
      <form
        id="search"
        className="search"
        onSubmit={(event) => {
          handleUpdatMovieData(searchInput);
          this.setState({searchInput: ''});
          event.preventDefault();
        }}
      >
        <input
          type="search"
          placeholder="Search for a title..."
          value={searchInput}
          onChange={(event) => {this.handleUpdateSearchInput(event)}}
        />
      </form>
    )
  }
}