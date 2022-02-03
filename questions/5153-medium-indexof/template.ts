type IndexOf<T extends any[], U, K extends any[] = []> = T[K['length']] extends U 
    ? K['length'] 
    : K['length'] extends T['length'] 
        ? -1
        : IndexOf<T, U, [...K, 1]>

