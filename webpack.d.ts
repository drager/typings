declare var module: {
  hot: {
    accept(path: string, fn: (updatedModules: any) => void)
  }
}

declare function require(path: string): any

declare module require {
  function ensure(modules: string[], callback: (require: (path: string) => any) => void)
}

declare module 'websocket' {
  export const server: any
}

declare const __ROOT_PATH__: string
