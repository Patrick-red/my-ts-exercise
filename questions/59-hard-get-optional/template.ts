type GetOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

// type test11 = {name?: string} extends {name: string} ? true : false  // false
// type test12 = {name: string} extends {name?: string} ? true : false  // true
// partial extends require 为false，反过来为true