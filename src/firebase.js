import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAWQsPpGHSIBgbJgIHn6CRCPAl2o1_Z9DQ",
    authDomain: "chit-chat-a32a1.firebaseapp.com",
    projectId: "chit-chat-a32a1",
    storageBucket: "chit-chat-a32a1.appspot.com",
    messagingSenderId: "715936991846",
    appId: "1:715936991846:web:1897668bae6821652b7ba7"
}).auth();