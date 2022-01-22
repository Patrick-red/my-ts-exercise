
// ['a'] extends [infer first, ...infer rest] 也为 true， 所以要先判断只有一个的情况
type Last<T extends any[]> = T extends [infer R]
  ? R
  : T extends [infer Head, ...infer Tail]
    ? Last<Tail>
    :never
 
// 二
// ...可以放在头部
// type Last<T extends any[]> = T extends [...infer first, infer last ] ? last: never;

// 三
// type Last<T extends any[]> = [undefined, ...T][T['length']]


// 都是 string
// type a = ['a']
// type c = ['a', 'c']
// type d = a extends c ? boolean : string
