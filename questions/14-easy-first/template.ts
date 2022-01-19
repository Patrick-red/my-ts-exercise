type First<T extends any[]> = T extends [infer R, ...any[]] ? R : never


// 用length判断T是否长度不等于0
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]