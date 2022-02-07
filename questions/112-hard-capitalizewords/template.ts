type noChar = ' ' | ',' | '.'
type CapitalizeWords<S extends string, R extends string = '', Pre extends string = ''> = S extends `${infer W}${infer Rest}`
  // ? Pre extends noChar ? CapitalizeWords<Rest, `${R}${Uppercase<W>}`, W
  ? CapitalizeWords<Rest, `${R}${Pre extends noChar ? Uppercase<W> : W}`, W>
  : Capitalize<R>
type test21 = CapitalizeWords<'foo bar hello world'>