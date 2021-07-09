import * as firebase from "firebase";

const config ={
    apiKey: "AIzaSyCS0zl6kKBbW-gBej7uVVZ1fltIf4QJj5o",
    authDomain: "hasnidacollection.firebaseapp.com",
    databaseURL: "https://hasnidacollection-default-rtdb.firebaseio.com",
    projectId: "hasnidacollection",
    storageBucket: "hasnidacollection.appspot.com",
    messagingSenderId: "216865754413",
    appId: "1:216865754413:web:aebdc9eaa3f902213957a4"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

