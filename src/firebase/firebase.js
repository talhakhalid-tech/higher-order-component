import * as firebase from 'firebase'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyCEWW2r3y3SAW54lGwKkxOKyfmp_ljw7Wk",
    authDomain: "temp-c1129.firebaseapp.com",
    databaseURL: "https://temp-c1129.firebaseio.com",
    projectId: "temp-c1129",
    storageBucket: "temp-c1129.appspot.com",
    messagingSenderId: "830476978263",
    appId: "1:830476978263:web:9163a06b9a2c4dfa0bfb12"
}
const db = firebase.initializeApp(config)
export default db