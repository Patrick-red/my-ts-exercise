type TupleToNestedObject<T, U> = T extends [infer H, ...infer B]
  ? B extends [] ? Record<H & string, U> : Record<H & string, TupleToNestedObject<B, U>>
  // 这里的H是 'a'类型不满足约束“string | number | symbol”，要加& string
  : U

// 这里是true，但是上面却不满足
// type ah = 'a'
// type aaa = string | number | symbol
// type r = a extends aaa ? true : false // true

// type tes = TupleToNestedObject<['a'], string>
// type rng = TupleToNestedObject<['a', 'b'], number>

// type te = ['a']
// type te = []
// type test1 = te extends [infer H, ...infer B] ? true : false  // true
// type test1 = te extends [infer H, ...infer B] ? B : false  // []
// type test1 = te extends [infer H, ...infer B] ? H : false  // []