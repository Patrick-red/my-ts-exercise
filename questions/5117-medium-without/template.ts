type toArray<T> = T extends any[] ? T : [T]

type Without<T extends any[], U, K extends any[] = [], R extends any[] = []>
  = K['length'] extends T['length']
  ? R
  : T[K['length']] extends toArray<U>[number]
    ? Without<T, U , [...K, 1], R >
    : Without<T, U , [...K, 1], [...R, T[K['length']]]>
