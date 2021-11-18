const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class movieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.themoviedb.org/3/`;
  }

  endpoints = {
    movies: `movie/popular?api_key=${process.env.API_KEY_MOVIE_DB}&language=en-US&page=1`,
  };

  async getMovies() {
    const results = await this.get(this.baseURL + this.endpoints.movies)
      .then((data) => {
        return data.results;
      })
      .catch((err) => {
        console.error(err);
      });
    return results;
  }
}

module.exports = movieAPI;
