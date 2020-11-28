import produce from 'immer'
import create, { State, StateCreator } from 'zustand'

/**
 * Basic State for template.
 * Probably worth moving to /model and importing in the actual application
 */
interface AppModel extends State {
  count: number
  increment: (by: number) => void
}

function makeStore(set: (fn: (draft: AppModel) => void) => void): AppModel {
  return {
    count:     0,
    increment: by => set(state => ({ count: state.count + by })),
  }
}

// Middleware: makes all calls to `.set` use immer by default!
const immer = <T extends State>(
  config: StateCreator<T, (fn: (draft: T) => void) => void>,
): StateCreator<T> => (set, get, api) =>
  config((fn) => set(produce(fn) as (state: T) => T), get, api)


export const useStore = create<AppModel>(immer(makeStore))
