import React, { ReactElement, useEffect } from 'react'

import styles from './App.module.css'
import logo from './logo.svg'
import { useStore } from './state/store'


export function App(): ReactElement {
  const count = useStore(state => state.count)
  const increaseCount = useStore(state => state.increment)

  useEffect(() => {
    const timer = setTimeout(() => increaseCount(1), 1000)
    return () => clearTimeout(timer)
  }, [count, increaseCount])

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          I&apos;m made in react and I have a global,
          immer powered store already, look:
        </p>
        <p>
          Store has existed for <code>{count}</code> seconds.
        </p>
        <p>
          Now, <b>GO MAKE SOMETHING!</b>
        </p>
      </header>
    </div>
  )
}
