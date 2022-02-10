
// 错误
// export type Enum<T extends readonly string[], N extends boolean = false, K extends any[] = [], Head = First<T>> = Head extends string ?  Enum<Shift<T>, N, [...K, 1]> & {
//     readonly [U]: N extends true ? K['length'] : Head
// }: {}


// // your answers
type StringToNumber<S extends string, R extends any[] = []> = S extends `${R['length']}` ? R['length'] : StringToNumber<S, [...R, 0]>

type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in keyof T as T[K] extends string  // 这里通过数组的key和其string[]来进行判断，其他key的值都不是string！！！
    ? Capitalize<T[K]>
    // : never]: N extends false ? T[K] : StringToNumber<K>  // 这里要 K extends string这一部分，不然后面会是union类型
    : never]: K extends string ? (N extends false ? T[K] : StringToNumber<K>) : never;
    // : never]: T[K]
}

// 二、这样&可以
// type TupleIndex<T> = 
//   T extends readonly [...infer Rest, infer L]
//     ? TupleIndex<Rest> & { [p in L & string]: Rest['length'] }
//     : {};


// type Enum<T extends readonly string[], N extends boolean = false> = {
//   readonly [K in T[number] as Capitalize<K>]: (
//     N extends true 
//       ? K extends keyof TupleIndex<T> ? TupleIndex<T>[K] : K 
//       : K
//   );
// }


// // 注意：数组这样便利的时候，会有不同
// let ajs = ['name', 'a'] as const
// type A<T> = {
//     // readonly [K in keyof T]: T[K] // 这样的话就只有数组的内容，才会返回数组
//     // readonly [K in keyof T as T[K] extends any ? K: never]: 1 extends number ? T[K] : never // 这样的话才会遍历出其他方法之类的内容
//     // readonly [K in keyof T as T[K] extends string ? K: never]: T[K]  // 这样又不一样
//     readonly [K in keyof T as T[K] extends string ? T[K]: never]: T[K]  // 这样就会出现union，猜：可以理解为k的便利被T[K]用了
// }
// type test13 = A<typeof ajs>
// type asq = 'a' | 'b' extends string ? true : false // true