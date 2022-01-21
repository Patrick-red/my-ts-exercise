type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P]
}

// 头部用 extedns 对 K 进行约束
// 左侧要加 []
// 不能用 extends

