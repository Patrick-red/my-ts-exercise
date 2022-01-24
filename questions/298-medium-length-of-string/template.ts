type LengthOfString<S extends string, L extends any[] = []> =
  S extends `${infer H}${infer B }`
    ? LengthOfString<B, [...L, H]>
  : L['length']
    
// type aas = 'asf'
// type aass = aas extends `${infer H}${infer T}` ? T:  never
// H 'a'  T 'sf'
// 模板字符串第一个会是一个字符，后面的是多个字符，数组的话可以自己定义，见15