type LookUp<T, U> = T extends { type: string }
  ? U extends T['type'] ? T : never
  : never

// 报错：类型“"type"”无法用于索引类型“T”
// 因为 T 类型不确定，所以要提示T满足 {type: string}
// type LookUp<T, U> = U extends T['type'] ? T : never