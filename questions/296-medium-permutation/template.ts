type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends any
    ? [T, ...Permutation<Exclude<U, T>>]
    : U
   
// 这里用 [T] extends [never]
// T不会分开，所以要向上面那样 T extends any
// 才可以分开
// type Permutation<T, U = T> = [T] extends [never]
//   ? []
//   : [T]
// type asd = Permutation<'A' | 'B'>
