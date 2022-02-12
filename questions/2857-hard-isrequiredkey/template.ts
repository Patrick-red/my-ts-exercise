// 这里约束，但不是等于
// type IsRequiredKey2<T, K extends keyof T> = K extends K ? T[K] extends Required<T>[K] ? true : false : false
// type IsRequiredKey<T, K extends keyof T> = IsRequiredKey2<T, K> extends true ? true : false

// type test11 = IsRequiredKey<{ a: number, b?: string, c: string },'a'|'c'>  // a: string | number  ⚠️

//  二、用Record，内部第一个k会自己遍历，但是第二个不会⚠️
type IsRequiredKey<T, K extends keyof T> = Record<K, T[K]> extends Record<K, Required<T>[K]> ? true : false;