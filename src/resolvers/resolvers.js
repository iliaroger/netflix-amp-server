const resolvers = {
  Query: {
    Users: (parent, context, { dataSources }) => {
      return dataSources.apiHandler.getUsers();
    },
  },
};

module.exports = resolvers;
