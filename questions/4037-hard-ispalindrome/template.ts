type ReverseString<T extends string, R extends string = ''> = T extends ''
    ? R
    : T extends `${infer Head}${infer Tail}`
        ? ReverseString<Tail, `${Head}${R}`>
        : R

type IsPalindrome<T extends string | number> = `${T}` extends ReverseString<`${T}`> ? true : false

// 二、
// type IsPalindrome<T extends string | number> = T extends `${infer F}${infer R}`
//   ? R extends `${infer M}${infer L}`
//     ? F extends L
//       ? IsPalindrome<M>
//       : false
//     : true
//   : true;