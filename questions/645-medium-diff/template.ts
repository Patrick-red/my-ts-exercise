type Diff<T, U> = {
    [K in Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>]: K extends keyof T
                                ? T[K]
                                : K extends keyof U
                                    ? U[K]
                                    : never
}


// type Diff<T, U> = {
//     [K in keyof T | keyof U]: K extends keyof T
//                                 ? K extends keyof U
//                                     ? never
//                                     : T[K]
//                                 : K extends keyof U
//                                     ? U[K]
//                                     : never
// }

type Foo = {
    name: string
    age: string
  }
  type Bar = {
    name: string
    age: string
    gender: number
  }

  type aq = Diff<Foo, Bar>
//   还是有，类型为never