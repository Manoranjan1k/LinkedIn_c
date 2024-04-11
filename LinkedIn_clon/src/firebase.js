import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYe6ByWXgsthtejPFLk9jLL7Bb4uj-lYM",
    authDomain: "linkedin-clone-c4346.firebaseapp.com",
    projectId: "linkedin-clone-c4346",
    storageBucket: "linkedin-clone-c4346.appspot.com",
    messagingSenderId: "670651136960",
    appId: "1:670651136960:web:f5d321c0ae38446b07e625"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;