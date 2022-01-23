type Space = ' ' | '\n\t' | '\t'
export type Trim<S extends string> = S extends `${Space}${infer R}`
  ? Trim<R>
  : S extends `${ infer U }${ Space }`
    ? Trim<U>
    : S

// 这里会和106里的 Space 冲突
// 只有用 export 把该文件创建作用域
// 才能避免冲突，不过同样的， test 文件里也要 import