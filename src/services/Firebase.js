import * as firebase from 'firebase';

const config = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'your-app-id.firebaseapp.com',
  databaseURL: 'https://your-app-id.firebaseio.com',
  projectId: 'your-app-id',
  storageBucket: 'your-app-id.appspot.com',
  messagingSenderId: '1234567890'
};

firebase.initializeApp(config);

export default firebase;