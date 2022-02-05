type ObjExclude<T, U> = {
    [K in keyof T as K extends U ? never : K]: T[K]
}


type GetRequired<T> = {
    [K in keyof T as K extends K ? PartialByKeys<T, K> extends T ? never : K : never]: T[K]
}

// 二
// your answers
// type GetRequired<T> = {
//     [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
// };

// type total = {
//     key: string
// }

// type partial1 = {
//     key?: string
// }

// type copy<T> = {
//     [K in keyof T]: T[K]
// }
// type copypartial = copy<partial1>

// type thi = partial1 extends total ? true : false  // false
