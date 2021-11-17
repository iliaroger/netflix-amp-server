const { RESTDataSource } = require('apollo-datasource-rest');
const { collection } = require('firebase/firestore');
const { db } = require('../firestore/storeinit');

class FirestoreAPI extends RESTDataSource {
  constructor() {
    super();
  }

  getUsers() {
    return [...data];
  }
}

const data = [
  { firstName: 'John', lastName: 'Mjölnir' },
  { firstName: 'Gabe', lastName: 'Gabeson' },
];

module.exports = FirestoreAPI;
