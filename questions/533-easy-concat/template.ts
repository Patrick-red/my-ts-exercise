type Concat<T extends any[], U extends any[]> = [...T, ...U]

// ...T 可以 ...T[number]不行
