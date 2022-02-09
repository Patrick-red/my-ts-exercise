
type TensArray<T extends any[]> = [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
]

type ToArray<S, R extends any[] = []> = `${R['length']}` extends S ? R : ToArray<S, [...R, 1]>

type ToNumber<S extends string, R extends any[] = []> = S extends `${infer H}${infer T}`
    ? ToNumber<T, [...TensArray<R>, ...ToArray<H>]>
    : R['length']

