type MyParameters<T extends (...args: any[]) => any> = T extends (...arg: infer R) => any ? R : never

// 注意这里 infer 的位置