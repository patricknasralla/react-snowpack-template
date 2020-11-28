import 'firebase/auth'
import 'firebase/firestore'

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey:            import.meta.env.SNOWPACK_PUBLIC_API_KEY,
  authDomain:        import.meta.env.SNOWPACK_PUBLIC_AUTH_DOMAIN,
  databaseURL:       import.meta.env.SNOWPACK_PUBLIC_DATABASE_URL,
  projectId:         import.meta.env.SNOWPACK_PUBLIC_PROJECT_ID,
  storageBucket:     import.meta.env.SNOWPACK_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.SNOWPACK_PUBLIC_MESSAGING_SENDER_ID,
  appId:             import.meta.env.SNOWPACK_PUBLIC_APP_ID,
}

// type aliases for brevity
type Document = firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
type Collection = firebase.firestore.CollectionReference<firebase.firestore.DocumentData>


export class Firestore {

  private db: firebase.firestore.Firestore

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
    this.db = firebase.firestore()
    // this.auth = firebase.auth()
  }

  // Overwrite this API
  item(uid: string): Document {
    return this.db.doc(`items/${uid}`)
  }
  items(): Collection {
    return this.db.collection('items')
  }

}
