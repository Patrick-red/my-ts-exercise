type Fibonacci<T extends number, U extends any[] = [1, 1, 1], R1 extends any[] = [1], R2 extends any[] = [1]> = T extends 1 | 2
  ? 1
  : U['length'] extends T
    ?  [...R1, ...R2]['length']
    : Fibonacci<T, [...U, 1], R2, [...R1, ...R2]>

// 非递归方式