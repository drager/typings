declare module 'redux-thunk' {
  import {Dispatch, Middleware} from 'redux'

  export interface Thunk extends Middleware {}
  export interface ThunkInterface {
    <T>(dispatch: Dispatch<T>, getState?: () => T): any
  }

  const thunk: Thunk
  export default thunk
}
