type Make10Array<T extends any[]> = [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T
]

type Make1Array<T extends string, L extends any[] = []> = `${L['length']}` extends T
    ? L
    : Make1Array<T, [...L, 1]>

type MakeNumToArray<T extends string, L extends any[] = []> = T extends `${infer H}${infer R}`
    ? MakeNumToArray<R, [...Make10Array<L>, ...Make1Array<H>]>
    : L

type Pop<T extends any[]> = T extends [...infer H, infer R] ? [...H] : []

// type Make10Array<T extends any[]> = [
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T,
//   ...T
// ]
// type Make1Array<T, L extends any[] = []> = `${L['length']}` extends T
//   ? L
//   : Make1Array<T, [...L, 1]>
// type AddEqualArrayLength<
//   T extends string,
//   L extends any[] = []
// > = T extends `${infer U}${infer R}`
//   ? AddEqualArrayLength<R, [...Make10Array<L>, ...Make1Array<U>]>
//   : L

// type Pop<T extends any[]> = T extends [...infer F, number] ? F : never
// export type MinusOne<T extends number> = Pop<AddEqualArrayLength<`${T}`>>['length']

export type MinusOne<T extends number> = Pop<MakeNumToArray<`${T}`>>['length']

  export {}