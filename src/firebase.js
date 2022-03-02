import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCMRHiAbd_s8wsYXfBqRRVhg0oQWhWY2M",
    authDomain: "linkedin-e.firebaseapp.com",
    projectId: "linkedin-e",
    storageBucket: "linkedin-e.appspot.com",
    messagingSenderId: "256420864532",
    appId: "1:256420864532:web:2bcf512d4d774de36b3d01",
    measurementId: "G-JX35HW27GK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage };
export default db
