type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}

type ParsePrintFormat<S, R extends Array<any> = [], U = false> = S extends `${infer B}${infer A}`
  ? U extends true
    ? ParsePrintFormat<A, B extends keyof ControlsMap ? [...R, ControlsMap[B]] : R, false>
    : ParsePrintFormat<A, R, B extends '%' ? true : false>
  : R
 
  // 二
  // type ParsePrintFormat<S> = S extends `${any}%${infer A}${infer B}` ? A extends keyof ControlsMap ? [ControlsMap[A], ...ParsePrintFormat<B>] : ParsePrintFormat<B> : []

// type test11 = '' extends `${infer U}` ? true : false // true
// type test12 = '' extends `${infer U}${infer P}` ? true : false  // false
// type test11 = ParsePrintFormat<'The result is %d.'>