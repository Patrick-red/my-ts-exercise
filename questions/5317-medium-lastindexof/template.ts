
// type LastIndexOf<T extends any[], U, K extends any[] = [], R = -1> = T[K['length']] extends U
//     ? K['length'] extends T['length'] ? T['length'] : LastIndexOf<T , U, [...K, 1], K['length']>
//     : K['length'] extends T['length'] ? R : LastIndexOf<T, U, [...K, 1], R>


    // your answers
type LastIndexOf<T extends unknown[], U> = T extends [...infer Rest, infer Last]
? Last extends U
  ? Rest["length"]
  : LastIndexOf<Rest, U>
: -1;

// 从后开始遍历