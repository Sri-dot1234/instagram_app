import firebase from "firebase"
const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyASlcNTV6Nz7I0Y0cVCEFbBY6jW30FhMpA",
    authDomain: "instagram-app-21b0b.firebaseapp.com",
    databaseURL: "https://instagram-app-21b0b-default-rtdb.firebaseio.com",
    projectId: "instagram-app-21b0b",
    storageBucket: "instagram-app-21b0b.appspot.com",
    messagingSenderId: "708333402638",
    appId: "1:708333402638:web:367624258812bc603bda5f"
  });
 const db=firebaseApp.firestore();
 const auth=firebase.auth();
 const storage=firebase.storage();
 export {db,auth,storage};