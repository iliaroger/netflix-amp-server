const resolvers = {
  Query: {
    Users: (parent, context, { dataSources }) => {
      return dataSources.apiHandler.getUsers();
    },
    Movies: (parent, context, { dataSources }) => {
      return dataSources.movieHandler.getMovies();
    },
  },
};

module.exports = resolvers;
