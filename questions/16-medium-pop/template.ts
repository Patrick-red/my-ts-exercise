type Pop<T extends any[]> = T extends [infer K]
  ? []
  : T extends [...infer R, infer L]
    ? R
    : never
