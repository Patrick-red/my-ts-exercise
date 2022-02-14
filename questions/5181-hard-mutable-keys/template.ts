type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
  ? true
  : false
type MutableKeys<T> = keyof {
  [K in keyof T as MyEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never]: any
}

// 这个在4.5.4及以上可以，低版本可能不行
