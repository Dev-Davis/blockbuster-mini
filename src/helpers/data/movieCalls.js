import axios from 'axios'

const movies = '../../db.movies.json'

const getAllMovies = () => new Promise((resolve, reject) => {
  axios.get(movies) 
  .then((res) => {
    const films = [];
    if (res.data !== null) {
      Object.keys(res.data).forEach((movieKey) => {
        res.data[movieKey].id = movieKey;
        films.push(res.data[movieKey]);
      })
    }
    resolve(movies);
  })
  .catch(err => reject(err));
})

const theMovies = {
  getAllMovies
}

export default {
  theMovies
}