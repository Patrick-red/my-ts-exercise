type Reverse<T, U extends any[] = []> = T extends [...infer B, infer H]
  ? Reverse<B, [...U, H]>
  : U

// type t = Reverse<['a', 'b', 'C']>