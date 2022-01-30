type ObjectEntries<T, K extends keyof T = keyof T> = K extends keyof T ? [K, Required<T>[K]] : never
// 这里要加required，不然tes1t每个值会多个undefined，因为是partial的


// 要加extends才会遍历，这里不会
// type ObjectEntries<T, K extends keyof T = keyof T> = [K, T[K]]
// [keyof Model, [string | number | string[] | null]]