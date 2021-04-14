import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAEKVl2oOkNTmPRbVaaozkPKWOsBmZR6BQ',
  authDomain: 'bacetech-78225.firebaseapp.com',
  projectId: 'bacetech-78225',
  storageBucket: 'bacetech-78225.appspot.com',
  messagingSenderId: '481936830438',
  appId: '1:481936830438:web:0735111dedfcd2dbfa3027',
  measurementId: 'G-5C4ZJWG44Y',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
  console.log(snapshot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
