type Space = " " | "\n\t"
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S

// 这里模板字符串里应为 type 变量