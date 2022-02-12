// type Split<S extends string, SEP extends string, R extends string[] = []> = S extends `${infer _}` ? S extends `${infer Head}${SEP}${infer Tail}`
//     ? Split<Tail, SEP, [...R, Head]>
//     : S extends SEP ? R : [...R, S]
//     : string[]

//     type test11 = Split<'', 'z'>

    
// 二、
type Split<
S extends string,
SEP extends string
> = S extends `${infer F}${SEP}${infer R}`
? [F, ...Split<R, SEP>]
: SEP extends ''
  ? []
  : string extends S
    ? S[]
    : [S]