type IsNever<T> = [T] extends [never] ? true : false

// 这样不行，j0会是never，判断是否等于never还是用[]包裹，貌似不包裹就直接返回never
// type IsNever<T> = T extends never ? true : false
// type IsNever<T> = T extends string ? true : false

type j0 = IsNever<never>  // never
type aj = never extends never ? true : false  // true
type aj1 = '' extends never ? true : false // false
type aj2 = null extends never ? true : false // false