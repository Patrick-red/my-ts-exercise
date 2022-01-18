
// 内置readonly只做最外面一层
type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}