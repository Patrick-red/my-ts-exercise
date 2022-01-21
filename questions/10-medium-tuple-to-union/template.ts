type TupleToUnion<T extends any[]> = T[number] extends any ? T[number] : never

// 二
// type TupleToUnion<T extends any[]> = T[number]
// 直接便利 number 就可以便利成 union 类型