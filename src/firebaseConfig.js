import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCcWyd-HlqhUusWbRxL4lbixXtjbLGPkUc",
    authDomain: "whatsapp-clone-2384a.firebaseapp.com",
    projectId: "whatsapp-clone-2384a",
    storageBucket: "whatsapp-clone-2384a.appspot.com",
    messagingSenderId: "885310802998",
    appId: "1:885310802998:web:c973a858de73cfc5ee1c97",
    measurementId: "G-PJ55XCP28Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db