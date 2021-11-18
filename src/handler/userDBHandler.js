const { RESTDataSource } = require('apollo-datasource-rest');
const { collection, getDocs } = require('firebase/firestore');
const db = require('../firestore/storeinit');

class FirestoreAPI extends RESTDataSource {
  constructor() {
    super();
  }

  async getUsers() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  }
}

module.exports = FirestoreAPI;
