type CamelizeString<T> = T extends `${infer H}_${infer U}` ? `${H}${Capitalize<CamelizeString<U>>}` : T

// type Camelize<T extends object> = {
//     [K in keyof T as K extends K ? CamelizeString<K> : never]: T[K] extends object ? Camelize<T[K]> : T[K]  // 这样不会递归
// }


export type Camelize<T> = T extends any[] ? {
    [K in keyof T]: Camelize<T[K]>
} : T extends object ? {
    [K in keyof T as CamelizeString<K>]: Camelize<T[K]>
} : T


// type test11 = Camelize<{
//     some_prop: string, 
//     prop: { another_prop: string },
//     array: [{ snake_case: string }]
//   }>



  export {}

