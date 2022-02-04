
type Curried<T> = T extends (...args: infer P) => infer R
    ? P extends [infer Head, ...infer Tail]
        ? (arg: Head) => Curried<(...arg: Tail) => R>   // 这里返回的应该是个函数
        : R
    : never

declare function Currying<T>(fn: T): Curried<T>
