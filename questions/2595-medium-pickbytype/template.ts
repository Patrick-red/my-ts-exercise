
type PickByType<T, U> = {
    [K in keyof T as string extends any ? T[K] extends U ? K : never : never]: T[K]
}
// 这里要加as string，不然会有循环约束
// TODO: figure out why