declare module 'redux-thunk' {
  import { Dispatch } from 'redux'

  export interface Thunk {
    <T>(dispatch: Dispatch<T>, getState?: () => T): any
  }

  export default function thunk(): Thunk
}
