
type Chainable<T extends Record<string, any> = {}> = {
  option<K extends string, V extends any>(key: K, val: V): Chainable<T & Record<K , V>>,
  get(): T
}

// 自建类型进行自我拓展并比较

// 这里只进行类型检查，不会具体实现，也不会检查具体实现

// 编译后，不会报错，执行会报错
// "use strict";
// exports.__esModule = true;
// var result = a
//     .option('foo', 123)
//     .option('bar', { value: 'Hello World' })
//     .option('name', 'type-challenges')
//     .get();

// 正确，可以这样写
// type Pon = {
//   get(): string,
//   a: string
// }

// const bob: Pon = {
//   get() {
//     return this.a
//   },
//   a: 'BOB'
// }