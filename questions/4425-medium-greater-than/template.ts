type Minus<T extends number, U extends any[] = []> = U['length'] extends T
  ? U extends [infer R, ...infer K] ? K['length'] : never
  : Minus<T, [...U, 1]>

type GreaterThan<T extends number, U extends number> = U extends 0
  ? T extends 0
    ? false
    : true
  : T extends 0
    ? false
    : GreaterThan<Minus<T>, Minus<U>>

    // type GreaterThan<T extends number, U extends number, TL extends number[] = []> = 
    // T extends TL['length']
    //   ? false
    //   : U extends TL['length']
    //     ? true
    //     : GreaterThan<T, U, [...TL, 0]>
    // 和同一个数组对比