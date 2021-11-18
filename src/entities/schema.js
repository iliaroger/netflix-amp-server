const { gql } = require('apollo-server');

const Schema = gql`
  type Query {
    Users: [User]
    Movies: [Movie]
  }

  type Details {
    page: Int
    results: [Movie]
    total_pages: Int
    total_results: Int
  }

  type Movie {
    adult: Boolean
    backdrop_path: String!
    genre_ids: [Int]
    id: Int!
    orginal_language: String!
    original_title: String!
    overview: String!
    popularity: Float!
    poster_path: String!
    release_date: String!
    title: String!
    video: Boolean!
    vote_average: Float!
    vote_count: Float!
  }

  type User {
    firstName: String!
    lastName: String!
  }
`;

module.exports = Schema;
