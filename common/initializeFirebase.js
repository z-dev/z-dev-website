import config from 'config'
import firebase from 'firebase'

if (firebase.apps.length === 0) {
 firebase.initializeApp(config.firebaseConfig)
}
