type First<T extends any[]> = T extends [infer R, ...any[]] ? R : never

// 二
// type First<T extends any[]> = T extends [] ? never : T[0]
// type Fi<T extends any[]> = T extends [] ? string : boolean
// type as = Fi<[1]>
// 这里的 extends 会判断是否空数组

// 三
// 用length判断T是否长度不等于0
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// type First<T extends any[]> = T[0]
// type a = First<[]>
// 这里会返回undefined


// 四
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// type asa<T extends any[]> = T[number]
// type ass = asa<[]>
// ass = never 
// 所有type extends never 为 false


// type jj = 'a' 
// type kk = 'a' | 'c'
// type ja = jj extends kk ? string : boolean
// extends 判断前一个是否后一个得具体表现