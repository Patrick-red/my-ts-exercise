type RequiredByKeys<T, K = keyof T> = {
    [U in keyof T as U extends K ? never : U]: T[U]   // 这里要加 as U, 不然会有循环约束
} & {
    [U in keyof T as U extends K ? U : never]-?: T[U]
} extends infer A  // 这里要重新遍历，不然会是 {} & {} 的类型
    ? {
        [P in keyof A]: A[P]
    }
    : never
