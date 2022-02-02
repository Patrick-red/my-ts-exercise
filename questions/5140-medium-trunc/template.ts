
type Trunc<T extends string | number> = `${T}` extends `${infer H}.${infer Tail}` ? `${H}` : `${T}`

