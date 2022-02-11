type StringToUnion<T extends string> = T extends `${infer H}${infer U}`
    ? H | StringToUnion<U>
    : never

export type DropString<S, R extends string> = S extends `${infer H}${infer T}`
    ? `${H extends StringToUnion<R> ? '' : H}${DropString<T, R>}`
    : ''

export {}

// type test11 = DropString<'butter fly!', 'but'>


// 二、遍历第二个字符，👍
// type DropString<
//   T extends string,
//   K extends string
// > = K extends `${infer A}${infer Res}` ? DropString<DropOne<T, A>, Res> : T;

// type DropOne<
//   T extends string,
//   K extends string
// > = T extends `${infer A}${K}${infer B}` ? DropOne<`${A}${B}`, K> : T;
