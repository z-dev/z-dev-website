export const isServer = () => typeof process !== 'undefined' && process.release
export const isBrowser = () => !isServer()
