import firebase from 'firebase'
import config from './config'

try {
  firebase.initializeApp(config)
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error', error.stack)
  }
}

export default firebase
