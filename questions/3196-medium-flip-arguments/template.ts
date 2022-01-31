// type FlipArguments<T extends (...arg: any[]) => any> = (...arg: Reverse<Parameters<T>>) => ReturnType<T>
// 用其他泛型帮助

type FlipArguments<T extends (...arg: any[]) => any> = T extends (...arg: infer A) => infer R
  ? (...arg: Reverse<A>) => R
  : never

// 注意第一行和第二行类型表示写法 ...arg: infer A