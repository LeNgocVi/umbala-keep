// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

require('firebase/firestore')



require('firebase/auth')

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB50VRdRYw6sGz_n-Kr6rzl79g_yQfAy38",
  authDomain: "umbala-keep.firebaseapp.com",
  projectId: "umbala-keep",
  storageBucket: "umbala-keep.appspot.com",
  messagingSenderId: "812673701951",
  appId: "1:812673701951:web:29d77fd7a583986608808a"
};



firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;