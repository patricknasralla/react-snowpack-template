import React, { useContext } from 'react'

import type { Firestore } from './firestore'

export const FirestoreContext = React.createContext<Firestore | null>(null)

export const useFirestore = (): Firestore | null => {
  return useContext(FirestoreContext)
}
