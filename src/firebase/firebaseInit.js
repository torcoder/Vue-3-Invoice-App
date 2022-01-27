import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCa3SlD-Eog2I5A595VBl1oFlX0BCTUo6A',
  authDomain: 'invoice-app-it.firebaseapp.com',
  projectId: 'invoice-app-it',
  storageBucket: 'invoice-app-it.appspot.com',
  messagingSenderId: '148903854239',
  appId: '1:148903854239:web:b6393a37757cbb9970a2aa',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
