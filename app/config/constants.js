
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAvVX687U58T0BJkdnMs1vzO5FPtLq7w_g",
  authDomain: "hannahs-test-project.firebaseapp.com",
  databaseURL: "https://hannahs-test-project.firebaseio.com",
  projectId: "hannahs-test-project",
  storageBucket: "hannahs-test-project.appspot.com",
  messagingSenderId: "916050591917"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000