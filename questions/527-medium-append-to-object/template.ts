type AppendToObject<T, U extends string, V> ={
  [key in keyof T | U]: key extends keyof T ? T[key] : V
}
// 用 & 和不用的类型不一样

// 这里已经确定 key是T的key，所以可以
// 下面那个因为key 不确定是不是T的key，所以不可以
// 只判断是，不判断不是

// type AppendToObject<T, U extends string, V> ={
//   [key in keyof T | U]: key extends U ? V : T[key]
// }



// 这里不能多个
// type AppendToObject<T, U extends string, V> ={
//   [P in U]: V
//   [K in keyof T]: T[K]
// }
// type test1 = {
//   key: 'cat'
//   value: 'green'
// }
// type testExpect1 = {
//   key: 'cat'
//   value: 'green'
//   home: boolean
// }

// type kv = AppendToObject<test1, 'home', boolean>

// let a:kv = {
//   key: 'cat',
//   value: 'green',
//   home: true

