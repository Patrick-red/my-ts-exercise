
// 这里extends会对P进行约束，内部有循环对比，和三元表达式作用不一样
// P 被约束成 T，相当于===
type MyPick<T, P extends keyof T> = {
    [K in P]: T[K]
}
