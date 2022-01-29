type IsUnion<T, U = T> = T extends U
    ? [U] extends [T]
    // ? U extends T       // 这里U会分别判断，所以type会是boolean, 但是下面又不会
    // ? [T] extends [U]   // T extedns U is always true
        ? false
        : true
    : never
type test = IsUnion<'a'|'b'>  // boolean

// 这里不会分别判断，泛型会分开判断
// type jsa = ['a' | 'b'] extends ['a'] ? true : false  // false
// type jsa1 = 'a' | 'b' extends 'a' ? true : false     // false
// type jsa2<T, U> = T extends U ? true : false     // false
// type jsa3 = jsa2<'a' | 'b', 'a'>     // boolean

// your answers
// type IsUnion<T, U = T> = T extends T ? [Exclude<U, T>] extends never[] ? false : true : never

// your answers
// type IsUnion<T, U = T> = T extends U
// ? [U] extends [T]
//   ? false
//   : true
// : never;
