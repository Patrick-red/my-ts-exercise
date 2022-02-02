type LessThan<T extends number, U extends number> = T extends U ? false : GreaterThan<U, T>
type GreaterOrEqual<T extends number, U extends number> = T extends U ? true : GreaterThan<T, U>

// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T['length'],
//   I extends any[] = [],
//   R extends any[] = []
//   > = I['length'] extends T['length']
//   ? R
//   : GreaterOrEqual<I['length'], Start> extends true
//     ? LessThan<I['length'], End> extends true
//       ? Fill<T, N, Start, End, [...I, 1], [...R, N]>
//       : Fill<T, N, Start, End, [...I, 1], [...R, T[I['length']]]>
//     : Fill<T, N, Start, End, [...I, 1], [...R, T[I['length']]]>

    type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    L extends any[] = [],
  > = T extends [infer H, ...infer R]
    ? [...L, 0][Start] extends undefined
      ? Fill<R, N, Start, End, [...L, H]>
      : [...L, 0][End] extends undefined
        ? Fill<R, N, Start, End, [...L, N]>
        : Fill<R, N, Start, End, [...L, H]>
  : L
    
  // 通过数组元素判断是否在范围内