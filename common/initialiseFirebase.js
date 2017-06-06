import firebase from 'firebase'
import config from 'config'

if (firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

console.log(config)
