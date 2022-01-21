type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P]
} & {
    [R in keyof Omit<T, K>]: T[R]
}

// 泛型里的 = 是默认值
// 如果没有传，就默认是全部 realonly
