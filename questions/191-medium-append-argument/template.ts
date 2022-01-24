type AppendArgument<Fn, A> = Fn extends (...arg: infer T) => infer R
  ? (...a: [...T, A]) => R
  : never

  // 函数获取类型！