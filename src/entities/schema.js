const { gql } = require('apollo-server');

const Schema = gql`
  type Query {
    Users: [User]
  }

  type User {
    firstName: String!
    lastName: String!
  }
`;

module.exports = Schema;
