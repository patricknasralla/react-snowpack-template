import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { FirestoreContext } from './firestore/context'
import { Firestore } from './firestore/firestore'

ReactDOM.render(
  <React.StrictMode>
    <FirestoreContext.Provider value={new Firestore()} >
      <App />
    </FirestoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
