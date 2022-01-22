declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]
}>

// 不能直接 keyof values ，因为values是值，要新增一个 T 类型来获取values的类型
// 然后再遍历 T


// 遍历数组，即使用 {} 包裹，最后的也是数组
// type arr = ['a', 'b']
// type sada<T> = Promise<{
//   [K in keyof T]: T[K]
// }>
// type aasa = Expect<Equal<sada<arr>, Promise<['a', 'b']>>>