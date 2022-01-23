type Replace<S extends string, From extends string, To extends string> = 
  From extends ''
  ? S
  : S extends `${infer H}${ From } ${ infer T }`
    ? `${ H } ${ To } ${ T }`
    : S

// tyep aa = 'a'
// type bb = 'b'
// type cc = aa extends bb ? string : boolean
// 字符串只要不一样， extends 就是 false