// your answers
// type IsTuple<T> = T extends readonly unknown[]
// ? number extends T["length"]
//   ? false
//   : true
//   : false;

// type test1 = number[] extends any[] ? true : false  // true

  // 四
// type test1<T extends readonly unknown[]> = number extends T["length"] ? true : false
// type test2 = test1<[]>  // false
// type test3 = test1<number[]>   // true
// type test1 = number[]['length'] // number
// type test3 = string[]['length'] // number
// type test2 = []['length'] // 0

// type test1 = [number, string, boolean, symbol] extends any[] ? true : false  // true


  // 三、这里的T是type
// let test1: number[] = [1, 2]
// type test2 = IsTuple<test1>

  // 一
// type test1 = [] extends readonly [] ? true : false // true
// type test2 = [1] extends readonly [1] ? true : false // true

// 二
  // type IsAny<T> = 1 extends T & 0 ? true : false  // 这里T要不是any的话T & 0就会是0, any & 其他type == any
  // type IsAny<T> = T & '0'
  // type test1 = IsAny<any>

// type IsTuple<T> = true extends IsAny<T> | IsNever<T>
//   ? false
//   : T extends readonly [infer First, ...infer Other] | readonly []
//     ? true
//     : false

type IsTuple<T> =  T extends readonly [infer First, ...infer Other] | readonly []
    ? true
    : false