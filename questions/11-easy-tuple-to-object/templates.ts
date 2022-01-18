type TupleToObject<T extends readonly any[]> = {
    // [P in keyof T]: P
    // [P in typeof T]: P  // “T”仅表示类型，但在此处却作为值使用。ts(2693)
    // [P in T]: P  // 不能将类型“T”分配给类型“string | number | symbol”。
    [P in T[number]]: P  // 这里会自动遍历
}