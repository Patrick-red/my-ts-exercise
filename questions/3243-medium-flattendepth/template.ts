type FlagOnce<T extends any[]> = T extends [infer H, ...infer B]
  ? H extends any[]
    ? [...H, ...FlagOnce<B>]
    : [H, ...FlagOnce<B>]
  : []


// type test1 = [[1], 2, [3, 4], [[[5]]]]
// type test2 = test1[number] extends any[] ? true : false  // false
// type test2 = test1[number] // [1] | 2 | [3, 4] | [[[5]]]
// type test3 = [1] | 2 | [3, 4] | [[[5]]]
// type test4 = test3 extends any[] ? true : false  // false
// type test4 = any[] extends test3 ? true : false  // false
// any[] 和 [1] | 2 互不为具体表现
// type test4 = [1] extends any[] ? true : false  // true

// type test1 = 1 | 2
// type s = test1 extends 1 ? true : false // false
// union 类型 extends type 

type FlattenDepth<T extends any[], U = 1, R extends any[] = []> = R['length'] extends U
    ? T
    : T extends FlagOnce<T>
      ? T
      : FlattenDepth<FlagOnce<T>, U, [...R, 1]>

      
// type test3 = FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817> // 类型实例化过深，且可能无限。