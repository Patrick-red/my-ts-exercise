type KebabCase<S extends string, P extends string = ''> = S extends `${infer H}${infer T}`
    ? H extends Lowercase<H>
        ? `${H}${KebabCase<T, '-'>}`
        : `${P}${Lowercase<H>}${KebabCase<T, '-'>}`
    : S

// type as = 's'
// type cc = as extends `${infer T}${infer B}` ? string : boolean
// cc: string