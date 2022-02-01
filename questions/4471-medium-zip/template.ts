type Zip<T extends any[], U extends any[], R extends any[] = [], N extends any[] = []> = N['length'] extends T['length']
  ? R
  : N['length'] extends U['length'] ? R : Zip<T, U , [...R, [T[N['length']], U[N['length']]]], [...N, 0]>

  // 优化成一个数组和判断条件
  // type Zip<A extends any[], B extends any[], L extends any[] = []> = L['length'] extends A['length'] | B['length']
  // ? L
  // : Zip<A, B, [...L, [A[L['length']], B[L['length']]]]>

  // 操作原数组
// your answers
// type Zip<T extends unknown[], U extends unknown, R extends unknown[] = []>
// = T extends [infer TFirst, ...infer TRest]
// ? U extends [infer UFirst, ...infer URest]
//   ? Zip<TRest, URest, [...R, [TFirst, UFirst]]>
//   : R
// : R;