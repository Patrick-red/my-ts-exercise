type FilterOut<T extends any[], F, R extends any[] = []> = T extends [infer Head, ...infer Tail]
    ? [Head] extends [F] ? FilterOut<Tail, F, R> : FilterOut<Tail, F, [...R, Head]>
    : R
