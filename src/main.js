const { ApolloServer } = require('apollo-server');
const Schema = require('./entities/schema.js');
const Resolvers = require('./resolvers/resolvers');
const FirestoreAPI = require('./handler/userDBHandler');
const MovieAPI = require('./handler/movieDBHandler');

const app = async (typeDefs, resolvers) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        apiHandler: new FirestoreAPI(),
        movieHandler: new MovieAPI(),
      };
    },
    introspection: process.env.NODE_ENV !== 'production',
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`server is running on port: ${url}`);
    })
    .catch((err) => {
      console.error(err);
    });
};

app(Schema, Resolvers);
