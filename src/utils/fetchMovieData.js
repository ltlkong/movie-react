export default function fetchMovieData(query) {
  const apiKey = '940f05e14556a0c26ecd7108cb79b9f3';

  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
  .catch(err => console.log('error happened '+err))
  .then(res => res.json())
}