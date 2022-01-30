type Shift<T> = T extends [infer H, ...infer U] ? [...U] : never

