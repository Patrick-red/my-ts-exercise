// type BEM<B extends string, E extends string[], M extends string[]
//   , A extends E[number] = E[number], U extends M[number] = M[number]> = E extends []
//   ? M extends []
//     ? B
//     : U extends U
//       ? `${B}--${U}`
//       : never
//   : M extends []
//     ? A extends A
//       ? `${B}__${A}`
//       : never
//     : U extends U
//       ? `${B}__${A}--${U}`
//       : never
// 泛型定义值A U

type BEM<B extends string, E extends string[], M extends string[]> = 
  `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`

// 这里的T[number]会自动遍历！！！！！！！！！