// type ShiftTimes<T extends any[], U extends number, K extends any[] = []> = K['length'] extends U
//   ? T
//   : ShiftTimes<Shift<T>, U, [...K, 1]>

// type Slice<T extends any[], U extends number, K extends any[] = []> = K['length'] extends U
//   ? K
//   : Slice<Shift<T>, U, [...K, First<T>]>

// type Chunk<T extends any[], U extends number> = true extends GreaterOrEqual<U, T['length']>
//   ? T extends [] ? [] : [T]
//   : [Slice<T, U>, ...Chunk<ShiftTimes<T, U>, U>]

// type test1 = Chunk<[1, 2, 3], 2>

type Chunk<T extends any[], N extends number, C extends any[] = [], L extends any[] = []> = T extends [infer H, ...infer R]
  ? C['length'] extends N 
    ? Chunk<R, N, [H], [...L, C]>
    : Chunk<R, N, [...C, H], L>
  : C extends [] 
    ? L 
    : [...L, C]
    
    // C用来存储，L是最终数组