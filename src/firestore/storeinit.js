const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA16rtd0vrQDLbK1SXqLuhH53ui6deVKHI',
  authDomain: 'netflix-amp-server.firebaseapp.com',
  projectId: 'netflix-amp-server',
  storageBucket: 'netflix-amp-server.appspot.com',
  messagingSenderId: '177410780183',
  appId: '1:177410780183:web:edfd237ec6f0aaa0578052',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;
