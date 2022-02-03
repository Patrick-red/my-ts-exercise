type ToBeString<T extends string> = T

type Join<T extends any[], U extends string | number, R extends string = ''> = T extends []
    ? R
    : T extends [ToBeString<infer Head>, ...infer Tail]             // 通过在这里加一个无意义type来限制Head的类型
        ? Join<Tail, U, `${R}${R extends '' ? '' : U}${Head}`>
        : R

type test1 = Join<["a", "p", "p", "l", "e"], "-">