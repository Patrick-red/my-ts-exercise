type OptionalKeys<T, K extends keyof T = keyof T> = K extends K
  ? T[K] extends Required<T>[K] ? never : K
  : never

type asa = OptionalKeys<{ a: undefined, b?: undefined }>