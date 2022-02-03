// type Unique<T extends any[], R extends any[] = [], K extends any[] = []> = K['length'] extends T['length']
//  ? R
//  : T[K['length']] extends R[number]
//     ? Unique<T , R, [...K, 1]>
//     : Unique<T , [...R, T[K['length']]], [...K, 1]>

    type Unique<T, Union extends any = never> = T extends [infer L, ...infer R]
    ? L extends Union
      ? Unique<R, Union>
      : [L, ...Unique<R, Union | L>]
    : T;
  
    // 记录出现的值，组成元组