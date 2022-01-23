export type Capitalize<S extends string> = S extends `${infer H}${ infer T }`
  ? `${ Uppercase<H>}${ T }`
  : ''

// Uppercase

